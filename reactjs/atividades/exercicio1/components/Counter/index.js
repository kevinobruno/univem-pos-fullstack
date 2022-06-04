import './style.css';

const Counter = ({ value, onClick }) => {
  return (
    <div>
      <h1 className='Main'>Contador: {value}</h1>
      <button type='button' onClick={onClick}>Incrementar</button>
    </div>
  );
}

export default Counter;
