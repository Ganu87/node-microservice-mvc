const { Pool } = require('pg');

// Configure PostgreSQL connection
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodejs',
    password: 'postgresql@123',
    port: 5432,
});
console.log("in order db.js");
pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

module.exports = pool;
