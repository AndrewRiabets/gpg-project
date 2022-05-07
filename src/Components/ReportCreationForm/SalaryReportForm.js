import reportItemsList from '../../helpers/reportItemslist';

function SalaryReportForm({ handleChange, value }) {
  // console.log(value);
  const salaryInfo = value || reportItemsList.salaryInfo;

  const handleReportItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    salaryInfo[reportItemId] = value;
    handleChange(salaryInfo);
  };
  return (
    <div>
      <h5>Заработная плата</h5>

      <div>
        <label>
          Выплачена зарплата за первую половину месяца в 1С
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleReportItem}
            id="paidSalaryFirstHalf"
            {...(value &&
              value.paidSalaryFirstHalf && {
                defaultValue: `${value.paidSalaryFirstHalf.substr(0, 10)}`,
              })}
          />
        </label>
      </div>

      <div>
        <label>
          Созданы платежи на ЗП за первую половину месяца
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleReportItem}
            id="createdPayFirstHalf"
            {...(value &&
              value.createdPayFirstHalf && {
                defaultValue: `${value.createdPayFirstHalf.substr(0, 10)}`,
              })}
          />
        </label>
      </div>

      <div>
        <label>
          Выплачена зарплата за вторую половину месяца 1С
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleReportItem}
            id="paidSalarySecondtHalf"
            {...(value &&
              value.paidSalarySecondtHalf && {
                defaultValue: `${value.paidSalarySecondtHalf.substr(0, 10)}`,
              })}
          />
        </label>
      </div>

      <div>
        <label>
          Созданы платежи на ЗП за вторую половину месяца
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleReportItem}
            id="createdPaySecondtHalf"
            {...(value &&
              value.createdPaySecondtHalf && {
                defaultValue: `${value.createdPaySecondtHalf.substr(0, 10)}`,
              })}
          />
        </label>
      </div>
    </div>
  );
}

export default SalaryReportForm;
