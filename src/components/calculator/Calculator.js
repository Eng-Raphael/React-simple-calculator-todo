import React, { useState } from 'react';
import './Calculator.css';


function Calculator() {
  const [displayValue, setDisplayValue] = useState('0'); 
  const [firstValue, setFirstValue] = useState(null); 
  const [operator, setOperator] = useState(null); 

  
  function handleDigitClick(digit) {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  }

  
  function handleOperatorClick(operator) {
    if (firstValue === null) {
      setFirstValue(parseFloat(displayValue));
      setOperator(operator);
      setDisplayValue('0');
    } else {
      const secondValue = parseFloat(displayValue);
      let result;

      switch (operator) {
        case '+':
          result = firstValue + secondValue;
          break;
        case '-':
          result = firstValue - secondValue;
          break;
        case '*':
          result = firstValue * secondValue;
          break;
        case '/':
          result = firstValue / secondValue;
          break;
        default:
          break;
      }

      setFirstValue(result);
      setOperator(operator);
      setDisplayValue(result.toString());
    }
  }

  
  function handleEqualClick() {
    const secondValue = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        break;
    }

    setFirstValue(null);
    setOperator(null);
    setDisplayValue(result.toString());
  }

  
  function handleClearClick() {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
  }

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default Calculator;