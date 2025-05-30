import { StackABC } from "./stack.interface.js";
import { Container } from "./container.linkedlist.js";

/**
 * Stack -- Implementation of the StackABC using a Container
 *@class
 *@extends StackABC
 */
class Stack {
  constructor() {
    this.container = new Container();
  }
  get length() {
    return this.container.length;
  }

  empty() {
    return this.container.length == 0;
  }
  peek() {
    let result = undefined;
    if (!this.empty()) {
      // Removing the item to save a reference to it
      result = this.container.remove();
      // Putting the item back in the container
      this.container.add(result);
    }
    return result;
  }
  pop() {
    if (this.container.length > 0) {
      return this.container.remove();
    }
  }
  push(item) {
    this.container.add(item);
  }

  toString() {
    return this.container.toString();
  }
}

export { Stack };
