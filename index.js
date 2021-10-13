const Stack = require("./stack");

function decimalToBase(number) {
  const stack = new Stack();

  while (number > 0) {
    stack.push(Math.floor(number % 2));
    number = Math.floor(number / 2);
  }

  let binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += `${stack.pop()}`;
  }

  return binaryString;
}

console.log(decimalToBase(255));
console.log(decimalToBase(132));
console.log(decimalToBase(123456789));
