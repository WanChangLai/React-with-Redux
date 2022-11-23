import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter:0, showCounter: true};

//take object as an input 
const counterSlice = createSlice({
  name: 'counter',
  initialState:initialCounterState,
  reducers:{
    //method here
    increment(state){
        //mutate the state is allowed here
        state.counter++;
    },
    decrement(state){
        state.counter--;
    },
    increase(state,action){
        state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
        state.showCounter = !state.showCounter
    }
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
