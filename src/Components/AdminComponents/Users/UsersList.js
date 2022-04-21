import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getAllUsers } from '../../../redux/users/user-selector';

import UserCompaniesList from './UserCompaniesList';

import style from './Users.module.css';

const UsersList = () => {
  const [userId, setUserId] = useState('');
  const [userCompaniesListRender, setUserCompaniesListRender] = useState(false);

  const allUsers = useSelector(getAllUsers);

  const btnCompanyToggle = e => {
    setUserId(`${e.target.value}`);
  };

  const btnCompanyHandler = e => {
    btnCompanyToggle(e);
    return userCompaniesListRender && userId === e.target.value
      ? setUserCompaniesListRender(false)
      : setUserCompaniesListRender(true);
  };

  return (
    <div>
      <ul className={style.usersList}>
        {allUsers.map(el => (
          <li key={el.id} className={style.usersListItem}>
            <button
              value={el.id}
              className={style.userButton}
              onClick={btnCompanyHandler}
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
      {userCompaniesListRender && <UserCompaniesList userId={userId} />}
    </div>
  );
};

export default UsersList;
