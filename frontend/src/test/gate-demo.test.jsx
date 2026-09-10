import { describe, expect, it } from "vitest";

describe("deliberate failure (temporary gate proof)", () => {
  it("fails on purpose", () => {
    expect(1 + 1).toBe(3);
  });
});