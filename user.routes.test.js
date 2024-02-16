const request = require("supertest");
const App = require("./app");

describe("UserRouter", () => {
  let app;

  beforeAll(() => {
    app = new App();
    app;
  });

  it("should register a new user", async () => {
    const response = await request(app)
      .post("/users/register")
      .send({ username: "testuser", password: "testpassword" });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });

  it("should login with valid credentials", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({ username: "testuser", password: "testpassword" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  it("should not login with invalid credentials", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({ username: "invaliduser", password: "invalidpassword" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });

  afterAll(() => {
    app.close();
  });
});
