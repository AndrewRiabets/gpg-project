import reportItemsList from '../../helpers/reportItemslist';

function PrimaryAccountingDocReportForm({ handleChange, value }) {
  let newPrimeAccDocInfo = value || reportItemsList.generalInfo;
  // !companyReport
  //   ? (newPrimeAccDocInfo = reportItemsList.generalInfo)
  //   : (newPrimeAccDocInfo = {
  //       firstHalfStatement: companyReport.firstHalfStatement,
  //       secondHalfStatement: companyReport.secondHalfStatement,
  //       primaryDocCompleted: companyReport.primaryDocCompleted,
  //     });

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
            {...(value &&
              value.firstHalfStatement && {
                defaultValue: `${value.firstHalfStatement.substr(0, 10)}`,
              })}
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
            {...(value &&
              value.secondHalfStatement && {
                defaultValue: `${value.secondHalfStatement.substr(0, 10)}`,
              })}
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
            {...(value &&
              value.primaryDocCompleted && {
                defaultValue: `${value.primaryDocCompleted.substr(0, 10)}`,
              })}
          />
        </label>
      </div>
    </div>
  );
}

export default PrimaryAccountingDocReportForm;
