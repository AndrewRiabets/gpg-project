import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllCompanies } from '../../../redux/companies/company-selector';
// import { useFetchAllUsersMutation } from '../../../redux/services/usersAPI';
// import { getToken } from '../../../redux/auth/auth-selectors';

const CompaniesList = () => {
  //   const [fetchAllUsers, { data }] = useFetchAllUsersMutation();
  const allCompanies = useSelector(getAllCompanies);
  //   const token = useSelector(getToken);
  //   const dispatch = useDispatch();

  //   const getAllusers = useCallback(async () => {
  //     try {
  //       const response = await fetchAllUsers(token);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [token, fetchAllUsers]);

  //   useEffect(() => {
  //     getAllusers();
  //   }, [getAllusers]);
  //   console.log(data);

  return (
    <div>
      <ul>
        {allCompanies.map(el => (
          <li key={el.id}>
            <button>{el.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesList;
