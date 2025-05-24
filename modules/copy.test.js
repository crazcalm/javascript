import { describe, test } from "node:test";
import assert from "node:assert";

import { Copy } from "./copy.js";

describe("Test Copy Class", () => {
  let data = "This is the test\nString!";
  let dataArray = data.split("");

  test("Test string to string", () => {
    let result = new Copy(data, "string").toString();

    assert.strictEqual(data, result);
  });

  test("Test String to Array", () => {
    let result = new Copy(data, "string").toArray();

    assert.deepStrictEqual(dataArray, result);
  });

  test("Test Array to String", () => {
    let result = new Copy(dataArray, "array").toString();
    assert.strictEqual(data, result);
  });

  test("Test Array to Array", () => {
    let result = new Copy(dataArray, "array").toArray();
    assert.deepStrictEqual(dataArray, result);
  });
});
