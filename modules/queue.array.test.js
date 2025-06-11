import { describe, test } from "node:test";
import assert from "node:assert";

import { ArrayQueue as Queue } from "./queue.array.js";

describe("Test Queue class", () => {
  test("Test isEmpty method", () => {
    let queue = new Queue();
    assert.strictEqual(queue.isEmpty(), true);

    queue.enqueue(1);

    assert.strictEqual(queue.isEmpty(), false);
  });

  test("Test enqueue method", () => {
    let queue = new Queue();
    let data = [1, 2, 3];
    for (let item of data) {
      queue.enqueue(item);
    }

    assert.strictEqual(3, queue.length);
    assert.strictEqual(data.toString(), queue.toString());
  });

  test("Test dequeue method", () => {
    let queue = new Queue();
    let data = [1, 2, 3];
    for (let item of data) {
      queue.enqueue(item);
    }

    assert.strictEqual(1, queue.dequeue());
    assert.strictEqual(2, queue.length);
  });

  test("Test peek method", () => {
    let queue = new Queue();
    let data = [1, 2, 3];
    for (let item of data) {
      queue.enqueue(item);
    }

    assert.strictEqual(1, queue.peek());
    assert.strictEqual(3, queue.length);
  });

  test("Test toString method", () => {
    let queue = new Queue();
    let data = [1, 2, 3];
    for (let item of data) {
      queue.enqueue(item);
    }

    assert.strictEqual(3, queue.length);
    assert.strictEqual(data.toString(), queue.toString());
  });
});
