const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('should return HTML content type', async () => {
    const res = await request(app).get('/');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });

  it('should render the index page with Express title', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('<title>Express</title>');
  });

  it('should render the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Welcome to Express');
  });
});

describe('GET /users', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
  });

  it('should return plain text content type', async () => {
    const res = await request(app).get('/users');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });

  it('should respond with a resource', async () => {
    const res = await request(app).get('/users');
    expect(res.text).toBe('respond with a resource');
  });
});

describe('Error handling', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });

  it('should return HTML error page for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.headers['content-type']).toMatch(/text\/html/);
  });

  it('should return 404 for unknown nested routes', async () => {
    const res = await request(app).get('/users/unknown');
    expect(res.statusCode).toBe(404);
  });
});
