import React, { useState } from 'react';
import './App.css';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(1);

  const increment = () => {
    sayHello();
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello from React!");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <p>{count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React!")}>Say welcome</button>

      <br /><br />

      <button onClick={handleClick}>Click on me</button>

      <br /><br />

      <CurrencyConverter />
    </div>
  );
}

export default App;
