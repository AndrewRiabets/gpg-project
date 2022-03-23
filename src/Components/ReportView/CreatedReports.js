import { React, Suspense, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';

import ReportCreationModal from '../ReportCreationModal/ReportCreationModal';
import style from './ReportView.module.css';

function CreatedReports({ name }) {
  const [showModal, setShowModal] = useState(false);

  const onModalToggle = e => {
    return showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <>
      <h2 className={style.companyName}>{name}</h2>
      <div className={style.createReportBtnContainer}>
        <button
          type="button"
          onClick={onModalToggle}
          className={style.createReportBtn}
        >
          Создать новый отчет
        </button>
      </div>
      <div className={style.reportsListContainer}>
        <h3 className={style.reportsListTitle}>Редактировать отчет</h3>
        <ul className={style.monthReportsSet}>
          <li className={style.monthReportsSetItem}>
            <NavLink to={{ pathname: `/report` }}>
              <button className={style.monthReportsSetLink}>Март 2022</button>
            </NavLink>
          </li>

          <li className={style.monthReportsSetItem}>
            <NavLink to={{ pathname: `/report` }}>
              <button className={style.monthReportsSetLink}>
                Февраль 2022
              </button>
            </NavLink>
          </li>

          <li className={style.monthReportsSetItem}>
            <NavLink to={{ pathname: `/report` }}>
              <button className={style.monthReportsSetLink}>Январь 2022</button>
            </NavLink>
          </li>
        </ul>

        {showModal && (
          <ReportCreationModal nameCompany={name} onClose={onModalToggle} />
        )}
      </div>
    </>
  );
}

export default CreatedReports;
