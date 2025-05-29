class ListNode {
  constructor(value = null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  length = 0;
  constructor() {
    // Dummy Nodes
    this.head = new ListNode();
    this.tail = new ListNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  isEmpty() {
    return this.length === 0;
  }

  append(value) {
    const newNode = new ListNode(value);
    const last = this.tail.prev;

    last.next = newNode;
    newNode.prev = last;
    newNode.next = this.tail;
    this.tail.prev = newNode;

    this.length++;
  }
  prepend(value) {
    const newNode = new ListNode(value);
    const first = this.head.next;

    this.head.next = newNode;
    newNode.prev = this.head;
    newNode.next = first;
    first.prev = newNode;

    this.length++;
  }
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
  find(value) {
    let current = this.head.next;
    while (current !== this.tail) {
      if (current.value == value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  printForward() {
    let current = this.head.next;
    const result = [];
    while (current !== this.tail) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(","));
  }
  printBackward() {
    let current = this.tail.prev;
    const result = [];
    while (current !== this.head) {
      result.push(current.value);
      current = current.prev;
    }
    console.log(result.join(","));
  }
}

export { DoublyLinkedList };
