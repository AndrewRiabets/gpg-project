import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function PrimaryAccountingDocReport() {
  const companyReport = useSelector(getCompanyReport);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  console.log(companyReport);
  console.log(companyReport.paidSalaryFirstHalf);
  return (
    <div>
      <EditReportBtn
        reportPart={'PrimaryAccountingDocReport'}
        text={'Первичные документы'}
      />
      <h5 className={style.bdrTitle}>Первичные документы</h5>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Разнесена выписка за первую половину месяца:</p>
        </div>
        <div>
          <p>
            {companyReport.firstHalfStatement
              ? new Date(companyReport.firstHalfStatement).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет данных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Разнесена выписка за вторую половину месяца:</p>
        </div>
        <div>
          <p>
            {companyReport.secondHalfStatement
              ? new Date(companyReport.secondHalfStatement).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет данных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Проведены все первичные документы:</p>
        </div>
        <div>
          <p>
            {companyReport.primaryDocCompleted
              ? new Date(companyReport.primaryDocCompleted).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет данных'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrimaryAccountingDocReport;
