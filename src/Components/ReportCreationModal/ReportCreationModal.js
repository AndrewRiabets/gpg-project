import React, { Component, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './ReportCreationModal.module.css';
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

export default function ReportCreationModal({ nameCompany, onClose }) {
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

  const showReportToggle = e => {
    reportView ? setReportView(false) : setReportView(true);
    btnReportView ? setBtnReportView(false) : setBtnReportView(true);
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(newGeneralInfo);
    console.log(newPrimeAccDocInfo);
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
              <BasicDataReportForm
                handleChange={setNewGeneralInfo}
                value={newPrimeAccDocInfo}
              />
              <button type="button" onClick={showReportToggle}>
                {btnReportView
                  ? 'Показать весь отчет'
                  : 'Скрыть развернутый отчет'}
              </button>
              {reportView && (
                <div>
                  <PrimaryAccountingDocReportForm
                    handleChange={setPrimeAccDocInfo}
                    value={newPrimeAccDocInfo}
                  />
                  <VatReportForm handleChange={setVatInfo} value={newVatInfo} />
                  <SalaryReportForm
                    handleChange={setSalaryInfo}
                    value={newSalaryInfo}
                  />
                  <TaxesReportForm
                    handleChange={setTaxInfo}
                    value={newTaxInfo}
                  />
                  <FiledAccountingReportsForm
                    handleChange={setReportInfo}
                    value={newReportInfo}
                  />
                  <ClosingMonthReportForm
                    handleChange={setMonthInfo}
                    value={newMonthInfo}
                  />
                  <AdditionalServicesReportForm
                    handleChange={setAdditionalServicesInfo}
                    value={newAdditionalServicesInfo}
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
