import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFetchSelectedUserCompaniesMutation } from '../../../redux/services/companiesAPI';
import { getToken } from '../../../redux/auth/auth-selectors';

import style from './Users.module.css';

const UserCompaniesList = ({ userId }) => {
  const [fetchSelectedCompanies] = useFetchSelectedUserCompaniesMutation();
  const [userCompaniesList, setUserCompaniesList] = useState([]);
  const token = useSelector(getToken);

  const getAllUserCompanies = useCallback(async () => {
    try {
      const response = await fetchSelectedCompanies({ token, userId });
      setUserCompaniesList(response.data);
    } catch (error) {}
  }, [token, fetchSelectedCompanies, userId]);

  useEffect(() => {
    getAllUserCompanies();
  }, [getAllUserCompanies]);

  return (
    <>
      <div>
        {userCompaniesList.length > 0 && (
          <h3 className={style.companyListTitle}>Выбирете компанию</h3>
        )}
        <ul className={style.companiesList}>
          {!userCompaniesList.length > 0 ? (
            <h3 className={style.companyListTitle}>
              За бухгалтером не закреплено ни одной компании!
            </h3>
          ) : (
            userCompaniesList.map(el => (
              <li key={el.id} className={style.companiesListItem}>
                <button
                  type="button"
                  //   onClick={btnCompanyHandler}
                  className={style.companyButton}
                >
                  {el.name}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
export default UserCompaniesList;
