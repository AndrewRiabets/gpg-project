import EditReportBtn from './EditReportBtn';

function BasicDataReport() {
  return (
    <div>
      <EditReportBtn reportPart={'BasicDataReport'} text={'Общая информация'} />
      <h5>Общая информация</h5>

      <div>
        <div>
          <p>Месяц</p>
        </div>
        <div>
          <p>Март</p>
        </div>
      </div>

      <div>
        <div>
          <p>Система налогообложения</p>
        </div>
        <div>
          <p>Общая система С НДС</p>
        </div>
      </div>

      <div>
        <div>
          <p>Количество наемных сотрудников на начало месяца</p>
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>Количество наемных сотрудников на конец месяца</p>
        </div>
        <div>
          <p>1</p>
        </div>
      </div>

      <div>
        <p>День выплаты зарплаты:</p>
        <div>
          <p>за первую половину месяца</p>
        </div>
        <div>
          <p>15</p>
        </div>
        <div>
          <p>за вторую половину месяца</p>
        </div>
        <div>
          <p>последний рабочий день месяца</p>
        </div>
      </div>
    </div>
  );
}

export default BasicDataReport;
