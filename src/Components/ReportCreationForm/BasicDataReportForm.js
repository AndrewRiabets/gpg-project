import reportItemsList from '../../helpers/reportItemslist';

function BasicDataReportForm({ handleChange, value }) {
  let newGeneralInfo = value || reportItemsList.generalInfo;

  const handleReportItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    newGeneralInfo[reportItemId] = value;
    handleChange(newGeneralInfo);
  };

  return (
    <div>
      <h5>Общая информация</h5>
      <div>
        <label>
          Месяц
          <input
            type="month"
            min="2022-03"
            onChange={handleReportItem}
            id="month"
            {...(value &&
              value.month && {
                defaultValue: `${value.month.substr(0, 7)}`,
              })}
          />
        </label>
      </div>

      <div>
        <label htmlFor="taxationSystems">Система налогообложения</label>
        <select
          name="taxationSystems"
          id="taxSystem"
          onChange={handleReportItem}
          {...(value
            ? {
                defaultValue: `${value.taxSystem}`,
              }
            : { defaultValue: 'Общая система С НДС' })}
          required
        >
          <option value="Общая система С НДС">Общая система С НДС</option>
          <option value="Общая система БЕЗ НДС">Общая система БЕЗ НДС</option>
          <option value="Единый налог 1 группа">Единый налог 1 группа</option>
          <option value="Единый налог 2 группа">Единый налог 2 группа</option>
          <option value="Единый налог 3 группа БЕЗ НДС">
            Единый налог 3 группа БЕЗ НДС
          </option>
          <option value="Единый налог 3 группа С НДС">
            Единый налог 3 группа С НДС
          </option>
          <option value="Единый налог 4 группа">Единый налог 4 группа</option>
        </select>
      </div>

      <div>
        <label>
          Количество наемных сотрудников на начало месяца
          <input
            onChange={handleReportItem}
            id={'emplBeginMonth'}
            type="text"
            name="employeeBeginingMonth"
            title="Только цифры"
            {...(value && {
              defaultValue: `${value.emplBeginMonth}`,
            })}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Количество наемных сотрудников на конец месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'emplEndMonth'}
            type="text"
            title="Только цифры"
            {...(value && {
              defaultValue: `${value.emplEndMonth}`,
            })}
          />
        </label>
      </div>

      <div>
        <p>День выплаты зарплаты:</p>
        <label>
          за первую половину месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'firstSalaryDay'}
            type="text"
            name="prepaid"
            title="Только цифры"
            {...(value && {
              defaultValue: `${value.firstSalaryDay}`,
            })}
            required
          />
        </label>
        <label>
          за вторую половину месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'secondSalaryDay'}
            type="text"
            name="salary"
            title="Только цифры"
            {...(value && {
              defaultValue: `${value.secondSalaryDay}`,
            })}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default BasicDataReportForm;
