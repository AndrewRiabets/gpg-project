import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchUpdateReportMutation } from '../../redux/services/reportsAPI';
import { getToken } from '../../redux/auth/auth-selectors';
import { getCompanyReport } from '../../redux/reports/reports-selector';
import * as actions from '../../redux/reports/reports-action';

import getReportData from '../../helpers/forEditReportItemList';
import BasicDataReportForm from '../ReportCreationForm/BasicDataReportForm';
import PrimaryAccountingDocReportForm from '../ReportCreationForm/PrimaryAccountingDocReportForm';
import VatReportForm from '../ReportCreationForm/VatReportForm';
import SalaryReportForm from '../ReportCreationForm/SalaryReportForm';
import TaxesReportForm from '../ReportCreationForm/TaxesReportForm';
import FiledAccountingReportsForm from '../ReportCreationForm/FiledAccountingReportsForm';
import ClosingMonthReportForm from '../ReportCreationForm/ClosingMonthReportForm';
import AdditionalServicesReportForm from '../ReportCreationForm/AdditionalServicesReportForm';

import styles from './ReportEditModal.module.css';

const modalRoot = document.querySelector('#modal-editReport-root');

export default function ReportEditModal({
  reportPart,
  text,
  onClose,
  showMessage,
}) {
  const [fetchUpdateReport] = useFetchUpdateReportMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const companyReport = useSelector(getCompanyReport);
  const [newGeneralInfo, setNewGeneralInfo] = useState(
    getReportData(companyReport, 'generalInfo'),
  );
  const [newPrimeAccDocInfo, setPrimeAccDocInfo] = useState(
    getReportData(companyReport, 'primeAccDocInfo'),
  );
  const [newVatInfo, setVatInfo] = useState(
    getReportData(companyReport, 'vatInfo'),
  );
  const [newSalaryInfo, setSalaryInfo] = useState(
    getReportData(companyReport, 'salaryInfo'),
  );
  const [newTaxInfo, setTaxInfo] = useState(
    getReportData(companyReport, 'taxInfo'),
  );
  const [newReportInfo, setReportInfo] = useState(
    getReportData(companyReport, 'reportsInfo'),
  );
  const [newMonthInfo, setMonthInfo] = useState(
    getReportData(companyReport, 'monthInfo'),
  );
  const [newAdditionalServicesInfo, setAdditionalServicesInfo] = useState(
    getReportData(companyReport, 'additionalServicesInfo'),
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  let component;
  switch (reportPart) {
    case 'BasicDataReport':
      component = (
        <BasicDataReportForm
          handleChange={setNewGeneralInfo}
          value={newGeneralInfo}
        />
      );
      break;
    case 'PrimaryAccountingDocReport':
      component = (
        <PrimaryAccountingDocReportForm
          handleChange={setPrimeAccDocInfo}
          value={newPrimeAccDocInfo}
        />
      );
      break;
    case 'VatReport':
      component = (
        <VatReportForm handleChange={setVatInfo} value={newVatInfo} />
      );
      break;
    case 'SalaryReport':
      component = (
        <SalaryReportForm handleChange={setSalaryInfo} value={newSalaryInfo} />
      );
      break;
    case 'TaxesReport':
      component = (
        <TaxesReportForm handleChange={setTaxInfo} value={newTaxInfo} />
      );
      break;
    case 'FiledAccountingReports':
      component = (
        <FiledAccountingReportsForm
          handleChange={setReportInfo}
          value={newReportInfo}
        />
      );
      break;
    case 'ClosingMonthReport':
      component = (
        <ClosingMonthReportForm
          handleChange={setMonthInfo}
          value={newMonthInfo}
        />
      );
      break;
    case 'AdditionalServicesReport':
      component = (
        <AdditionalServicesReportForm
          handleChange={setAdditionalServicesInfo}
          value={newAdditionalServicesInfo}
        />
      );
      break;

    default:
      component = 'ERROR';
  }

  const updateReportAndPushToStore = async updatedReport => {
    try {
      const response = await fetchUpdateReport({ token, updatedReport });
      console.log(response.data);
      dispatch(actions.updateReport(response.data));
      showMessage(response);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newReportInfo);
  const formSubmit = e => {
    e.preventDefault();
    const updatedReport = {
      reportId: companyReport.id,
      ...newGeneralInfo,
      ...newPrimeAccDocInfo,
      ...newVatInfo,
      ...newSalaryInfo,
      newTaxInfo,
      newReportInfo,
      ...newMonthInfo,
      ...newAdditionalServicesInfo,
    };
    console.log(updatedReport);
    updateReportAndPushToStore(updatedReport);
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h5>{text}</h5>
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={formSubmit}>
          <div className={styles.modalBody}>{component}</div>
          <div className={styles.modalFooter}>
            <button className="btn btn-success" type="submit">
              Редактировать отчет
            </button>
            <button
              className="btn btn-secondary"
              onClick={onClose}
              type="button"
            >
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot,
  );
}
