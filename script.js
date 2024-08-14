let FirstElement;
let SecondElement;
let Operator;

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// a = prompt("Enter the first number:");
// b = prompt("Enter the second number:");
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

function operate(operator, FirstElement, SecondElement) {
  return add(FirstElement, SecondElement);
}
