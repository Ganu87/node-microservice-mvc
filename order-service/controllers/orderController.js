const OrderModel = require('../models/orderModel');

// Get all orders
async function getOrders  (req, res) {
    try {
        console.log("in order controller");
        const orders = await OrderModel.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Failed to fetch orders', error });
    }
};

// Create a new order
async function createOrder  (req, res) {
    try {
        const { productId, quantity } = req.body;
        if (!productId || !quantity) {
            return res.status(400).json({ message: 'Product ID and quantity are required' });
        }
        const newOrder = await OrderModel.createOrder({ productId, quantity });
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Failed to create order', error });
    }
};


module.exports={
    getOrders,
    createOrder,
}