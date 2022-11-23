import { createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = { counter:0, showCounter: true }

//take object as an input 
const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

//with toolkit, we do not need a identifier to the action
//counterSlice.actions.toggleCounter

//pass through object now
const store = configureStore({
    reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions;

//connect App to the store
export default store;