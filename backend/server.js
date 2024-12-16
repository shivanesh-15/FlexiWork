const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config();

const authRoutes = require('./routes/auth');  

const app = express();


app.use(express.json());
app.use(cors());  

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', authRoutes);


app.get('/api/data', (req, res) => {
 
  res.json({ message: 'Hello from the backend!' });
});


app.post('/api/submit', (req, res) => {
  const { data } = req.body; 
  console.log('Received data:', data);  

  

  
  res.json({ message: 'Data received successfully', receivedData: data });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
