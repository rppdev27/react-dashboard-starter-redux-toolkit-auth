import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = "https://api-v2.menica.pro/";

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async(payload) => {
   
    try{

      const request = await axios.post(API_URL + 'user/login', payload);
      const response = await request.data.data;

      // console.log(response);
      localStorage.setItem('user', JSON.stringify(response.email));
      localStorage.setItem('token', response.token);
      
      return response;

    } catch (error) {
      // Handle error
      throw error.response.data;
    }

  }

);

// initialize userToken from local storage
const isAuthenticated = localStorage.getItem('token') ? true : false;
const token = localStorage.getItem('token') || null;


const initialState = {
  loading: false,
  token,
  isAuthenticated,
  error: null,
  success: false,
}

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
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          console.log('pending');
          state.loading = 'loading';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          // console.log(state.isAuthenticated);
          // console.log('succeeded');
          state.loading = 'succeeded';
          state.isAuthenticated = true;
          state.token = action.payload.token;
          state.error = null;
          console.log(state.isAuthenticated);
          // navigate('/');
        })
        .addCase(loginUser.rejected, (state, action) => {
          console.log('failed');
          state.loading = 'failed';
          state.error = action.error.message || 'Login failed';
        });
    },
  });
  
  export const { LOGIN_SUCCESS, LOGOUT } = authSlice.actions;
  
  export default authSlice.reducer;