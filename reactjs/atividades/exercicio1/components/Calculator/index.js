import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  return (
    <div>
      <div>{result}</div>
      <input
        value={currentValue}
        onChange={(e) => {setCurrentValue(parseInt(e.target.value))}}
        type='number'
      />
      <button type='button' onClick={() => setResult(result + currentValue)}>Somar</button>
      <button type='button' onClick={() => setResult(result - currentValue)}>Subtrair</button>
      <button type='button' onClick={() => setResult(result * currentValue)}>Multiplicar</button>
      <button type='button' onClick={() => setResult(result / currentValue)}>Dividir</button>
    </div>
  );
}

export default Calculator;
