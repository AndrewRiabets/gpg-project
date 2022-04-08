import { createAction } from '@reduxjs/toolkit'

export const generalInfo = createAction("newReport/generalInfo")
export const primeAccDocInfo = createAction("newReport/primeAccDocInfo");
export const vatInfo = createAction("newReport/vatInfo");
export const salaryInfo = createAction("newReport/salaryInfo");
export const taxInfo = createAction("newReport/taxInfo");
export const reportsInfo = createAction("newReport/reportsInfo");
export const monthInfo = createAction("newReport/monthInfo");
export const additionalServicesInfo = createAction("newReport/additionalServicesInfo");

