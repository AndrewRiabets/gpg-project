function FiledAccountingReportsForm() {
  return (
    <div>
      <h5>Поданные отчеты</h5>

      <div>
        <ul>
          <p>Список подаваемых отчетов в текущем месяце</p>
          <p>ДАТА получения получения квитанции №2</p>
          <li>
            <input type="text" name="taxName"></input>

            <input
              type="date"
              min="2022-03-01"
              max="2024-12-31"
              // className={style.input__field}
              // onChange={handleInputChange}
              // value={month}
            />
          </li>
        </ul>
        <button type="button">Добавить поле</button>
      </div>
    </div>
  );
}
export default FiledAccountingReportsForm;
