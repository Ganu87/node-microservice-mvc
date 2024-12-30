const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/products', {
    //useNewUrlParser: true,
}).then(() => console.log('Connected to MongoDB.'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Start Server
const PORT = 3001;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
