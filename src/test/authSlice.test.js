// Import necessary dependencies
const axios = require("axios");
const { login, register, logout } = require("../slices/authSlice");

jest.mock("axios");

describe("Authentication Slice", () => {
  test("login action dispatches correctly", async () => {
    const userData = {
      email: "test@example.com",
      password: "password",
    };

    axios.post.mockResolvedValueOnce({
      data: { id: "123", email: "test@example.com" },
    });

    const dispatch = jest.fn();
    await login(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: login.pending.type });
    expect(dispatch).toHaveBeenCalledWith({
      type: login.fulfilled.type,
      payload: { id: "123", email: "test@example.com" },
    });
  });

  test("register action dispatches correctly", async () => {
    const userData = {
      username: "testuser",
      email: "test@example.com",
      password: "password",
    };

    axios.post.mockResolvedValueOnce({
      data: { id: "123", username: "testuser", email: "test@example.com" },
    });
    n;
    const dispatch = jest.fn();
    await register(userData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: register.pending.type });
    expect(dispatch).toHaveBeenCalledWith({
      type: register.fulfilled.type,
      payload: { id: "123", username: "testuser", email: "test@example.com" },
    });
  });

  test("logout action dispatches correctly", async () => {
    axios.post.mockResolvedValueOnce({});

    const dispatch = jest.fn();
    await logout()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: logout.pending.type });
    expect(dispatch).toHaveBeenCalledWith({ type: logout.fulfilled.type });
  });
});
