//DOM Elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");
const clearButton = document.querySelector("#all-clear");

// Variables
let firstNumber = "";
let secondNumber = "";
let operator = null;
let isSecondNumber = false;

// Math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function operate(op, a, b) {
  switch(op) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default: return "Invalid Operator";
  }
}

// Setup calculator
function setupCalculator() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      // Clear button
      if (btn === clearButton) {
        firstNumber = "";
        secondNumber = "";
        operator = null;
        isSecondNumber = false;
        display.textContent = "";
        return;
      }

      // Operator buttons
      if (["+", "-", "X", "÷"].includes(value)) {
        if (value === "X") operator = "*";
        else if (value === "÷") operator = "/";
        else operator = value;

        isSecondNumber = true;
        display.textContent = "";
        return;
      }

      // Equals button
      if (btn.id === "equals") {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);
        const result = operate(operator, num1, num2);
        display.textContent = result;

        // Prepare for next calculation
        firstNumber = String(result);
        secondNumber = "";
        operator = null;
        isSecondNumber = false;
        return;
      }

      // Number or decimal input
      if (!isNaN(value) || value === ".") {
        if (!isSecondNumber) {
          firstNumber += value;
          display.textContent = firstNumber;
        } else {
          secondNumber += value;
          display.textContent = secondNumber;
        }
      }
    });
  });
}

setupCalculator();
