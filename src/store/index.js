import { createSlice,configureStore } from '@reduxjs/toolkit';

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

//with toolkit, we do not need a identifier to the action
//counterSlice.actions.toggleCounter

const initialAuthState = {
    isAuthenticated : false
};

const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }
});

//pass through object now
const store = configureStore({
    reducer : {counter : counterSlice.reducer , auth : authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//connect App to the store
export default store;