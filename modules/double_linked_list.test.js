import { describe, test } from "node:test";
import assert from "node:assert";

import { DoublyLinkedList } from "./double_linked_list.js";

describe("Tests for DoublyLinkedList", () => {
  test("Test isEmpty method", () => {
    const list = new DoublyLinkedList();

    assert.strictEqual(list.isEmpty(), true);

    list.append(1);

    assert.strictEqual(list.isEmpty(), false);
  });

  test("Test append method and forward iterator", () => {
    const data = [1, 2, 3, 4, 5];
    const list = new DoublyLinkedList();

    for (let item of data) {
      list.append(item);
    }

    assert.deepStrictEqual(data, [...list]);
    assert.strictEqual(data.length, list.length);
  });

  test("Test prepend method and reverseIterator", () => {
    const data = [1, 2, 3, 4, 5];
    const list = new DoublyLinkedList();

    for (let item of data) {
      list.prepend(item);
    }

    assert.deepStrictEqual(data, [...list.reverseIterator()]);
    assert.strictEqual(data.length, list.length);
  });

  test("Test find and remove methods", () => {
    const list = new DoublyLinkedList();
    list.append("a");
    list.append("b");
    list.append("c");

    let node = list.find("b");
    list.remove(node);

    assert.deepStrictEqual([...list], ["a", "c"]);
  });
});
