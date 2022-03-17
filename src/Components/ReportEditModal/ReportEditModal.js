import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './ReportEditModal.module.css';

import BasicDataReportForm from '../ReportCreationForm/BasicDataReportForm';
import PrimaryAccountingDocReportForm from '../ReportCreationForm/PrimaryAccountingDocReportForm';
import VatReportForm from '../ReportCreationForm/VatReportForm';
import SalaryReportForm from '../ReportCreationForm/SalaryReportForm';
import TaxesReportForm from '../ReportCreationForm/TaxesReportForm';
import FiledAccountingReportsForm from '../ReportCreationForm/FiledAccountingReportsForm';
import ClosingMonthReportForm from '../ReportCreationForm/ClosingMonthReportForm';
import AdditionalServicesReportForm from '../ReportCreationForm/AdditionalServicesReportForm';

const modalRoot = document.querySelector('#modal-editReport-root');

export default function ReportEditModal({ reportPart, text, onClose }) {
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
      component = <BasicDataReportForm />;
      break;
    case 'PrimaryAccountingDocReport':
      component = <PrimaryAccountingDocReportForm />;
      break;
    case 'VatReport':
      component = <VatReportForm />;
      break;
    case 'SalaryReport':
      component = <SalaryReportForm />;
      break;
    case 'TaxesReport':
      component = <TaxesReportForm />;
      break;

    case 'FiledAccountingReports':
      component = <FiledAccountingReportsForm />;
      break;
    case 'ClosingMonthReport':
      component = <ClosingMonthReportForm />;
      break;
    case 'AdditionalServicesReport':
      component = <AdditionalServicesReportForm />;
      break;

    default:
      component = 'ERROR';
  }

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h5>{text}</h5>
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>
        <form>
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
