import { useEffect, useState } from 'react';
import CalculatorComp from './components/CalculatorComp';
import './App.css';

const App = () => {
  const [value, setValue] = useState(0);
  const [changed, setChanged] = useState(0);

  useEffect(() => {
    setChanged(changed + 1);
  }, [value])

  return (
    <div className='Container'>
      <CalculatorComp />
    </div>
  );
};

export default App;
