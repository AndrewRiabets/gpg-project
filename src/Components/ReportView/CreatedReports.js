import { React, Suspense, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';

import ReportCreationModal from '../ReportCreationModal/ReportCreationModal';

function CreatedReports({ name }) {
  const [showModal, setShowModal] = useState(false);

  const onModalToggle = e => {
    return showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <>
      <h2>{name}</h2>
      <button type="button" onClick={onModalToggle}>
        Создать новый отчет
      </button>
      <ul>
        <h3>Редактировать отчет</h3>
        <li>
          <NavLink to={{ pathname: `/report` }}>Март 2022</NavLink>
        </li>

        <li>
          <NavLink to={{ pathname: `/report` }}>Февраль 2022</NavLink>
        </li>

        <li>
          <NavLink to={{ pathname: `/report` }}>Январь 2022</NavLink>
        </li>
      </ul>

      {showModal && (
        <ReportCreationModal nameCompany={name} onClose={onModalToggle} />
      )}
    </>
  );
}

export default CreatedReports;
