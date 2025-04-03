const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const { router: authRoutes, initializeWebSocket } = require('./routes/auth');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);


initializeWebSocket(io);


mongoose.connect('mongodb://127.0.0.1:27017/flexiwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
