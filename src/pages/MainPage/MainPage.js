import { React, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchCurrntUserCompaniesMutation } from '../../redux/services/companiesAPI';
import { getUserCompanies } from '../../redux/companies/company-selector';
import { getToken } from '../../redux/auth/auth-selectors';
import * as actions from '../../redux/companies/company-action';

import Container from '../../Components/Container';
import CreatedReports from '../../Components/ReportView/CreatedReports';

import style from './MainPage.module.css';

const MainPage = () => {
  const [isFetchingCompanies, setIsFetchingCompanies] = useState(false);
  const [fetchUserCompanies] = useFetchCurrntUserCompaniesMutation();
  const [companyName, setCompanyName] = useState('');
  const [companyListRender, setCompanyListRender] = useState(false);
  const userCompanies = useSelector(getUserCompanies);
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const getAllUserCompanies = useCallback(async () => {
    try {
      setIsFetchingCompanies(true);
      const response = await fetchUserCompanies(token);
      setIsFetchingCompanies(false);
      dispatch(actions.getUserCompanies(response.data));
    } catch (error) {}
  }, [token, dispatch, fetchUserCompanies]);

  useEffect(() => {
    getAllUserCompanies();
  }, [getAllUserCompanies]);

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
      {!isFetchingCompanies && (
        <Container>
          <div className={style.mainPageContainer}>
            {userCompanies.length > 0 && (
              <h1 className={style.mainPageTitle}>Выбирете компанию</h1>
            )}
            <ul className={style.companyList}>
              {!userCompanies.length > 0 ? (
                <h3>За вами не закреплено ни одной компании!</h3>
              ) : (
                userCompanies.map(el => (
                  <li key={el.id} className={style.companyListItem}>
                    <button
                      type="button"
                      onClick={btnCompanyHandler}
                      className={style.companyButton}
                    >
                      {el.name}
                    </button>
                  </li>
                ))
              )}
            </ul>
            {companyListRender && <CreatedReports companyName={companyName} />}
          </div>
        </Container>
      )}
    </>
  );
};

export default MainPage;
