function VatReportForm() {
  return (
    <div>
      <h5>Регистрация НДС</h5>

      <label>
        <p>
          Регистраця налоговых накладных в <b>первой</b> половине месяца
        </p>
        к регистрации (шт.)
        <input
          // className={style.input__field}
          // onChange={handleInputChange}
          type="text"
          name="registrationVatFirstHalfMonth"
          title="Только цифры"
          // value={number}
          required
        />
        зарегистрировано (шт.)
        <input
          // className={style.input__field}
          // onChange={handleInputChange}
          type="text"
          name="registrationVatFirstHalfMonth"
          title="Только цифры"
          // value={number}
          required
        />
      </label>

      <label>
        <p>
          Регистраця налоговых накладных во <b>второй</b> половине месяца
        </p>
        к регистрации (шт.)
        <input
          // className={style.input__field}
          // onChange={handleInputChange}
          type="text"
          name="registrationVatFirstHalfMonth"
          title="Только цифры"
          // value={number}
          required
        />
        зарегистрировано (шт.)
        <input
          // className={style.input__field}
          // onChange={handleInputChange}
          type="text"
          name="registrationVatFirstHalfMonth"
          title="Только цифры"
          // value={number}
          required
        />
      </label>
    </div>
  );
}

export default VatReportForm;
