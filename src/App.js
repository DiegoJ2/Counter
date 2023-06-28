import { React, useState } from 'react'
import "./App.css"
 

export default function App() {
  const [counter, setCounter] = useState(0);
 
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p>major shoutout to the internet for helping</p>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>Add</button>
        <button className="control__btn" onClick={decrease}>Subtract</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};