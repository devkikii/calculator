function add(a, b) {
  return a + b;
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

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else return "Invalid Operator";
}

function setupCalculator() {
  const display = document.querySelector("#display");
  const buttons = document.querySelectorAll("#buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent
    });
  });
}

setupCalculator()

