import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter:0, showCounter: true }

//take object as an input 
createSlice({
  name: 'counter',
  initialState,
  reducers:{
    //method here
    increment(state){
        //mutate the state is allowed here
        state.counter++;
    },
    derrement(state){
        state.counter--;
    },
    increase(state,action){
        state.counter = state.action + action.amount;
    },
    toggle(state){
        state.showCounter = !state.showCounter
    }
  }
});

const counterReducer = (state = initialState, action) =>{
    if (action.type === 'increment'){
        return {
            //always overwrite. without mention here, always false
            counter : state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'increase'){
        return {
            counter : state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'decrement'){
        return {
            counter : state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle'){
        return {
            //showcounter will be set to the opposite, counter remain the same
            showCounter: !state.showCounter,
            counter : state.counter
        };
    }

    return state;

};

//pass through the reducer function to the store
const store = createStore(counterReducer);

//connect App to the store
export default store;