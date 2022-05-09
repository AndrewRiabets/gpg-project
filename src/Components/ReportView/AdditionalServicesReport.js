import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function AdditionalServicesReport() {
  const companyReport = useSelector(getCompanyReport);
  return (
    <div>
      <EditReportBtn
        reportPart={'AdditionalServicesReport'}
        text={'Дополнитеьные услуги'}
      />
      <h5 className={style.bdrTitle}>Дополнительные услуги</h5>
      <ul>
        <li className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>Количество созданных платежных поручений за месяц:</p>
          </div>
          <div>
            <p>{companyReport.amountPaymentOrders || 'Нет данных'}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalServicesReport;
