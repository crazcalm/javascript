import { describe, test } from "node:test";
import assert from "node:assert";

import { ContainerABC } from "./container.js";

describe("Test ContainerABC", () => {
  test("Test no instantiation", () => {
    assert.throws(
      () => {
        let instance = new ContainerABC();
      },
      {
        name: "TypeError",
        message: "Cannot instantiate abstract base class ContainerABC directly",
      },
    );
  });
});
