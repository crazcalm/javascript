class Bag {
  length = 0;

  /**
   * Represents a Bag
   * @constructor
   */
  constructor() {
    this._array = new Array();
  }

  /**
   * Adds and item to the Bag
   * @method
   * @param {Any} item An item to be placed in the bag
   * @returns {Bag} Returns a reference to this Bag instance
   */
  add(item) {
    this._array.push(item);
    this.length++;
    return this;
  }
  /**
   * Removes an item from the Bag
   * @param {Any} item
   * @returns {Bag} Returns a reference to this Bag instance
   */
  remove(item) {
    let result = undefined;
    let index = this._array.indexOf(item);
    if (index !== -1) {
      this.length--;
      result = this._array[index];
      this._array = this._array.splice(index, 1);
    }
    return result;
  }
  contains(item) {
    return this._array.includes(item);
  }
}

export { Bag };
