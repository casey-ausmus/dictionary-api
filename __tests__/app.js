/* global expect */
const request = require("supertest");
const app = require("../app");

test("Test status endpoint", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
});
