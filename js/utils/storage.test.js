import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage.js";

beforeEach(() => {
  // Clear localStorage before each test
  localStorage.clear();
});

//Test 1: Test that it returns username from user object in storage
describe("getUsername", () => {
  it("Returns username from user object in storage", () => {
    const user = { name: "JohnDoe" };
    saveUser(user);

    expect(getUsername()).toBe("JohnDoe");
  });

  // Test 2: Test that getUsername returns null when there is no user object in storage
  it("Returns null when there is no user in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
