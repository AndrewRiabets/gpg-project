import uniqid from 'uniqid';

import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function TaxesReport() {
  const { newTaxInfo } = useSelector(getCompanyReport);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return (
    <div>
      <EditReportBtn
        reportPart={'TaxesReport'}
        text={'Налоги оплачиваемые в текущем месяце'}
      />
      <h5 className={style.bdrTitle}>Налоги оплачиваемые в текущем месяце</h5>

      <ul>
        {Object.keys(newTaxInfo).map(el => (
          <li key={uniqid()} className={style.bdrField}>
            <div className={style.bdrFieldName}>
              <p>{newTaxInfo[el].taxTitle || 'Нет данных'}</p>
            </div>
            <div>
              <p>
                {newTaxInfo[el].taxPayDate &&
                  new Date(newTaxInfo[el].taxPayDate).toLocaleString(
                    'ru',
                    options,
                  )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaxesReport;
