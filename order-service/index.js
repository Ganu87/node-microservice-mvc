const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'orders',
    password: 'password',
    port: 5432,
});

// Routes
app.get('/orders', async (req, res) => {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
});

app.post('/orders', async (req, res) => {
    const { product_id, quantity } = req.body;
    const result = await pool.query(
        'INSERT INTO orders (product_id, quantity) VALUES ($1, $2) RETURNING *',
        [product_id, quantity]
    );
    res.status(201).json(result.rows[0]);
});

// Start server
app.listen(3002, () => console.log('Order Service running on port 3002'));
