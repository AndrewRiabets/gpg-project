import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import Container from '../../Components/Container';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'login':
        return setLogin(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ login, password }));
    // setLogin('');
    // setPassword('');
  };

  return (
    <Container>
      <div className="container col-xl-5 py-5">
        <div className="row align-items-center py-5">
          <form
            className="p-md-5 border bg-light"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h1 className="h3 mb-3 fw-normal">Введите логин и пароль</h1>
            <div className="form-floating mb-3">
              <input
                type="login"
                name="login"
                className="form-control"
                id="floatingInput"
                value={login}
                onChange={handleChange}
                placeholder="login"
              />
              <label htmlFor="floatingInput">Логин</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Пароль</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
}
