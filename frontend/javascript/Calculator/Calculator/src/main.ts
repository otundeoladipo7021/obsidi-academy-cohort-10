let currentNumber: string = "";
let currentOperator: string = "";
let currentResult: number = 0;
let currentExpression: string = "";

const appendNumber = (number: string): void => {
  currentNumber += number;
  // We use '!' to tell TypeScript we know this element exists
  document.getElementById("result")!.innerText = currentNumber;
};

const clearAll = (): void => {
  currentNumber = "";
  currentOperator = "";
  currentResult = 0;
  currentExpression = "";
  document.getElementById("result")!.innerText = "0";
  document.getElementById("history")!.innerText = "";
};

const operator = (op: string): void => {
  if (currentNumber === "") {
    return;
  }
  if (currentOperator !== "") {
    calculate();
  }

  currentExpression += `${currentNumber} ${op} `;
  document.getElementById("history")!.innerText = currentExpression;

  currentOperator = op;
  currentResult = parseFloat(currentNumber);
  currentNumber = "";
};

const calculate = (): void => {
  if (currentOperator === "") {
    return;
  }
  const number = parseFloat(currentNumber);
  currentExpression += currentNumber;
  document.getElementById("history")!.innerText = currentExpression;

  switch (currentOperator) {
    case "+":
      currentResult += number;
      break;
    case "-":
      currentResult -= number;
      break;
    case "*":
      currentResult *= number;
      break;
    case "/":
      currentResult /= number;
      break;
  }

  currentNumber = "";
  currentOperator = "";
  document.getElementById("result")!.innerText = currentResult.toString();
};

(window as any).appendNumber = appendNumber;
(window as any).clearAll = clearAll;
(window as any).operator = operator;
(window as any).calculate = calculate;
