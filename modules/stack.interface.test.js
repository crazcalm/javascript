import { describe, test } from "node:test";
import assert from "node:assert";

import { StackABC } from "./stack.interface.js";

describe("Test StackABC", () => {
  test("Test no instantiation", () => {
    assert.throws(
      () => {
        let instance = new StackABC();
      },
      {
        name: "TypeError",
        message: "Cannot instantiate abstract base class StackABC directly",
      },
    );
  });
});
