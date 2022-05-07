import { React, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { useFetchCompanyReportMutation } from '../../redux/services/reportsAPI';
import { getToken } from '../../redux/auth/auth-selectors';
import { getCompanyReport } from '../../redux/reports/reports-selector';
import * as actions from '../../redux/reports/reports-action';

import Container from '../../Components/Container/Container';
import BasicDataReport from '../../Components/ReportView/BasicDataReport';
import PrimaryAccountingDocReport from '../../Components/ReportView/PrimaryAccountingDocReport';
import VatReport from '../../Components/ReportView/VatReport';
import SalaryReport from '../../Components/ReportView/SalaryReport';
import TaxesReport from '../../Components/ReportView/TaxesReport';
import FiledAccountingReports from '../../Components/ReportView/FiledAccountingReports';
import ClosingMonthReport from '../../Components/ReportView/ClosingMonthReport';
import AdditionalServicesReport from '../../Components/ReportView/AdditionalServicesReport';

import style from './ReportPage.module.css';
const ReportPage = () => {
  const [response, setResponse] = useState(false);
  const [fetchCompanyReport] = useFetchCompanyReportMutation();
  const { taxSystem } = useSelector(getCompanyReport);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const location = useLocation();
  const { reportId } = location.state;

  const getCompanyReportAndPushToStore = useCallback(async () => {
    try {
      const response = await fetchCompanyReport({ token, reportId });
      dispatch(actions.getReportById(response.data));
      setResponse(true);
    } catch (error) {
      console.log(error);
    }
  }, [token, dispatch, reportId, fetchCompanyReport]);

  useEffect(() => {
    getCompanyReportAndPushToStore();
  }, [getCompanyReportAndPushToStore]);

  return (
    <>
      {response ? (
        <Container>
          <NavLink to="/main">Назад</NavLink>
          <div className={style.reportTitle}>
            <h1>КАРТОЧКА КЛИЕНТА</h1>
          </div>
          <BasicDataReport />
          <PrimaryAccountingDocReport />
          {taxSystem.includes('С НДС') && <VatReport />}
          <SalaryReport />
          <TaxesReport />
          <FiledAccountingReports />
          <ClosingMonthReport />
          <AdditionalServicesReport />
        </Container>
      ) : (
        <h1>Загружаем...</h1>
      )}
    </>
  );
};

export default ReportPage;
