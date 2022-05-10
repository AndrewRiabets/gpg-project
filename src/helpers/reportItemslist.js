const generalInfo = {
  month: '',
  taxSystem: 'Общая система С НДС',
  emplBeginMonth: '',
  emplEndMonth: '',
  firstSalaryDay: '',
  secondSalaryDay: '',
};

const primeAccDocInfo = {
  firstHalfStatement: '',
  secondHalfStatement: '',
  primaryDocCompleted: '',
};

const vatInfo = {
  firstHalfToRegVAT: '',
  firstHalfRegistratedVAT: '',
  secHalfToRegVAT: '',
  secHalfRegistratedVAT: '',
};

const salaryInfo = {
  paidSalaryFirstHalf: '',
  createdPayFirstHalf: '',
  paidSalarySecondtHalf: '',
  createdPaySecondtHalf: '',
};

const taxInfo = { 1: { taxTitle: '', taxPayDate: '' } };

const reportsInfo = {
  1: { reportTitle: '', reportPayDate: '' },
};

const monthInfo = { closeMonth1c: '', finaceResult: '' };

const additionalServicesInfo = {
  amountPaymentOrders: '',
};

const reportItemsList = {
  generalInfo,
  primeAccDocInfo,
  vatInfo,
  salaryInfo,
  taxInfo,
  reportsInfo,
  monthInfo,
  additionalServicesInfo,
};

export default reportItemsList;
