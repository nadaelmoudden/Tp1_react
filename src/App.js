import React, { useState } from 'react';
import './App.css';

function App() {
  const [oldOperand, setOldOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operator, setOperator] = useState('');

  const Click = (number) => {
    if (operator === '=') {
      setOldOperand('');
      setOperator('');
      setCurrentOperand('');
    } else {
      setCurrentOperand(currentOperand + number);
    }
  };

  const operatorClick = (op) => {
    if (currentOperand !== '') {
      if (oldOperand === '') {
        setOldOperand(currentOperand);
        setCurrentOperand('');
        setOperator(op);
      } else {
        setOldOperand(calculate());
        setCurrentOperand('');
        setOperator(op);
      }
    } else {
      alert('Please enter a second number before using an operator.');
    }
  };

  const calculate = () => {
    const prev = parseFloat(oldOperand);
    const current = parseFloat(currentOperand);
    if (operator === '/' && current === 0) {
      alert('Division by zero is not allowed !!');
      return oldOperand;
    }
    switch (operator) {
      case '+':
        return (prev + current).toString();
      case '-':
        return (prev - current).toString();
      case '*':
        return (prev * current).toString();
      case '/':
        return (prev / current).toString();
      default:
        return currentOperand;
    }
  };

  const equalClick = () => {
    if (operator && currentOperand !== '') {
      setCurrentOperand(calculate());
      setOldOperand(currentOperand);
      setOperator('=');
    } else {
      alert('Please enter a second number before calculating.');
    }
  };

  const clearClick = () => {
    setOldOperand('');
    setCurrentOperand('');
    setOperator('');
  };

  const deleteClick = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="old-op">{oldOperand}</div>
        <div className="curr-op">{currentOperand}</div>
      </div>

      <button onClick={clearClick} className="span-two">
        AC
      </button>

      <button onClick={deleteClick}>DEL</button>

      <button onClick={() => operatorClick('/')}>/</button>

      <button onClick={() => Click('1')}>1</button>
      <button onClick={() => Click('2')}>2</button>
      <button onClick={() => Click('3')}>3</button>

      <button onClick={() => operatorClick('*')}>*</button>

      <button onClick={() => Click('4')}>4</button>
      <button onClick={() => Click('5')}>5</button>
      <button onClick={() => Click('6')}>6</button>

      <button onClick={() => operatorClick('+')}>+</button>

      <button onClick={() => Click('7')}>7</button>
      <button onClick={() => Click('8')}>8</button>
      <button onClick={() => Click('9')}>9</button>

      <button onClick={() => operatorClick('-')}>-</button>

      <button onClick={() => Click('.')}>.</button>
      <button onClick={() => Click('0')}>0</button>
      <button onClick={equalClick} className="span-two">
        =
      </button>
    </div>
  );
}

export default App;
