class Stack {
  length = 0;

  constructor() {
    this.stack = [];
  }

  empty() {
    return this.length == 0;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  pop() {
    if (this.length > 0) {
      this.length--;
      return this.stack.pop();
    }
  }
  push(item) {
    this.length++;
    this.stack.push(item);
  }

  toString() {
    return this.stack.toString();
  }
}

export { Stack };
