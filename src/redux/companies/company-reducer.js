import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './company-action';

const initialState = {
  companies: [],
  userCompanies: [],
};

const allCompanies = createReducer(initialState.companies, {
  [actions.getAllCompanies]: (_, { payload }) => payload,
  [actions.createCompany]: (state, { payload }) => [payload, ...state],
});
const userCompanies = createReducer(initialState.userCompanies, {
  [actions.getUserCompanies]: (_, { payload }) => payload,
});

export default combineReducers({ allCompanies, userCompanies });
