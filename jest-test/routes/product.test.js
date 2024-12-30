const request = require("supertest");
const app = require("../../product-service/index.js") ;

it('should return a list of products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
}, 50000); // Increase timeout to 10 seconds
