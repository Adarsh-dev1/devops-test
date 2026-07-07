const request = require("supertest");
const app = require("./app");

test("GET /health should return 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
});