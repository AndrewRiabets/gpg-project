function ClosingMonthReportForm({ handleChange, value }) {
  const newMonthInfo = value;

  const handleMontInfoItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    newMonthInfo[reportItemId] = value;
    handleChange(newMonthInfo);
  };
  return (
    <div>
      <h5>Закрытие месяца</h5>

      <div>
        <label>
          Закрытие месяца в 1С
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleMontInfoItem}
            id="closeMonth1c"
          />
        </label>
      </div>

      <div>
        <label>
          Определение финансовых результатов за квартал
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            // className={style.input__field}
            onChange={handleMontInfoItem}
            id="finaceResult"
          />
        </label>
      </div>
    </div>
  );
}

export default ClosingMonthReportForm;
