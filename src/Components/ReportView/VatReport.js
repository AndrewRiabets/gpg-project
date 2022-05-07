import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useSelector } from 'react-redux';

import EditReportBtn from './EditReportBtn';

import style from './ReportView.module.css';

function VatReport() {
  const companyReport = useSelector(getCompanyReport);
  return (
    <div>
      <EditReportBtn reportPart={'VatReport'} text={'Регистрация НДС'} />
      <h5 className={style.bdrTitle}>Регистрация НДС</h5>

      <div>
        <div>
          <p>
            Регистраця налоговых накладных в <b>первой</b> половине месяца
          </p>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>к регистрации (шт.)</p>
          </div>
          <div>
            <p>{companyReport.firstHalfToRegVAT || 'Нет дланных'}</p>
          </div>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>зарегистрировано (шт.)</p>
          </div>
          <div>
            <p>{companyReport.firstHalfRegistratedVAT || 'Нет дланных'}</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p>
            Регистраця налоговых накладных во <b>второй</b> половине месяца
          </p>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>к регистрации (шт.)</p>
          </div>
          <div>
            <p>{companyReport.secHalfToRegVAT || 'Нет дланных'}</p>
          </div>
        </div>
        <div className={style.bdrField}>
          <div className={style.bdrFieldName}>
            <p>зарегистрировано (шт.)</p>
          </div>
          <div>
            <p>{companyReport.secHalfRegistratedVAT || 'Нет дланных'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VatReport;
