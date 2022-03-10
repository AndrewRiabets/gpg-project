function PrimaryAccountingDocReportForm() {
  return (
    <div>
      <h5>Первичные документы</h5>
      <div>
        <label>
          Разнесена выписка за первую половину месяца
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
          Разнесена выписка за вторую половину месяца
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
          Проведены все первичные документы
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

export default PrimaryAccountingDocReportForm;
