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
    btn.addEventListener("keydown", () => {
      // Number button clicked
      if (!isNaN(btn.textContent)) {
        if (display.textContent.length >= 10) return;
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

      // All clear
      else if (btn.id === "all-clear") {
        firstNumber = "";
        secondNumber = "";
        operator = null;
        result = null;
        isSecondNumber = false;
        display.textContent = "";
      }

      // Clear last digit
      else if (btn.id === "clear") {
        display.textContent = display.textContent.slice(0, -1);
        if (!isSecondNumber) {
          firstNumber = firstNumber.slice(0, -1);
        } else {
          secondNumber = secondNumber.slice(0, -1);
        }
      }

      // Decimal point (fixed version)
      else if (btn.id === "decimal") {
        if (!isSecondNumber) {
          if (!firstNumber.includes(".")) {
            firstNumber += ".";
            display.textContent += ".";
          }
        } else {
          if (!secondNumber.includes(".")) {
            secondNumber += ".";
            display.textContent += ".";
          }
        }
      }
    });
  });
}

setupCalculator();
