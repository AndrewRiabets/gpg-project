import { createAction } from '@reduxjs/toolkit';

export const getUserCompanies = createAction('company/getUserCompanies');
export const getAllCompanies = createAction('company/getAllCompanies');
export const createCompany = createAction('company/createCompany');
// export const changeAccounter = createAction('company/changeAccounter');
