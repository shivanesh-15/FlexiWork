const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust path if necessary

const router = express.Router();
let io;

// Initialize WebSocket
function initializeWebSocket(ioInstance) {
  io = ioInstance;
  io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    socket.on('message', (data) => {
      console.log('Message received:', data);
      io.emit('message', data); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
      console.log('A client disconnected:', socket.id);
    });
  });
}

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password, role, contactNumber, location, serviceDetails } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, password, role, contactNumber, location, serviceDetails });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

    if (io) {
      io.emit('notification', { message: `New user registered: ${name}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id, role: user.role }, 'secretkey', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = { router, initializeWebSocket };
