import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import BasicDataReport from './BasicDataReport';
import PrimaryAccountingDocReport from './PrimaryAccountingDocReport';
import SalaryReport from './SalaryReport';
import VatReport from './VatReport';
import TaxesReport from './TaxesReport';
import FiledAccountingReports from './FiledAccountingReports';
import AdditionalServicesReport from './AdditionalServicesReport';
import ClosingMonthReport from './ClosingMonthReport';

export default function CreateNewReport(params) {
  return (
    <div>
      <h1>КАРТОЧКА КЛИЕНТА</h1>
      <form>
        <BasicDataReport />
        <PrimaryAccountingDocReport />
        <VatReport />
        <SalaryReport />
        <TaxesReport />
        <FiledAccountingReports />
        <ClosingMonthReport />
        <AdditionalServicesReport />

        <button type="submit">Создать отчет</button>
      </form>
    </div>
  );
}
