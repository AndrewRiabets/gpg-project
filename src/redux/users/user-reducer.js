import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './user-action';

const initialState = {
  users: [],
};

const allUsers = createReducer(initialState.users, {
  [actions.getAllUsers]: (_, { payload }) => payload,
  [actions.createUser]: (state, { payload }) => [payload, ...state],
});

export default combineReducers({ allUsers });
