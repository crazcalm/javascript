import { describe, test } from "node:test";
import assert from "node:assert";

import { range } from "./range.js";

describe("Test range function", () => {
  test("Test positive range", () => {
    const expected = [1, 2, 3, 4, 5];

    assert.deepStrictEqual(range(1, 6), expected);
  });

  test("Test negative range", () => {
    const expected = [0, -1, -2, -3, -4, -5];

    assert.deepStrictEqual(range(0, -6, -1), expected);
  });
});
