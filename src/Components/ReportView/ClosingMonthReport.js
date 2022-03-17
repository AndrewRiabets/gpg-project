import EditReportBtn from './EditReportBtn';

function ClosingMonthReport() {
  return (
    <div>
      <EditReportBtn
        reportPart={'ClosingMonthReport'}
        text={'Закрытие месяца'}
      />
      <h5>Закрытие месяца</h5>

      <div>
        <div>
          <p>Закрытие месяца в 1С</p>
        </div>
        <div>
          <p>03.04.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>Определение финансовых результатов за квартал</p>
        </div>
        <div>
          <p>03.04.2022</p>
        </div>
      </div>
    </div>
  );
}

export default ClosingMonthReport;
