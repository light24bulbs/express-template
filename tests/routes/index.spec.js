const request = require('supertest');
const app = require('../../server');

describe('Test the root path', () => {
  test('It should response the GET method', () => request(app)
    .get('/')
    .expect(200)
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));
});
