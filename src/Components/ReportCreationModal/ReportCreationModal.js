import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from '../../redux/auth/auth-selectors';
import { getCompanyReport } from '../../redux/reports/reports-selector';
import { useCreateReportMutation } from '../../redux/services/reportsAPI';
import * as actions from '../../redux/reports/reports-action';
// import 'bootstrap/dist/css/bootstrap.min.css';

import BasicDataReportForm from '../ReportCreationForm/BasicDataReportForm';
import PrimaryAccountingDocReportForm from '../ReportCreationForm/PrimaryAccountingDocReportForm';
import VatReportForm from '../ReportCreationForm/VatReportForm';
import SalaryReportForm from '../ReportCreationForm/SalaryReportForm';
import TaxesReportForm from '../ReportCreationForm/TaxesReportForm';
import FiledAccountingReportsForm from '../ReportCreationForm/FiledAccountingReportsForm';
import ClosingMonthReportForm from '../ReportCreationForm/ClosingMonthReportForm';
import AdditionalServicesReportForm from '../ReportCreationForm/AdditionalServicesReportForm';
import reportItemsList from '../../helpers/reportItemslist';

import styles from './ReportCreationModal.module.css';

const modalRoot = document.querySelector('#modal-root');
const {
  generalInfo,
  primeAccDocInfo,
  vatInfo,
  salaryInfo,
  taxInfo,
  reportsInfo,
  monthInfo,
  additionalServicesInfo,
} = reportItemsList;

export default function ReportCreationModal({
  nameCompany,
  onClose,
  showMessage,
}) {
  const [reportView, setReportView] = useState(false);
  const [btnReportView, setBtnReportView] = useState(true);
  const [newGeneralInfo, setNewGeneralInfo] = useState(generalInfo);
  const [newPrimeAccDocInfo, setPrimeAccDocInfo] = useState(primeAccDocInfo);
  const [newVatInfo, setVatInfo] = useState(vatInfo);
  const [newSalaryInfo, setSalaryInfo] = useState(salaryInfo);
  const [newTaxInfo, setTaxInfo] = useState(taxInfo);
  const [newReportInfo, setReportInfo] = useState(reportsInfo);
  const [newMonthInfo, setMonthInfo] = useState(monthInfo);
  const [newAdditionalServicesInfo, setAdditionalServicesInfo] = useState(
    additionalServicesInfo,
  );

  const [createReport] = useCreateReportMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  dispatch(actions.getReportById([]));

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {}, [newGeneralInfo]);

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

  const showReportToggle = () => {
    reportView ? setReportView(false) : setReportView(true);
    btnReportView ? setBtnReportView(false) : setBtnReportView(true);
  };

  const postNewReport = useCallback(
    async newReport => {
      try {
        const response = await createReport({ token, newReport });
        showMessage(response);
        response.data && dispatch(actions.addCompanyReports(response.data));
        response.data && onClose();
      } catch (error) {
        console.log(error);
      }
    },
    [token, dispatch, showMessage, onClose, createReport],
  );

  const formSubmit = e => {
    e.preventDefault();
    const newReport = {
      nameCompany,
      ...newGeneralInfo,
      ...newPrimeAccDocInfo,
      ...newVatInfo,
      ...newSalaryInfo,
      newTaxInfo,
      newReportInfo,
      ...newMonthInfo,
      ...newAdditionalServicesInfo,
    };
    postNewReport(newReport);
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div>
          <div className={styles.modalHeader}>
            <h1>{nameCompany}</h1>
            <button
              type="button"
              onClick={onClose}
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={formSubmit}>
            <div className={styles.modalBody}>
              <BasicDataReportForm handleChange={setNewGeneralInfo} />
              <button type="button" onClick={showReportToggle}>
                {btnReportView
                  ? 'Показать весь отчет'
                  : 'Скрыть развернутый отчет'}
              </button>
              {reportView && (
                <div>
                  <PrimaryAccountingDocReportForm
                    handleChange={setPrimeAccDocInfo}
                  />
                  {generalInfo.taxSystem.includes('С НДС') && (
                    <VatReportForm handleChange={setVatInfo} />
                  )}
                  <SalaryReportForm handleChange={setSalaryInfo} />
                  <TaxesReportForm handleChange={setTaxInfo} />
                  <FiledAccountingReportsForm handleChange={setReportInfo} />
                  <ClosingMonthReportForm handleChange={setMonthInfo} />
                  <AdditionalServicesReportForm
                    handleChange={setAdditionalServicesInfo}
                  />
                </div>
              )}
            </div>
            <div className={styles.modalFooter}>
              <button className="btn btn-success" type="submit">
                Создать отчет
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
