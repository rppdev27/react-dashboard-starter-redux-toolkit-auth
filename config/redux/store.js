import axios from 'axios';
const API_URL = "https://api-v2.menica.pro/";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// Reducer 
import authReducer from './reducers/authSlice'
import balanceReducer from './reducers/balanceSlice'

const inisialState = {
	// dataBlog : 'ini data dari store',
	// name: 'ryan pradipta putra',
	// isAuthenticated: false,
  	// token: null,
}

// const initialAuthState = {
// 	token: localStorage.getItem('token') || null,
//   	isAuthenticated: localStorage.getItem('token') ? true : false,
//   };

// const authReducer = (state = initialAuthState, action) => {
// 	switch (action.type) {
// 	  case 'LOGIN_SUCCESS':
// 		localStorage.setItem('user', JSON.stringify(action.payload.email));
//       	localStorage.setItem('token', action.payload.token);
// 		return {
// 		  ...state,
// 		  isAuthenticated: true,
// 		  token: action.payload.token,
// 		};
// 	  case 'LOGOUT':
// 		localStorage.removeItem('user');
//       	localStorage.removeItem('token');
// 		console.log(localStorage);
// 		return {
// 		  ...state,
// 		  isAuthenticated: false,
// 		  token: null,
// 		};
// 	  default:
// 		return state;
// 	}
// };

// const reducer = (state = inisialState, action) => {

// 	if(action.type == 'UPDATE_NAME'){
// 		return {
// 			...state,
// 			name: action.payload
// 		}
// 	}

// 	return state
// };



const rootReducer = combineReducers({
	auth: authReducer,
	balance: balanceReducer,
	// global: reducer
	// Add other reducers as needed
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;