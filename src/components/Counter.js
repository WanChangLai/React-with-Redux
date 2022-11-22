import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
//useSelector looks for the action inside the index.js
//when use useSelector, redux will automatically subscribe to the store
  const counter = useSelector(state =>state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
