import { DoubleListNode as ListNode } from "./listNode.js";

/** DoublyLinkedList class
 * @class
 */
class DoublyLinkedList {
  /**
   * @property {number} length 0 or greater
   */
  length = 0;
  constructor() {
    // Dummy Nodes
    this.head = new ListNode();
    this.tail = new ListNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  /**
   * isEmpty method checks if the list is empty
   * @method
   * @returns {boolean} true, if empty. false otherwise
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * append method adds a node to the end of the list
   * @method
   * @param {Any} value
   */
  append(value) {
    const newNode = new ListNode(value);
    const last = this.tail.prev;

    last.next = newNode;
    newNode.prev = last;
    newNode.next = this.tail;
    this.tail.prev = newNode;

    this.length++;
  }
  /**
   * prepend method adds a node to the beginning of the list
   * @method
   * @param {Any} value
   */
  prepend(value) {
    const newNode = new ListNode(value);
    const first = this.head.next;

    this.head.next = newNode;
    newNode.prev = this.head;
    newNode.next = first;
    first.prev = newNode;

    this.length++;
  }
  /**
   * remove methods removes the passed in node by updating the next and prev nodes
   * @method
   * @param {DoubleListNode} node
   */
  remove(node) {
    if (node === this.head || node === this.tail) {
      throw new Error("Cannot remove sentinel nodes");
    }

    // Remap the nodes before and after this node
    node.prev.next = node.next;
    node.next.prev = node.prev;

    // remove references associated with this node
    node.prev = null;
    node.next = null;

    this.length--;
  }
  /**
   * find method returns the first node that has a value that matches
   * the passed in value
   * @method
   * @param {Any} value
   */
  find(value) {
    let current = this.head.next;
    while (current !== this.tail) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  /** Default generator -- left to right iterator
       @yields {DoubleListNode} node
       */
  *[Symbol.iterator]() {
    let current = this.head.next;
    while (current !== this.tail) {
      yield current.value;
      current = current.next;
    }
  }
  /**
   * reverseIterator generator -- right to left iterator
   * @yields {DoubleListNode} node
   */
  *reverseIterator() {
    let current = this.tail.prev;
    while (current !== this.head) {
      yield current.value;
      current = current.prev;
    }
  }
}

export { DoublyLinkedList };
