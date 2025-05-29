import { describe, test } from "node:test";
import assert from "node:assert";

import { Container } from "./container.array.js";

describe("Test ContainerABC", () => {
  test("Test add method", () => {
    const expectedLength = 3;
    let container = new Container();
    container.add("one");
    container.add(2);
    container.add("three");

    assert.strictEqual(container.length, expectedLength);
  });

  test("Test clear method", () => {
    const expectedLength = 0;
    let container = new Container();
    container.add("one");

    container.clear();
    assert.strictEqual(container.length, expectedLength);
  });

  test("Test get method", () => {
    const expected = [1, 2, 3];
    let container = new Container();
    container.add(1);
    container.add(2);
    container.add(3);

    assert.strictEqual(expected[0], container.get(0));
    assert.strictEqual(expected[1], container.get(1));
    assert.strictEqual(expected[2], container.get(2));

    // edge cases
    assert.strictEqual(container.get(-1), undefined);
    assert.strictEqual(container.get(), undefined);
  });

  test("Test contains method", () => {
    let container = new Container();
    container.add(1);
    container.add(2);
    container.add(3);
    container.add(1);

    // The index values are returned.
    assert.strictEqual(container.contains(1), 0);
    assert.strictEqual(container.contains(2), 1);
    assert.strictEqual(container.contains(3), 2);
    assert.strictEqual(container.contains(4), -1);
    assert.strictEqual(container.contains(), -1);
  });

  test("test isEmpty method", () => {
    let container = new Container();
    assert.strictEqual(container.isEmpty(), true);

    container.add(1);
    assert.strictEqual(container.isEmpty(), false);
  });

  test("Test remove method", () => {
    let container = new Container();
    container.add(1);
    container.add(2);
    container.add(3);
    container.add(4);

    assert.strictEqual(container.remove(), 4);
    assert.strictEqual(container.remove(0), 1);
    assert.strictEqual(container.length, 2);
  });
  test("Test ToString metod", () => {
    const expected_string = "1,2,3,4";

    let container = new Container();
    let data = [1, 2, 3, 4];
    data.forEach((item) => {
      container.add(item);
    });

    assert.strictEqual(expected_string, container.toString());
  });
});
