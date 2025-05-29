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
});
