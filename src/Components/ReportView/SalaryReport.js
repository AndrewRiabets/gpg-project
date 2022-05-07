import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function SalaryReport() {
  const companyReport = useSelector(getCompanyReport);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return (
    <div>
      <EditReportBtn reportPart={'SalaryReport'} text={'Заработная плата'} />
      <h5 className={style.bdrTitle}>Заработная плата</h5>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>
            Выплачена зарплата за <b>первую</b> половину месяца:
          </p>
        </div>
        <div>
          <p>
            {companyReport.paidSalaryFirstHalf
              ? new Date(companyReport.paidSalaryFirstHalf).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет дланных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>
            Созданы платежи на ЗП за <b>первую</b> половину месяца:
          </p>
        </div>
        <div>
          <p>
            {companyReport.createdPayFirstHalf
              ? new Date(companyReport.createdPayFirstHalf).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет дланных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>
            Выплачена зарплата за <b>вторую</b> половину месяца:
          </p>
        </div>
        <div>
          <p>
            {companyReport.paidSalarySecondtHalf
              ? new Date(companyReport.paidSalarySecondtHalf).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет дланных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>
            Созданы платежи на ЗП за <b>вторую</b> половину месяца:
          </p>
        </div>
        <div>
          <p>
            {companyReport.createdPaySecondtHalf
              ? new Date(companyReport.createdPaySecondtHalf).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет дланных'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalaryReport;
