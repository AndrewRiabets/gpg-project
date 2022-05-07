import reportItemsList from '../../helpers/reportItemslist';

function ClosingMonthReportForm({ handleChange, value }) {
  const newMonthInfo = value || reportItemsList.generalInfo;

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
            {...(value &&
              value.closeMonth1c && {
                defaultValue: `${value.closeMonth1c.substr(0, 10)}`,
              })}
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
            {...(value &&
              value.finaceResult && {
                defaultValue: `${value.finaceResult.substr(0, 10)}`,
              })}
          />
        </label>
      </div>
    </div>
  );
}

export default ClosingMonthReportForm;
