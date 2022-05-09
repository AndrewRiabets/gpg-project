import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function BasicDataReport() {
  const companyReport = useSelector(getCompanyReport);
  return (
    <div>
      <EditReportBtn reportPart={'BasicDataReport'} text={'Общая информация'} />
      <h5 className={style.bdrTitle}>Общая информация</h5>
      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Название:</p>
        </div>
        <div>
          <p>{companyReport.nameCompany}</p>
        </div>
      </div>
      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Месяц:</p>
        </div>
        <div>
          <p>
            {new Date(companyReport.date).toLocaleString('ru', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
      <div className={style.bdrField}>
        <div className={style.bdrFieldName}>
          <p>Система налогообложения</p>
        </div>
        <div>
          <p>{companyReport.taxSystem}</p>
        </div>
      </div>

      <div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>Количество наемных сотрудников на начало месяца</p>
          </div>
          <div>
            <p>{companyReport.emplBeginMonth}</p>
          </div>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>Количество наемных сотрудников на конец месяца</p>
          </div>
          <div>
            <p>{companyReport.emplEndMonth || 'Нет данных'}</p>
          </div>
        </div>
      </div>
      <div>
        <p>День выплаты зарплаты:</p>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>за первую половину месяца</p>
          </div>
          <div>
            <p>{companyReport.firstSalaryDay || 'Нет данных'}</p>
          </div>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>за вторую половину месяца</p>
          </div>
          <div>
            <p>{companyReport.secondSalaryDay || 'Нет данных'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDataReport;
