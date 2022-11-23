import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {

//a function that will dispatch an action against Redux store
 const dispatch = useDispatch();

//useSelector looks for the action inside the index.js
//when use useSelector, redux will automatically subscribe to the store
  const counter = useSelector((state) =>state.counter);
  const show = useSelector((state)=>state.showCounter);

  const incrementHandler = () =>{
  //add a dispatch function and execute it  
    dispatch(counterActions.increment());
  };

  const increaseHandler = () =>{
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }; 

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
