import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './reports-action';

const initialState = {
  companyReports: [],
  companyReport: [],
};

const allCompanyReports = createReducer(initialState.companyReports, {
  [actions.getCompanyReports]: (_, { payload }) => payload,
  [actions.addCompanyReports]: (state, { payload }) => [payload, ...state],
});

const companyReport = createReducer(initialState.companyReport, {
  [actions.getReportById]: (_, { payload }) => payload,
  [actions.updateReport]: (_, { payload }) => payload,
});
export default combineReducers({ allCompanyReports, companyReport });
