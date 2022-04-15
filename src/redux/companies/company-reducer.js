import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './company-action';

const initialState = {
  companies: [],
};

const allCompanies = createReducer(initialState.companies, {
  [actions.getAllCompanies]: (_, { payload }) => payload,
  [actions.createCompany]: (state, { payload }) => [payload, ...state],
});

export default combineReducers({ allCompanies });
