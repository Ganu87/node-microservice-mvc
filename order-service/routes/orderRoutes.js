const express = require('express');
const { getOrders, createOrder } = require("../controllers/orderController.js");

const router = express.Router();
console.log("in order routes");
// Route to get all orders
router.get('/', getOrders);

// Route to create a new order
router.post('/', createOrder);

module.exports = router;

