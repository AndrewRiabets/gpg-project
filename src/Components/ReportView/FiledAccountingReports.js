import EditReportBtn from './EditReportBtn';

function FiledAccountingReports() {
  return (
    <div>
      <EditReportBtn
        reportPart={'FiledAccountingReports'}
        text={'Поданные отчеты'}
      />
      <h5>Поданные отчеты</h5>
      <ul>
        <li>
          <div>
            <p>Декларация плательщика единого налога</p>
          </div>
          <div>
            <p>15.03.2022</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default FiledAccountingReports;
