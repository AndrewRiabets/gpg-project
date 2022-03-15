import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ReportCreationModal.module.css';

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
  console.log(onClose);
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

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div className={styles.scroll}>
          <h1>{nameCompany}</h1>
          <BasicDataReportForm />
          <PrimaryAccountingDocReportForm />
          <VatReportForm />
          <SalaryReportForm />
          <TaxesReportForm />
          <FiledAccountingReportsForm />
          <ClosingMonthReportForm />
          <AdditionalServicesReportForm />
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
