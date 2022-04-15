import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authOperations from '../../redux/auth/auth-operations';
import Container from '../../Components/Container';

const FormSchema = Yup.object().shape({
  login: Yup.string().lowercase().trim().required('Это обязательное поле'),
  password: Yup.string().min(6).required('Это обязательное поле'),
});

export default function AuthPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async data => {
    const { login, password } = data;

    const { payload } = await dispatch(
      authOperations.logIn({ login, password }),
    );

    payload
      ? toast.error(`${payload}`, {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        })
      : toast.error(`Что-то пошло не так(`, {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        });
    reset();
  };

  return (
    <Container>
      <ToastContainer />
      <div className="container col-xl-5 py-5">
        <div className="row align-items-center py-5">
          <form
            className="p-md-5 border bg-light"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="h3 mb-3 fw-normal">Введите логин и пароль</h1>
            <div className="form-floating mb-3">
              <input
                type="login"
                name="login"
                className="form-control"
                id="floatingInput"
                {...register('login', { required: true })}
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
                {...register('password', { required: true })}
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
