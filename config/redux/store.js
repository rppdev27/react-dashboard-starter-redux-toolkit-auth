import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// Reducer 
import authReducer from './reducers/authSlice'
import balanceReducer from './reducers/balanceSlice'


const rootReducer = combineReducers({
	auth: authReducer,
	balance: balanceReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;