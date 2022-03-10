function SalaryReportForm() {
  return (
    <div>
      <h5>Заработная плата</h5>

      <div>
        <label>
          Начислена и выплачена зарплата за первую половину месяца в 1С
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            // onChange={handleInputChange}
            // value={month}
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
            // onChange={handleInputChange}
            // value={month}
          />
        </label>
      </div>

      <div>
        <label>
          Начислена и выплачена зарплата за вторую половину месяца 1С
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            // onChange={handleInputChange}
            // value={month}
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
            // onChange={handleInputChange}
            // value={month}
          />
        </label>
      </div>
    </div>
  );
}

export default SalaryReportForm;
