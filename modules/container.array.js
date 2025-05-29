import { ContainerABC } from "./container.js";

/**
 * Container -- Implementation of ContainerABC using an array.
 * @class
 * @extends ContainerABC
 */
class Container extends ContainerABC {
  constructor() {
    super();
    this.array = new Array();
  }

  add(item) {
    this.array.push(item);
    this.length++;
  }

  clear() {
    this.array = new Array();
    this.length = 0;
  }

  get(index) {
    let result = undefined;
    if (index >= 0 && index < this.length) {
      result = this.array[index];
    }
    return result;
  }

  contains(item) {
    return this.array.indexOf(item);
  }

  remove(index) {
    let result = undefined;
    if (this.isEmpty() === false) {
      if (index === undefined) {
        result = this.array.pop();
        this.length--;
      } else if (index >= 0 && index <= this.length) {
        result = this.array[index];
        this.array = this.array.splice(index, 1);
        this.length--;
      }
    }
    return result;
  }
  toString() {
    return this.array.toString();
  }
}

export { Container };
