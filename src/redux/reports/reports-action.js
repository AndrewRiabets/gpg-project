import { createAction } from '@reduxjs/toolkit';

export const getCompanyReports = createAction('reports/getCompanyReports');
export const addCompanyReports = createAction('reports/addCompanyReports');
export const getReportById = createAction('reports/getReportById');
export const updateReport = createAction('reports/updateReport');
