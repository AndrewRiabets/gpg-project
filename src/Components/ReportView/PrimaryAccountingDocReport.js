import EditReportBtn from './EditReportBtn';

function PrimaryAccountingDocReport() {
  return (
    <div>
      <EditReportBtn
        reportPart={'PrimaryAccountingDocReport'}
        text={'Первичные документы'}
      />
      <h5>Первичные документы</h5>

      <div>
        <div>
          <p>Разнесена выписка за первую половину месяца</p>
        </div>
        <div>
          <p>06.03.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>Разнесена выписка за вторую половину месяца</p>
        </div>
        <div>
          <p>30.03.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>Проведены все первичные документы</p>
        </div>
        <div>
          <p>Проведены все первичные документы</p>
        </div>
      </div>
    </div>
  );
}

export default PrimaryAccountingDocReport;
