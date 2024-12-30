const OrderModel = require('../models/orderModel');

// Get all orders
const getOrders = async (req, res) => {
    console.log('Entering getOrders function...');
    try {
        console.log('Fetching orders...');
        const orders = await OrderModel.getAllOrders();
        console.log('Orders fetched successfully:', orders);

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error.message);
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
    console.log('Exiting getOrders function...');
};


// Create a new order
console.log("in create order controller");
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