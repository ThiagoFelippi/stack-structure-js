const Stack = require("./stack");

(() => {
  test("Should verify pop function working correctly", () => {
    const stack = new Stack();
    const itemInserted = 10;
    stack.push(itemInserted);
    const itemRemoved = stack.pop();

    if (itemRemoved !== itemInserted) {
      logInfo({ itemRemoved, itemInserted });
      throw new Error("itemRemoved !== itemInserted");
    }
  });

  test("Should verify push function working correctly", () => {
    const stack = new Stack();
    const itemInserted = 10;
    stack.push(itemInserted);

    const lastItemFromStack = stack.peek();
    if (lastItemFromStack !== itemInserted) {
      logInfo({ lastItemFromStack, itemInserted });
      throw new Error("lastItemFromStack !== itemInserted");
    }
  });

  test("Should verify peek function working correctly", () => {
    const stack = new Stack();
    const itemInserted = 10;
    stack.push(itemInserted);

    const lastItemFromStack = stack.peek();
    if (lastItemFromStack !== itemInserted) {
      logInfo({ lastItemFromStack, itemInserted });
      throw new Error("lastItemFromStack !== itemInserted");
    }
  });

  test("Should verify isEmpty function working correctly", () => {
    const stack = new Stack();
    const itemInserted = 10;
    stack.push(itemInserted);

    const isEmpty = stack.isEmpty();
    if (isEmpty) {
      logInfo({ isEmpty });
      throw new Error("isEmpty returns false info");
    }

    stack.pop();
    const isEmpty2 = stack.isEmpty();
    if (!isEmpty2) {
      logInfo({ isEmpty: isEmpty2 });
      throw new Error("isEmpty returns false info");
    }
  });

  test("Should verify size function working correctly", () => {
    const stack = new Stack();
    const itemInserted = 10;
    stack.push(itemInserted);

    const size = stack.size();
    if (size !== 1) {
      logInfo({ size });
      throw new Error("size !== 1");
    }
  });
})();

function test(testName, fn) {
  fn();
  console.log(`OK > ${testName}`);
}

function logInfo(objects) {
  const keys = Object.keys(objects);
  const values = Object.values(objects);

  keys.forEach((key) => {
    values.forEach((value) => {
      if (key && value) console.log(JSON.stringify({ [key]: value }));
    });
  });
}
