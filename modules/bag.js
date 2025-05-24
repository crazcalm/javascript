class Bag {
  length = 0;

  constructor() {
    this._array = new Array();
  }

  add(item) {
    this._array.push(item);
    this.length++;
    return this;
  }
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
