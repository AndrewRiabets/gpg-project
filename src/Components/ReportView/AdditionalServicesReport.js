import EditReportBtn from './EditReportBtn';

function AdditionalServicesReport() {
  return (
    <div>
      <EditReportBtn
        reportPart={'AdditionalServicesReport'}
        text={'Дополнитеьные услуги'}
      />
      <h5>Дополнитеьные услуги</h5>
      <ul>
        <li>
          <div>
            <p>Количество созданных платежных поручений за месяц</p>
          </div>
          <div>
            <p>10</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalServicesReport;
