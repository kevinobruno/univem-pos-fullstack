import { useEffect, useState } from 'react';
import Hello from './components/Hello';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import Calculator from './components/Calculator';
import CalculatorComp from './components/CalculatorComp';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [changed, setChanged] = useState(0);

  useEffect(() => {
    setChanged(changed + 1);
  }, [value])

  function count() {
    setValue(value + 1);
  };

  return (
    <div className='Container'>
      <Hello />
      <Counter value={value} click={count}/>
      <CounterClass />
      <Calculator />
      <CalculatorComp />
    </div>
  );
}

export default App;
