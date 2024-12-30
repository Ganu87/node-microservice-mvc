const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
  mongoose.connect('mongodb://localhost:27017/products', {
    //useNewUrlParser: true,
  }).then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/products', productRoutes);
if (process.env.NODE_ENV !== 'test') {


  // Start Server
  const PORT = 3001;
  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
  }
}

module.exports = app;