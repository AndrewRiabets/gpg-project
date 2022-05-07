import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserRole } from '../../redux/auth/auth-selectors';

import style from './Header.module.css';

const Navigation = () => {
  const userRole = useSelector(getUserRole);
  return (
    <div>
      <NavLink to={{ pathname: '/main' }} className={style.link}>
        Главная
      </NavLink>
      {userRole === 'администратор' && (
        <NavLink to={{ pathname: `/admin` }} className={style.link}>
          Адиминистрирование
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
