import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserRole } from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const userRole = useSelector(getUserRole);
  return (
    <div>
      <NavLink
        to={{ pathname: '/main' }}
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Главная
      </NavLink>
      {userRole === 'администратор' && (
        <NavLink
          to={{ pathname: `/admin` }}
          style={styles.link}
          activestyle={styles.activeLink}
        >
          Адиминистрирование
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
