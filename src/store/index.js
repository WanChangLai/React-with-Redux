import {createStore} from 'redux';

const initialState = { counter:0, showCounter: true }

const counterReducer = (state = initialState, action) =>{
    if (action.type === 'increment'){
        return {
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