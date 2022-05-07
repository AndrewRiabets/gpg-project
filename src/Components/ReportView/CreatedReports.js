import { React, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFetchCompanyReportsMutation } from '../../redux/services/reportsAPI';
import { getCompanyReports } from '../../redux/reports/reports-selector';
import { getToken } from '../../redux/auth/auth-selectors';
import * as actions from '../../redux/reports/reports-action';

import localStorageKeys from '../../helpers/localStorageKeys';

import ReportCreationModal from '../ReportCreationModal/ReportCreationModal';
import style from './ReportView.module.css';

function CreatedReports({ companyName }) {
  const [fetchCompanyReports] = useFetchCompanyReportsMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const companyReports = useSelector(getCompanyReports);
  const [showModal, setShowModal] = useState(false);

  const onModalToggle = () => {
    if (showModal) {
      localStorageKeys.forEach(e => localStorage.removeItem(e));
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const showMessage = response => {
    if (response.data) {
      toast.success(`Отчет успешно создан`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
    if (response.error) {
      toast.error(`${response.error.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  const sendCompanyReportsInStore = useCallback(
    response => {
      dispatch(actions.getCompanyReports(response.data));
    },
    [dispatch],
  );

  const getAllCompanyReports = useCallback(async () => {
    try {
      const response = await fetchCompanyReports({ token, companyName });
      sendCompanyReportsInStore(response);
    } catch (error) {
      console.log(error);
    }
  }, [token, companyName, fetchCompanyReports, sendCompanyReportsInStore]);

  useEffect(() => {
    getAllCompanyReports();
  }, [getAllCompanyReports]);

  return (
    <>
      <ToastContainer />
      <h2 className={style.companyName}>{companyName}</h2>
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
          {!companyReports.length > 0 ? (
            <h3>У компании еще нет отчетов! Создайте новый</h3>
          ) : (
            companyReports.map(el => (
              <li className={style.monthReportsSetItem} key={el.id}>
                <NavLink
                  state={{ reportId: el.id }}
                  key={el.id}
                  to={{
                    pathname: `/report`,
                  }}
                  className={style.monthReportsSetLink}
                >
                  {new Date(el.date).toLocaleString('ru', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </NavLink>
              </li>
            ))
          )}
        </ul>

        {showModal && (
          <ReportCreationModal
            nameCompany={companyName}
            onClose={onModalToggle}
            showMessage={showMessage}
          />
        )}
      </div>
    </>
  );
}

export default CreatedReports;
