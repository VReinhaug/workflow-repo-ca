import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface";

// Test 1: Check the active path to make sure it returns true when mached
describe("isActivePath", () => {
  it("Returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  // Test 2: Check that the active path returns true for root path when it is / or /index.html
  it("Returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  // Test 3: Check the active path returns true when the current path includes the href
  it("Returns true when current path includes the href", () => {
    expect(
      isActivePath("/venue", "/venue/?id=d3bfcac8-98e8-4209-982f-9c5fb6abd2ec"),
    ).toBe(true);
  });

  // Test 4: Check the active path returns false when paths don't match
  it("returns false when paths don't match", () => {
    expect(isActivePath("/login.html", "/register.html")).toBe(false);
    expect(isActivePath("/", "/login.html")).toBe(false);
  });
});
