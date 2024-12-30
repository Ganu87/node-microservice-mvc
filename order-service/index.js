const express = require('express');
const orderRoutes = require("./routes/orderRoutes.js");

const app = express();
app.use(express.json());
console.log("in order index.js");
app.use('/orders', orderRoutes)


// Start server
if (process.env.NODE_ENV !== 'test') {
    app.listen(3002, () => console.log('Order Service running on port 3002'));
}

module.exports = app;