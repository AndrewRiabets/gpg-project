import EditReportBtn from './EditReportBtn';

function SalaryReport() {
  return (
    <div>
      <EditReportBtn reportPart={'SalaryReport'} text={'Заработная плата'} />
      <h5>Заработная плата</h5>

      <div>
        <div>
          <p>
            Начислена и выплачена зарплата за <b>первую</b> половину месяца в 1С
          </p>
        </div>
        <div>
          <p>15.03.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>
            Созданы платежи на ЗП за <b>первую</b> половину месяца
          </p>
        </div>
        <div>
          <p>15.03.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>
            Начислена и выплачена зарплата за <b>вторую</b> половину месяца в 1С
          </p>
        </div>
        <div>
          <p>31.03.2022</p>
        </div>
      </div>

      <div>
        <div>
          <p>
            Созданы платежи на ЗП за <b>вторую</b> половину месяца
          </p>
        </div>
        <div>
          <p>31.03.2022</p>
        </div>
      </div>
    </div>
  );
}

export default SalaryReport;
