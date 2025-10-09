// DOM Elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

// Variables for storing numbers and operator
let firstNumber = "";
let secondNumber = "";
let operator = null;
let result = null;
let isSecondNumber = false;

// Basic operations
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
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "X") return multiply(a, b);
  if (operator === "÷") return divide(a, b);
  return "Invalid Operator";
}

function setupCalculator() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Number button clicked
      if (!isNaN(btn.textContent) || btn.textContent === ".") {
        if (!isSecondNumber) {
          firstNumber += btn.textContent;
          display.textContent = firstNumber;
        } else {
          secondNumber += btn.textContent;
          display.textContent = secondNumber;
        }
      }

      // Operator clicked
      else if (["+", "-", "X", "÷"].includes(btn.textContent)) {
        operator = btn.textContent;
        isSecondNumber = true;
        display.textContent = "";
      }

      // Equals clicked
      else if (btn.id === "equals") {
        if (firstNumber !== "" && secondNumber !== "" && operator) {
          const num1 = Number(firstNumber);
          const num2 = Number(secondNumber);
          result = operate(operator, num1, num2);
          display.textContent = result;

          // Reset for next calculation
          firstNumber = result.toString();
          secondNumber = "";
          operator = null;
          isSecondNumber = false;
        }
      }

      // Clear clicked
      else if (btn.id === "all-clear") {
        firstNumber = "";
        secondNumber = "";
        operator = null;
        result = null;
        isSecondNumber = false;
        display.textContent = "";
      }
    });
  });
}

setupCalculator();
