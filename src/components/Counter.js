import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

//a function that will dispatch an action against Redux store
const dispatch = useDispatch();

//useSelector looks for the action inside the index.js
//when use useSelector, redux will automatically subscribe to the store
  const counter = useSelector(state =>state.counter);

  const incrementHandler = () =>{
  //add a dispatch function and execute it  
    dispatch({type:'increment'});
  };

  const increaseHandler = () =>{
    dispatch({type:'increase', amount:5});
  };

  const decrementHandler = () =>{
    dispatch({type:'decrement'});
  }; 

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
