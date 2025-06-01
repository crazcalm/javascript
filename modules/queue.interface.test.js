import { describe, test } from "node:test";
import assert from "node:assert";

import { QueueABC } from "./queue.interface.js";

describe("Test QueueABC", () => {
  test("Test no instantiation", () => {
    assert.throws(
      () => {
        let instance = new QueueABC();
      },
      {
        name: "TypeError",
        message: "Cannot instantiate abstract base class QueueABC directly",
      },
    );
  });
});
