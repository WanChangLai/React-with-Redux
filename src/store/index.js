import {createStore} from 'redux';

//
const counterReducer = (state = {counter:0} ,action) =>{
    if (action.type === 'increment'){
        return {
            counter : state.counter + 1,
        };
    }

    if (action.type === 'increase'){
        return {
            counter : state.counter + action.amount,
        };
    }

    if (action.type === 'decrement'){
        return {
            counter : state.counter - 1,
        };
    }

    return state;

};

//pass through the reducer function to the store
const store = createStore(counterReducer);

//connect App to the store
export default store;