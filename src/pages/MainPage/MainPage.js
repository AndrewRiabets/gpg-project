import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../Components/Container';
import CreatedReports from '../../Components/ReportView/CreatedReports';

import style from './MainPage.module.css';

const MainPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyListRender, setCompanyListRender] = useState(false);

  const btnCompanyToggle = e => {
    setCompanyName(`${e.target.textContent}`);
  };

  const btnCompanyHandler = e => {
    btnCompanyToggle(e);
    return companyListRender && companyName === e.target.textContent
      ? setCompanyListRender(false)
      : setCompanyListRender(true);
  };
  return (
    <>
      <Container>
        <div className={style.mainPageContainer}>
          <h1 className={style.mainPageTitle}>Выбирете компанию</h1>
          <ul className={style.companyList}>
            <li className={style.companyListItem}>
              <button
                type="button"
                onClick={btnCompanyHandler}
                className={style.companyButton}
              >
                Дженерал партнерс групп
              </button>
            </li>

            <li className={style.companyListItem}>
              <button
                type="button"
                onClick={btnCompanyHandler}
                className={style.companyButton}
              >
                Рога и копыта 2
              </button>
            </li>
            <li className={style.companyListItem}>
              <button
                type="button"
                onClick={btnCompanyHandler}
                className={style.companyButton}
              >
                Рога и копыта 3
              </button>
            </li>
          </ul>
          {companyListRender && <CreatedReports name={companyName} />}
        </div>
      </Container>
    </>
  );
};

export default MainPage;
