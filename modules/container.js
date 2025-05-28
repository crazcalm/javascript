/**
 * Interface for a Container class
 * @interface
 */
class ContainerABC {
  /**
   * @namespace
   * @property {number} length  - positive integer (inlcuding 0)
   */
  length = 0;
  constructor() {
    if (new.target === ContainerABC) {
      throw new TypeError(
        "Cannot instantiate abstract base class ContainerABC directly"
      );
    }
  }
  /**
   * Add method allows you to add an item to the container
   * @method
   * @param {Any} item
   * @returns {None}
   */
  add(item) {
    throw new Error("Not implemented");
  }
  /**
   * Get method allows you to get an item from the container by index.
   * @method
   * @param {number} index index of item in container
   * @returns {Any} returns the item at that index
   */
  get(index) {
    throw new Error("not implemented");
  }
  /**
   * Remove methed allows you to remove an item from the container via its index.
   * If not index was passed, then we remove the last item in the container. If an
   * item was successfully removed, return that item. If the removal was unsuccessful,
   * return undefined.
   * @method
   * @param {Any | None} item
   * @returns {Any | undefined} if successful, returns the removed item
   */
  remove(index) {
    throw new Error("Not implemented");
  }
  /**
   * Contains method checks to see if the item passed in is within the container.
   * If found, return the index of the item.
   * @method
   * @param {Any} item
   * @returns {number} Returns index of item in the container, -1 otherwise.
   */
  contains(item) {
    throw new Error("Not implemented");
  }
  /**
   * Clear method removed all items from the container.
   * @method
   */
  clear() {
    throw new Error("Not implemented");
  }
  /**
   * isEmpty method returns true if the container is empty and false otherwise.
   * @method
   * @returns {boolean} True, if empty. False otherwise
   */
  isEmpty() {
    return this.length === 0;
  }
}

export { ContainerABC };
