function AdditionalServicesReportForm() {
  return (
    <div>
      <h5>Дополнитеьные услуги</h5>

      <div>
        <label>
          Количество созданных платежных поручений за месяц
          <input
            // className={style.input__field}
            // onChange={handleInputChange}
            type="text"
            name="amountPaymentOrders"
            title="Только цифры"
            // value={number}
            required
          />
        </label>
      </div>
    </div>
  );
}

export default AdditionalServicesReportForm;
