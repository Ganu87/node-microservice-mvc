const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');

const router = express.Router();

// Route to get all products
router.get('/', getProducts);

// Route to create a new product
router.post('/', createProduct);

module.exports = router;
