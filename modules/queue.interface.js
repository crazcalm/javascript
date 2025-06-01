/**
 * Interface for a Queue class
 */
class QueueABC {
  constructor() {
    if (new.target === QueueABC) {
      throw new TypeError(
        "Cannot instantiate abstract base class QueueABC directly",
      );
    }
  }
  /**
   * @property {number} length -- positive integer (including 0)
   */
  get length() {
    throw new Error("Not implemented");
  }
  /**
   * enqueue method adds an item to the back of the queue
   * @method
   * @param {Any} item
   */
  enqueue(item) {
    throw new Error("Not implemented");
  }
  /**
   * dequeue method remove and item from the front of the queue
   * @method
   * @returns {Any} item
   */
  dequeue() {
    throw new Error("Not implemented");
  }
  /**
   * peek method returns the item at the front of the queue without removing it
   * @method
   * @returns {Any} item
   */
  peek() {
    throw new Error("Not implemented");
  }
  /**
   * isEmpty method checks to see if the queue is empty
   * @method
   * returns {boolean} true, if empty. False otherwise
   */
  isEmpty() {
    throw new Error("Not implemented");
  }
  /**
   * toString method returns a string representaton of the items in the queue
   * @method
   * @returns {String} string representation of the items in the queue
   */
  toString() {
    throw new Error("Not implemented");
  }
}

export { QueueABC };
