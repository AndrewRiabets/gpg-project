import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { authOperations } from '../../redux/auth';

import style from './Header.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={style.container}>
      <span className={style.name}>Добро пожаловать, {name} </span>
      <button
        className="btn btn-danger"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </div>
  );
}
