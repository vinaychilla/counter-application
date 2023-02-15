import { useState } from 'react';
import './App.css';

function App() {  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => (count + 1));
  }

  const decrement = () => {
    setCount((count) => (count - 1));
  }

  const getColor = () => {
    if (count <= 4) {
      return 'green';
    } else if (count <= 9) {
      return 'blue';
    } else {
      return 'red';
    }
  }

  return (
    <div className="App">
      <button className='decrement' onClick={decrement}>Decrement</button>
      <h1 className='counter' style={{color: getColor()}}>{count}</h1>
      <button className="increment" onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
