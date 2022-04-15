import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { getToken } from '../../../redux/auth/auth-selectors';
import { useCreateUserMutation } from '../../../redux/services/usersAPI';
import * as actions from '../../../redux/users/user-action';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(3).max(30).trim().required('Required'),
  login: Yup.string().lowercase().trim().required('Required'),
  password: Yup.string().min(6).required('Required'),
  role: Yup.string('Пользователь' | 'Администратор')
    .lowercase()
    .required('Required'),
});

const CreateUser = ({ onToggleForm, showMessage }) => {
  const [createUser] = useCreateUserMutation();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const postNewUser = useCallback(
    async newUser => {
      try {
        const response = await createUser({ token, newUser });
        showMessage(response);
        dispatch(actions.createUser(response.data));
        onToggleForm(false);
      } catch (error) {
        console.log(error);
      }
    },
    [token, createUser, dispatch, onToggleForm, showMessage],
  );

  const onSubmit = data => {
    const { name, login, password, role } = data;

    const newUser = {
      name,
      login,
      password,
      role,
    };

    postNewUser(newUser);

    reset({
      name: '',
      login: '',
      password: '',
    });
  };

  return (
    <>
      <div className="container col-xl-5 ">
        <div className="row align-items-center py-3">
          <form
            className="p-md-5 border bg-light"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="h3 mb-3 fw-normal">
              Введите данные нового пользователя
            </h1>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="name"
                //   value={email}
                //   onChange={handleChange}
                placeholder="Имя Фамилия"
                {...register('name', { required: true })}
              />
              {errors.name && <p>Обязательное поле</p>}
              <label htmlFor="name">Имя Фамилия</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="login"
                //   value={password}
                //   onChange={handleChange}
                placeholder="Логин"
                {...register('login', { required: true })}
              />
              {errors.name && <p>Обязательное поле</p>}
              <label htmlFor="login">Логин</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="password"
                //   value={password}
                //   onChange={handleChange}
                placeholder="Пароль"
                {...register('password', { required: true })}
              />
              <label htmlFor="password">Пароль</label>
              {errors.name && <p>Обязательное поле</p>}
            </div>

            <div className="form-floating mb-3">
              <select
                type="role"
                name="role"
                className="form-control"
                id="role"
                //   value={password}
                //   onChange={handleChange}
                placeholder="Role"
                {...register('role', { required: true })}
              >
                <option value="Пользователь">Пользователь</option>
                <option value="Администратор">Администратор</option>
              </select>
              {errors.name && <p>Обязательное поле</p>}
              <label htmlFor="role">Роль</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
