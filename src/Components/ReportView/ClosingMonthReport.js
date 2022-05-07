import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function ClosingMonthReport() {
  const companyReport = useSelector(getCompanyReport);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return (
    <div>
      <EditReportBtn
        reportPart={'ClosingMonthReport'}
        text={'Закрытие месяца'}
      />
      <h5 className={style.bdrTitle}>Закрытие месяца</h5>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Закрытие месяца в 1С:</p>
        </div>
        <div>
          <p>
            {companyReport.closeMonth1c
              ? new Date(companyReport.closeMonth1c).toLocaleString(
                  'ru',
                  options,
                )
              : 'Нет дланных'}
          </p>
        </div>
      </div>

      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Определение финансовых результатов за квартал</p>
        </div>
        <div>
          <p>
            {companyReport.finaceResult
              ? new Date(companyReport.finaceResult).toLocaleString(
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

export default ClosingMonthReport;
