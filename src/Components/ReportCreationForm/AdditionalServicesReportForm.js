function AdditionalServicesReportForm({ handleChange, value }) {
  const newAdditionalServicesInfo = value;

  const handleAdittionalServiceItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    newAdditionalServicesInfo[reportItemId] = value;
    handleChange(newAdditionalServicesInfo);
  };

  return (
    <div>
      <h5>Дополнитеьные услуги</h5>

      <div>
        <label>
          Количество созданных платежных поручений за месяц
          <input
            // className={style.input__field}
            onChange={handleAdittionalServiceItem}
            id="amountPaymentOrders"
            type="text"
            name="amountPaymentOrders"
            title="Только цифры"
          />
        </label>
      </div>
    </div>
  );
}

export default AdditionalServicesReportForm;
