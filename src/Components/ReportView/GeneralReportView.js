import BasicDataReport from './BasicDataReport';
import PrimaryAccountingDocReport from './PrimaryAccountingDocReport';
import VatReport from './VatReport';
import SalaryReport from './SalaryReport';
import TaxesReport from './TaxesReport';
import FiledAccountingReports from './FiledAccountingReports';
import ClosingMonthReport from './ClosingMonthReport';
import AdditionalServicesReport from './AdditionalServicesReport';

function GeneralReportView(params) {
  return (
    <div>
      <main>
        <h1>КАРТОЧКА КЛИЕНТА</h1>
        <BasicDataReport />
        <PrimaryAccountingDocReport />
        <VatReport />
        <SalaryReport />
        <TaxesReport />
        <FiledAccountingReports />
        <ClosingMonthReport />
        <AdditionalServicesReport />
      </main>
    </div>
  );
}

export default GeneralReportView;
