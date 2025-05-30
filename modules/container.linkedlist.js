import { ContainerABC } from "./container.js";
import { DoublyLinkedList } from "./double_linked_list.js";

/**
 * Container -- Implementation of ContainerABC using an double linked list.
 * @class
 * @extends ContainerABC
 */
class Container extends ContainerABC {
  constructor() {
    super();
    this.list = new DoublyLinkedList();
  }

  get length() {
    return this.list.length;
  }
  /**
   * Generator used for the for/of loop
   * @yields {Any} The next item in the list from left to right
   */
  *[Symbol.iterator]() {
    for (let data of this.list) {
      yield data;
    }
  }

  add(item) {
    this.list.append(item);
  }

  clear() {
    this.list = new DoublyLinkedList();
  }

  get(index) {
    let result = undefined;
    if (index >= 0 && index < this.length) {
      let count = 0;
      for (let node of this) {
        if (count === index) {
          result = node;
          break;
        }
        count++;
      }
    }
    return result;
  }

  contains(item) {
    let result = -1;
    let count = 0;
    for (let value of this) {
      if (value === item) {
        result = count;
        break;
      }
      count++;
    }
    return result;
  }

  remove(index) {
    let result = undefined;
    if (this.isEmpty() === false) {
      if (index === undefined) {
        let node = this.list.tail.prev;
        this.list.remove(node);
        result = node.value;
      } else if (index >= 0 && index <= this.length) {
        let value = this.get(index);
        let node = this.list.find(value);
        this.list.remove(node);
        result = node.value;
      }
    }
    return result;
  }
  toString() {
    return [...this].join(",");
  }
}

export { Container };
