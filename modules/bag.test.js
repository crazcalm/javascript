import { describe, test } from "node:test";
import assert from "node:assert";

import { Bag } from "./bag.js";

describe("Test Bag Class", () => {
  test("Test add method", () => {
    const expected_length = 4;
    let bag = new Bag();

    bag.add("my");
    bag.add("number");
    bag.add("is");
    bag.add(7);

    assert.strictEqual(bag.length, expected_length);
  });

  test("Test Remove method", () => {
    let bag = new Bag();
    let item = "name";

    assert.strictEqual(bag.remove(item), undefined);

    bag.add(item);
    assert.strictEqual(bag.remove(item), item);

    bag.add(item);
    bag.add(item);
    bag.add(item);
    bag.remove(item);
    assert.strictEqual(bag.length, 2);
  });

  test("Test contains method", () => {
    let bag = new Bag();
    let item = "name";
    assert.strictEqual(bag.contains(item), false);

    bag.add(item);
    assert.strictEqual(bag.contains(item), true);
  });
});
