import { describe, it, expect } from "vitest";
import { dollarFormat, kebabCase } from "$lib/utils/index.js";

describe("kebab-case test", () => {
  it("converts a string to kebab-case", () => {
    expect(kebabCase("Hello World")).toBe("hello-world");
  });
});

describe("dollar format test", () => {
  it("converts a number to a dollar-formatted string", () => {
    expect(dollarFormat(1000000)).toBe("$1,000,000");
  });
});
