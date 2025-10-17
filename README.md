# JavaScript Calculator

A simple calculator built with **HTML, CSS, and JavaScript**.  
Demonstrates DOM manipulation, event handling, arithmetic operations, and input validation.

## Features

- Addition (`+`), subtraction (`-`), multiplication (`X`), and division (`÷`)
- Decimal support with single decimal per number
- Clear last digit (`CLR`) and all clear (`AC`) buttons
- Maximum digit display limit to prevent overflow
- Continuous calculation using the previous result

## How It Works

The calculator stores numbers and operator using variables:

- `firstNumber` — stores the first input number
- `secondNumber` — stores the second input number
- `operator` — stores the selected operator
- `result` — stores the last calculated result
- `isSecondNumber` — tracks if the user is inputting the second number


### Math Functions

- `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`
- `operate(operator, a, b)` determines which function to call

### Display Management

- Updates dynamically as the user clicks numbers
- Clears display when starting the second number
- Limits the number of digits to prevent overflow

## Usage

1. Clone the repository:
```bash
git clone https://github.com/devkikii/calculator.git

##File Structure
calculator/
│
├── index.html     # Calculator HTML layout
├── styles.css     # Styling and layout
└── script.js      # Logic for button clicks and calculations

# Example Usage

```text
7 + 3 =        → Display shows 10
12 ÷ 4 =       → Display shows 3
5 X 6 =        → Display shows 30
9 - 2 =        → Display shows 7
AC             → Display cleared, all numbers and operator reset
CLR            → Deletes last digit of the current number
7 . 5 + 2 . 3 = → Display shows 9.8

## Notes
- Only one decimal is allowed per number.
- Display automatically clears when starting input for the second number.
- Maximum display limit ensures numbers do not overflow visually.
- Calculator continues calculations using the previous result if a new operator is pressed after equals.
- CLR removes the last character from the current input number and updates the display.
- AC resets everything: firstNumber, secondNumber, operator, result, and display.


