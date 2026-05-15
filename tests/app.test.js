const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 and render the index page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Express');
  });
});

describe('GET /users', () => {
  it('should return 200 and respond with a resource', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('respond with a resource');
  });
});

describe('GET /unknown', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
