const db = require('../db/db');

// Get all orders
async function getAllOrders  ()  {
    console.log("in order model");
    const result = await db.query('SELECT * FROM orders');
    return result.rows;
};

// Create a new order
async function createOrder (order)  {
    console.log("in order model");
    const { productId, quantity } = order;
    const result = await db.query(
        'INSERT INTO orders (product_id, quantity) VALUES ($1, $2) RETURNING *',
        [productId, quantity]
    );
    return result.rows[0];
};

module.exports={
    getAllOrders,
    createOrder,
}