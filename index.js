const Stack = require("./stack");

function decimalToBinary(number) {
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

console.log(decimalToBinary(255));
console.log(decimalToBinary(132));
console.log(decimalToBinary(123456789));
