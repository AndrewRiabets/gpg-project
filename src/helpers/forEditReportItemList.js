function getReportData(companyReport, exempl) {
  // console.log(companyReport);
  // console.log(exempl);
  let result;
  const {
    date,
    taxSystem,
    emplBeginMonth,
    emplEndMonth,
    firstSalaryDay,
    secondSalaryDay,
    firstHalfStatement,
    secondHalfStatement,
    primaryDocCompleted,
    firstHalfToRegVAT,
    firstHalfRegistratedVAT,
    secHalfToRegVAT,
    secHalfRegistratedVAT,
    paidSalaryFirstHalf,
    createdPayFirstHalf,
    paidSalarySecondtHalf,
    createdPaySecondtHalf,
    newTaxInfo,
    newReportsInfo,
    closeMonth1c,
    finaceResult,
    amountPaymentOrders,
  } = companyReport;

  switch (exempl) {
    case 'generalInfo':
      result = {
        month: date,
        taxSystem,
        emplBeginMonth,
        emplEndMonth,
        firstSalaryDay,
        secondSalaryDay,
      };
      break;
    case 'primeAccDocInfo':
      result = {
        firstHalfStatement,
        secondHalfStatement,
        primaryDocCompleted,
      };
      break;
    case 'vatInfo':
      result = {
        firstHalfToRegVAT,
        firstHalfRegistratedVAT,
        secHalfToRegVAT,
        secHalfRegistratedVAT,
      };
      break;
    case 'salaryInfo':
      result = {
        paidSalaryFirstHalf,
        createdPayFirstHalf,
        paidSalarySecondtHalf,
        createdPaySecondtHalf,
      };
      break;
    case 'taxInfo':
      result = newTaxInfo ? JSON.parse(JSON.stringify(newTaxInfo)) : null;
      break;
    case 'reportsInfo':
      console.log(newReportsInfo);
      result = newReportsInfo
        ? JSON.parse(JSON.stringify(newReportsInfo))
        : null;
      break;
    case 'monthInfo':
      result = {
        closeMonth1c,
        finaceResult,
      };
      break;
    case 'additionalServicesInfo':
      result = {
        amountPaymentOrders,
      };
      break;
    default:
      break;
  }

  return result;
}
export default getReportData;
