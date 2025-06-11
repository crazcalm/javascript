import { QueueABC } from "./queue.interface.js";

/**
 * ArrayQueue is a array based implementation of a queue
 * @class
 * @extends QueueABC
 */
class ArrayQueue extends QueueABC {
  constructor() {
    super();
    this.array = new Array();
  }

  get length() {
    return this.array.length;
  }

  enqueue(item) {
    this.array.push(item);
  }

  dequeue(item) {
    if (this.length > 0) {
      return this.array.shift();
    }
  }
  peek() {
    if (this.length > 0) {
      return this.array.at(0);
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    return this.array.toString();
  }
}

export { ArrayQueue };
