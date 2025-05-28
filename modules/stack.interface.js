/**
 * Interface for a Stack class
 * @interface
 */
class StackABC {
  /**
   * @namespace
   * @property {number} length  - positive integer (inlcuding 0)
   */
  length = 0;
  constructor() {
    if (new.target === StackABC) {
      throw new TypeError(
        "Cannot instantiate abstract base class StackABC directly",
      );
    }
  }
  /**
   * isEmpty method checks to see if the Stack is empty.
   * @method
   * @returns {boolean} true, if empty. False otherwise
   */
  isEmpty() {
    throw new Error("Not implemented");
  }
  /**
   * peek method allows you to take look at the last item pushed to the stack
   * @method
   * @returns {Any} item at top of the stack
   */
  peek() {
    throw new Error("Not implemented");
  }
  /**
   * pop method removed the last item pushed into the stack.
   * @method
   * @returns {Any} Item gets removed from the top of the stack
   */
  pop() {
    throw new Error("Not implemented");
  }
  /**
   * push method adds a new item to the stack
   * @method
   * @param {Any} item
   */
  push(item) {
    throw new Error("Not implemented");
  }
  /**
   * toString method returns a string representaton of the items in the stack
   * @method
   * @returns {String} string representation of the items in the stack
   */
  toString() {
    throw new Error("Not implemented");
  }
}

export { StackABC };
