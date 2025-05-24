class Copy {
  constructor(data, type) {
    this.data = data;
    this.type = type;
    return this;
  }
  toString() {
    let result = undefined;
    switch (this.type) {
      case "string":
        result = this.data;
        break;
      case "array": {
        result = this.data.join("");
        break;
      }
    }
    return result;
  }
  toArray() {
    let result = undefined;
    switch (this.type) {
      case "string":
        result = this.data.split("");
        break;
      case "array":
        result = this.data;
    }
    return result;
  }
}

export { Copy };
