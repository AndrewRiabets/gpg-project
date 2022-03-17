import React from 'react';
import { NavLink } from 'react-router-dom';

import BasicDataReport from '../../Components/ReportView/BasicDataReport';
import PrimaryAccountingDocReport from '../../Components/ReportView/PrimaryAccountingDocReport';
import VatReport from '../../Components/ReportView/VatReport';
import SalaryReport from '../../Components/ReportView/SalaryReport';
import TaxesReport from '../../Components/ReportView/TaxesReport';
import FiledAccountingReports from '../../Components/ReportView/FiledAccountingReports';
import ClosingMonthReport from '../../Components/ReportView/ClosingMonthReport';
import AdditionalServicesReport from '../../Components/ReportView/AdditionalServicesReport';

const ReportPage = ({ companyName }) => {
  console.log(companyName);
  return (
    <>
      <NavLink to="/main">Назад</NavLink>
      <h1>КАРТОЧКА КЛИЕНТА</h1>
      <BasicDataReport />
      <PrimaryAccountingDocReport />
      <VatReport />
      <SalaryReport />
      <TaxesReport />
      <FiledAccountingReports />
      <ClosingMonthReport />
      <AdditionalServicesReport />
    </>
  );
};

export default ReportPage;
