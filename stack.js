module.exports = class Stack {
  #items;
  #count;

  constructor() {
    this.#items = [];
    this.#count = 0;
  }

  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
    return this.#items;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const lastItem = this.#items[this.#count - 1];
    delete this.#items[this.#count - 1];
    this.#count--;
    return lastItem;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#count - 1];
  }

  isEmpty() {
    return this.#count === 0;
  }

  size() {
    return this.#count;
  }
};
