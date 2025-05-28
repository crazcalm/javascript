import { describe, test } from "node:test";
import assert from "node:assert";

import { Stack } from "./stack.js";

describe("Test Stack Class", () => {
  test("Test Empty method", () => {
    let stack = new Stack();
    assert.strictEqual(stack.empty(), true);

    stack.push(1);

    assert.strictEqual(stack.empty(), false);
  });

  test("Test Push method", () => {
    let stack = new Stack();
    let data = [1, 2, 3, 4];
    data.forEach((item) => {
      stack.push(item);
    });

    assert.strictEqual(stack.length, data.length);
  });

  test("Test Pop method", () => {
    let stack = new Stack();
    let data = [1, 2, 3, 4];
    data.forEach((item) => {
      stack.push(item);
    });

    while (stack.length !== 0) {
      assert.strictEqual(data.pop(), stack.pop());
      assert.strictEqual(data.length, stack.length);
    }
  });
  test("Test ToString metod", () => {
    const expected_string = "1,2,3,4";

    let stack = new Stack();
    let data = [1, 2, 3, 4];
    data.forEach((item) => {
      stack.push(item);
    });

    assert.strictEqual(expected_string, stack.toString());
  });
});
