import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./newReport-action";


const initialState = {
  generalInfo: {
    month: '',
    taxSystem: '',
    emplBeginMonth: '',
    emplEndMonth: '',
    firstSalaryDay: '',
    secondSalaryDay: '',
  },
  profitTransaction: [],
}
  
  
  // {generalInfo:  {
  // month: '',
  // taxSystem: '',
  // emplBeginMonth: '',
  // emplEndMonth: '',
  // firstSalaryDay: '',
  // secondSalaryDay: '',
// }}


//   
//   {
//   firstHalfToRegVAT: '',
//   firstHalfRegistratedVAT: '',
//   secHalfToRegVAT: '',
//   secHalfRegistratedVAT: '',
// },
// {salaryInfo: {
//   paidSalaryFirstHalf: '',
//   createdPayFirstHalf: '',
//   paidSalarySecondtHalf: '',
//   createdPaySecondtHalf: '',
// }},
//  { 1: { taxTitle: '', taxPayDate: '' } },
// { 1: { reportTitle: '', reportPayDate: '' } },
// { closeMonth1c: '', finaceResult: '' },
// { amountPaymentOrders: '' }



  const generalInfo = createReducer(initialState.generalInfo, {
    [actions.generalInfo]: (state, { payload }) => payload.id
    // [actions.generalInfo]: (state, { payload }) => console.lo(state)
  });
  const primeAccDocInfo = createReducer(initialState.profitTransaction, {
    [actions.primeAccDocInfo]: (_, { payload }) => payload,
  });
  // const vatInfo = createReducer(initialState.vatInfo, {
  //   [actions.vatInfo]: (_, { payload }) => payload,
  // });
  // const salaryInfo = createReducer(initialState.salaryInfo, {
  //   [actions.salaryInfo]: (_, { payload }) => payload,
  // });
  // const taxInfo = createReducer(initialState.taxInfo, {
  //   [actions.taxInfo]: (_, { payload }) => payload,
  // });
  // const reportsInfo = createReducer(initialState.reportsInfo, {
  //   [actions.reportsInfo]: (_, { payload }) => payload,
  // });
  // const monthInfo = createReducer(initialState.monthInfo, {
  //   [actions.monthInfo]: (_, { payload }) => payload,
  // });
  // const additionalServicesInfo = createReducer(initialState.additionalServicesInfo, {
  //   [actions.additionalServicesInfo]: (_, { payload }) => payload,
  // });

export default combineReducers({generalInfo, primeAccDocInfo})