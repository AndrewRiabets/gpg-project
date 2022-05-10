import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, role: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, role: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refresh.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.refresh.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});
export default authSlice.reducer;
