import EditReportBtn from './EditReportBtn';

function TaxesReport() {
  return (
    <div>
      <EditReportBtn
        reportPart={'TaxesReport'}
        text={'Налоги оплачиваемые в текущем месяце'}
      />
      <h5>Налоги оплачиваемые в текущем месяце</h5>

      <div>
        <div>
          <p>Эдиный налог</p>
        </div>
        <div>
          <p>15.03.2022</p>
        </div>
      </div>
    </div>
  );
}
export default TaxesReport;
