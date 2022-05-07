import { useSelector } from 'react-redux';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import style from './Header.module.css';

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header className={style.header}>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
    </>
  );
}
