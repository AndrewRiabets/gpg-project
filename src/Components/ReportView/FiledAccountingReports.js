import uniqid from 'uniqid';

import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function FiledAccountingReports() {
  const { newReportInfo } = useSelector(getCompanyReport);
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return (
    <div>
      <EditReportBtn
        reportPart={'FiledAccountingReports'}
        text={'Поданные отчеты'}
      />
      <h5 className={style.bdrTitle}>Поданные отчеты</h5>
      <ul>
        {Object.keys(newReportInfo).map(el => (
          <li key={uniqid()} className={style.bdrField}>
            <div className={style.bdrFieldName}>
              <p>{newReportInfo[el].reportTitle || 'Нет данных'}</p>
            </div>
            <div>
              <p>
                {newReportInfo[el].reportPayDate &&
                  new Date(newReportInfo[el].reportPayDate).toLocaleString(
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
export default FiledAccountingReports;
