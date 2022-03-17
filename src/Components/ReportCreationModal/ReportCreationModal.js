import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
const modalRoot = document.querySelector('#modal-root');

export default function ReportCreationModal({ nameCompany, onClose }) {
  const [reportView, setReportView] = useState(false);
  const [btnReportView, setBtnReportView] = useState(true);

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

  const test = e => {
    e.preventDefault();
    console.log(e);
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div>
          <div className={styles.modalHeader}>
            <h1>{nameCompany}</h1>
            <button type="button" onClick={onClose}>
              X
            </button>
          </div>
          <form onSubmit={test}>
            <div className={styles.modalBody}>
              <BasicDataReportForm />
              <button type="button" onClick={showReportToggle}>
                {btnReportView
                  ? 'Показать весь отчет'
                  : 'Скрыть развернутый отчет'}
              </button>
              {reportView && (
                <div>
                  <PrimaryAccountingDocReportForm />
                  <VatReportForm />
                  <SalaryReportForm />
                  <TaxesReportForm />
                  <FiledAccountingReportsForm />
                  <ClosingMonthReportForm />
                  <AdditionalServicesReportForm />
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
