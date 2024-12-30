const mongoose = require('mongoose');

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/products', {
//     //useNewUrlParser: true,
//   }).then(() => console.log('Connected to MongoDB.'))
//     .catch(err => console.error('Failed to connect to MongoDB:', err));

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
