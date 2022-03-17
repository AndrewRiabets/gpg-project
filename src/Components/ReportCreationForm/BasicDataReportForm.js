function BasicDataReportForm() {
  return (
    <div>
      <h5>Общая информация</h5>
      <div>
        <label>
          Месяц
          <input
            type="month"
            min="2022-03"
            max="2023-12"
            // className={style.input__field}
            // onChange={handleInputChange}
            // value={month}
          />
        </label>
      </div>

      <div>
        <label htmlFor="taxationSystems">Система налогообложения</label>
        <select name="taxationSystems" id="taxationSystems">
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
            // className={style.input__field}
            // onChange={handleInputChange}
            type="text"
            name="employeeBeginingMonth"
            title="Только цифры"
            // value={number}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Количество наемных сотрудников на конец месяца
          <input
            // className={style.input__field}
            // onChange={handleInputChange}
            type="text"
            name="employeeEndMonth"
            title="Только цифры"
            //   value={number}
          />
        </label>
      </div>

      <div>
        <p>День выплаты зарплаты:</p>
        <label>
          за первую половину месяца
          <input
            // className={style.input__field}
            // onChange={handleInputChange}
            type="text"
            name="prepaid"
            title="Только цифры"
            // value={number}
            required
          />
        </label>
        <label>
          за вторую половину месяца
          <input
            // className={style.input__field}
            // onChange={handleInputChange}
            type="text"
            name="salary"
            title="Только цифры"
            // value={number}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default BasicDataReportForm;
