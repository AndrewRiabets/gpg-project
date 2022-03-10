function TaxesReportForm() {
  return (
    <div>
      <h5>Уплаченные налоги</h5>

      <div>
        <ul>
          <p>Список налогов оплачиваемых компанией в текущем месяце</p>
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
export default TaxesReportForm;
