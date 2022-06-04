import React, { useState } from 'react';
import Display from '../Display';
import Button from '../Button';
import InputValue from '../InputValue';

const CalculatorComp = () => {
  const [result, setResult] = useState(0)
  const [currentValue, setCurrentValue] = useState(0)

  const sum = () => setResult(result + parseInt(currentValue));

  return (
    <>
      <Display value={result} />
      <InputValue value={currentValue} onChange={setCurrentValue} />
      <Button text='Somar' onClick={sum} />
    </>
  );
}

export default CalculatorComp;
