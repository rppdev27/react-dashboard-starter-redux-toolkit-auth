import { createSlice } from '@reduxjs/toolkit';

const initialState = { total: 0 };

const balanceSlice = createSlice({
    name: 'balance',

    initialState,
    
    reducers: {
      deposit(state, action) {
        // console.log(state);
        return {
          ...state,
          total: state.total + action.payload,
        };
      },
      withdraw(state, action) {
        // console.log(state);
        return {
          ...state,
          total: state.total - action.payload,
        };
      },
    },
  });
  
  export const { deposit, withdraw } = balanceSlice.actions;
  
  export default balanceSlice.reducer;