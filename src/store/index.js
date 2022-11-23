import {configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

//with toolkit, we do not need a identifier to the action
//counterSlice.actions.toggleCounter

//pass through object now
const store = configureStore({
    reducer : {counter : counterReducer , auth : authReducer},
});




//connect App to the store
export default store;