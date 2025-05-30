/** SingleListNode class -- used for single linked lists
 *@class
 */
class SingleListNode {
  /**
   * @constructs
   * @param {Any} value
   */
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

/** DoubleListNode class  -- used for double linked lists
 * @class
 * @extends SingleListNode
 */
class DoubleListNode extends SingleListNode {
  /**
   * @constructs
   * @param {Any} value
   */
  constructor(value = null) {
    super(value);
    this.prev = null;
  }
}

export { SingleListNode, DoubleListNode };
