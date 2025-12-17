// Added this line to test merging my daily branch to the main branch
// Adding one more line to test the merge

const request = require("supertest");
const { app, pool } = require("../src/app");

const PWD_TEST = process.env.TEST_PWD;
const NEW_PWD = process.env.NEW_PWD;
const TEST_EMAIL = process.env.TEST_EMAIL;
const TEST_USER = process.env.TEST_USER;

// ---- MOCKS ----
jest.mock("pg", () => {
  const mClient = {
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Pool: jest.fn(() => mClient) };
});

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue("Email sent"),
  })),
}));

const { Pool } = require("pg");
const mockedPool = new Pool();

// ---- CLEANUP ----
afterAll(async () => {
  await pool.end();
});

// ---- TEST CASES ----
describe("User API Endpoints", () => {
  // 1. Register
  it("should fail if fields are missing", async () => {
    const res = await request(app).post("/register-create").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "Missing fields");
  });

  it("should return error if user exists", async () => {
    mockedPool.query.mockResolvedValueOnce({ rows: [{}] });
    const res = await request(app).post("/register-create").send({
      username: TEST_USER,
      email: TEST_EMAIL,
      password: PWD_TEST,
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error", "User exists");
  });

  it("should register a new user", async () => {
    mockedPool.query
      .mockResolvedValueOnce({ rows: [] }) // check exists
      .mockResolvedValueOnce({}); // insert
    const res = await request(app).post("/register-create").send({
      username: TEST_USER,
      email: TEST_EMAIL,
      password: PWD_TEST,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "User registered");
  });

  // 2. Verify User
  it("should verify user", async () => {
    mockedPool.query.mockResolvedValueOnce({});
    const res = await request(app)
      .post("/verify-user")
      .send({ email: TEST_EMAIL });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "User verified");
  });

  // 3. Verify Password
  it("should return 404 if user not found (verify-password)", async () => {
    mockedPool.query.mockResolvedValueOnce({ rows: [] });
    const res = await request(app)
      .post("/verify-password/1")
      .send({ password: PWD_TEST });
    expect(res.statusCode).toBe(404);
  });

  // 4. Forgot Password
  it("should send OTP for forgot password", async () => {
    mockedPool.query.mockResolvedValueOnce({});
    const res = await request(app)
      .post("/forgot-password")
      .send({ email: TEST_EMAIL });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "OTP sent");
  });

  // 5. Verify Forgot OTP
  it("should validate OTP", async () => {
    mockedPool.query.mockResolvedValueOnce({ rows: [{ otp: "123456" }] });
    const res = await request(app)
      .post("/forgot-password/verify-otp/1")
      .send({ otp: PWD_TEST });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ valid: true });
  });

  // 6. Reset Password
  it("should reset password", async () => {
    mockedPool.query.mockResolvedValueOnce({});
    const res = await request(app)
      .post("/reset-password/1")
      .send({ new_password: NEW_PWD });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Password updated");
  });

  // 7. Resend OTP
  it("should resend OTP", async () => {
    mockedPool.query
      .mockResolvedValueOnce({ rows: [{ email: TEST_EMAIL }] }) // find user
      .mockResolvedValueOnce({}); // update OTP
    const res = await request(app).post("/resend-otp/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "OTP resent");
  });

  // 8. Get Profile
  it("should return user profile", async () => {
    mockedPool.query.mockResolvedValueOnce({
      rows: [{ id: 1, username: TEST_USER, email: TEST_EMAIL, activated: true }],
    });
    const res = await request(app).get("/get-profile/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("username", TEST_USER);
  });

  it("should return 404 if user not found (profile)", async () => {
    mockedPool.query.mockResolvedValueOnce({ rows: [] });
    const res = await request(app).get("/get-profile/999");
    expect(res.statusCode).toBe(404);
  });
});
