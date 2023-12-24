import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: localStorage.getItem('token') || null,
  	isAuthenticated: localStorage.getItem('token') ? true : false,
};

const authSlice = createSlice({
    name: 'auth',

    initialState,
    
    reducers: {
      LOGIN_SUCCESS(state, action) {
        localStorage.setItem('user', JSON.stringify(action.payload.email));
      	localStorage.setItem('token', action.payload.token);
		
        return {
            ...state,
            isAuthenticated: true,
            token: action.payload.token,
        };
      },
      LOGOUT(state) {
        localStorage.removeItem('user');
      	localStorage.removeItem('token');

        return {
          ...state,
		  isAuthenticated: false,
		  token: null,
        };
      },
    },
  });
  
  export const { LOGIN_SUCCESS, LOGOUT } = authSlice.actions;
  
  export default authSlice.reducer;