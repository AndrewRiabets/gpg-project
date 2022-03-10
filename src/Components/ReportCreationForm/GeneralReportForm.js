import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import BasicDataReportForm from './BasicDataReportForm';
import PrimaryAccountingDocReportForm from './PrimaryAccountingDocReportForm';
import SalaryReportForm from './SalaryReportForm';
import VatReportForm from './VatReportForm';
import TaxesReportForm from './TaxesReportForm';
import FiledAccountingReportsForm from './FiledAccountingReportsForm';
import ClosingMonthReportForm from './ClosingMonthReportForm';
import AdditionalServicesReportForm from './AdditionalServicesReportForm';

export default function GeneralReportForm(params) {
  return (
    <div>
      <h1>КАРТОЧКА КЛИЕНТА</h1>
      <form>
        <BasicDataReportForm />
        <PrimaryAccountingDocReportForm />
        <VatReportForm />
        <SalaryReportForm />
        <TaxesReportForm />
        <FiledAccountingReportsForm />
        <ClosingMonthReportForm />
        <AdditionalServicesReportForm />

        <button type="submit">Создать отчет</button>
      </form>
    </div>
  );
}
