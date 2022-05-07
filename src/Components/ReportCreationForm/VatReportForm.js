import reportItemsList from '../../helpers/reportItemslist';

function VatReportForm({ handleChange, value }) {
  const vatInfo = value || reportItemsList.generalInfo;

  const handleReportItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    vatInfo[reportItemId] = value;
    handleChange(vatInfo);
  };
  return (
    <div>
      <h5>Регистрация НДС</h5>

      <label>
        <p>
          Регистраця налоговых накладных в <b>первой</b> половине месяца
        </p>
        к регистрации (шт.)
        <input
          onChange={handleReportItem}
          id="firstHalfToRegVAT"
          type="text"
          title="Только цифры"
          {...(value && {
            defaultValue: `${value.firstHalfToRegVAT}`,
          })}
        />
        зарегистрировано (шт.)
        <input
          onChange={handleReportItem}
          id="firstHalfRegistratedVAT"
          type="text"
          title="Только цифры"
          {...(value && {
            defaultValue: `${value.firstHalfRegistratedVAT}`,
          })}
        />
      </label>

      <label>
        <p>
          Регистраця налоговых накладных во <b>второй</b> половине месяца
        </p>
        к регистрации (шт.)
        <input
          onChange={handleReportItem}
          id="secHalfToRegVAT"
          type="text"
          title="Только цифры"
          {...(value && {
            defaultValue: `${value.secHalfToRegVAT}`,
          })}
        />
        зарегистрировано (шт.)
        <input
          onChange={handleReportItem}
          id="secHalfRegistratedVAT"
          type="text"
          title="Только цифры"
          {...(value && {
            defaultValue: `${value.secHalfRegistratedVAT}`,
          })}
        />
      </label>
    </div>
  );
}

export default VatReportForm;
