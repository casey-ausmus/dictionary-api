/* global expect, jest */
const request = require("supertest");
const app = require("../../app");

jest.mock("../../src/lib/wordCache");

test("Test one character input", async () => {
  const response = await request(app).get("/dictionary/a");
  expect(response.statusCode).toBe(400);
  expect(response.body.error).toBeDefined();
});

test("Test two character input", async () => {
  const response = await request(app).get("/dictionary/aa");
  expect(response.statusCode).toBe(400);
  expect(response.body.error).toBeDefined();
});

test("Test valid input", async () => {
  const response = await request(app).get("/dictionary/app");
  expect(response.statusCode).toBe(200);
  expect(response.body.matches).toBeDefined();
  expect(response.body.matches).toEqual(["app", "apple", "application"]);
});

test("Test mixed case input", async () => {
  const response = await request(app).get("/dictionary/bOx");
  expect(response.statusCode).toBe(200);
  expect(response.body.matches).toBeDefined();
  expect(response.body.matches).toEqual(["box", "boxer"]);
});
