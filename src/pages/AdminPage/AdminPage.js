import { React, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchAllUsersMutation } from '../../redux/services/usersAPI';
import { useFetchAllCompaniesMutation } from '../../redux/services/companiesAPI';
import { getToken } from '../../redux/auth/auth-selectors';

import * as actions from '../../redux/users/user-action';
import * as actionsComp from '../../redux/companies/company-action';
import Container from '../../Components/Container';
import EditingUser from '../../Components/AdminComponents/Users/EditingUsers';
import EditingCompany from '../../Components/AdminComponents/Companies/EditingCompany';

const AdminPage = () => {
  const [userListRender, setUserListRender] = useState(false);
  const [companyListRender, setCompanyListRender] = useState(false);
  const [fetchAllUsers, { isLoading }] = useFetchAllUsersMutation();
  const [fetchAllCompanies] = useFetchAllCompaniesMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const sendUsersInStore = useCallback(
    response => {
      dispatch(actions.getAllUsers(response.data));
    },
    [dispatch],
  );
  const sendCompaniesInStore = useCallback(
    response => {
      dispatch(actionsComp.getAllCompanies(response.data));
    },
    [dispatch],
  );

  const getAllUsers = useCallback(async () => {
    try {
      const response = await fetchAllUsers(token);
      sendUsersInStore(response);
    } catch (error) {}
  }, [token, fetchAllUsers, sendUsersInStore]);

  const getAllCompanies = useCallback(async () => {
    try {
      const response = await fetchAllCompanies(token);
      sendCompaniesInStore(response);
    } catch (error) {}
  }, [token, fetchAllCompanies, sendCompaniesInStore]);

  useEffect(() => {
    getAllUsers();
    getAllCompanies();
  }, [getAllUsers, getAllCompanies]);

  const btnUserHandler = () => {
    if (userListRender) {
      setUserListRender(false);
    } else {
      setUserListRender(true);
      setCompanyListRender(false);
    }
  };

  const btnCompanyHandler = () => {
    if (companyListRender) {
      setCompanyListRender(false);
    } else {
      setCompanyListRender(true);
      setUserListRender(false);
    }
  };

  return (
    <>
      <Container>
        <NavLink to="/main">Назад</NavLink>
        <div>
          <button onClick={btnUserHandler}>Пользователи</button>
          <button onClick={btnCompanyHandler}>Компании</button>
        </div>
        {userListRender && <EditingUser />}
        {companyListRender && <EditingCompany />}
      </Container>
    </>
  );
};

export default AdminPage;
