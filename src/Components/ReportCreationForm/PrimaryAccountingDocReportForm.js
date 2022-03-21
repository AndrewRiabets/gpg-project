function PrimaryAccountingDocReportForm({ handleChange, value }) {
  const newPrimeAccDocInfo = value;

  const handleReportItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    newPrimeAccDocInfo[reportItemId] = value;
    handleChange(newPrimeAccDocInfo);
  };
  return (
    <div>
      <h5>Первичные документы</h5>
      <div>
        <label>
          Разнесена выписка за первую половину месяца
          <input
            type="date"
            onChange={handleReportItem}
            id="firstHalfStatement"
          />
        </label>
      </div>

      <div>
        <label>
          Разнесена выписка за вторую половину месяца
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            onChange={handleReportItem}
            id="secondHalfStatement"
          />
        </label>
      </div>

      <div>
        <label>
          Проведены все первичные документы
          <input
            type="date"
            min="2022-03-01"
            max="2024-12-31"
            onChange={handleReportItem}
            id="primaryDocCompleted"
          />
        </label>
      </div>
    </div>
  );
}

export default PrimaryAccountingDocReportForm;
