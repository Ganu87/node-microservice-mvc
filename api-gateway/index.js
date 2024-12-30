const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// Proxy for Product Service
app.use('/products', async (req, res) => {
    const method = req.method.toLowerCase();
    try {
        const response = await axios({
            method,
            url: `http://localhost:3001${req.originalUrl}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        console.error('Error communicating with Product Service:', err.message);
        res.status(err.response?.status || 500).send(err.message || 'Error occurred');
    }
});

// Proxy for Order Service
app.use('/orders', async (req, res) => {
    const method = req.method.toLowerCase();
    try {
        const response = await axios({
            method,
            url: `http://localhost:3002${req.originalUrl}`,
            data: req.body,
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        console.error('Error communicating with Order Service:', err.message);
        res.status(err.response?.status || 500).send(err.message || 'Error occurred');
    }
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
