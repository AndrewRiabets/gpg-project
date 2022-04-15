import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { getToken } from '../../../redux/auth/auth-selectors';
import { getAllUsers } from '../../../redux/users/user-selector';
import { useCreateCompanyMutation } from '../../../redux/services/companiesAPI';
import * as actions from '../../../redux/companies/company-action';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(3).max(30).trim().required('Required'),
  accountant: Yup.string().min(3).max(30),
});

const CreateUser = ({ onToggleForm, showMessage }) => {
  const [createCompany] = useCreateCompanyMutation();
  const users = useSelector(getAllUsers);
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

  const postNewCompany = useCallback(
    async newCompany => {
      try {
        const response = await createCompany({ token, newCompany });
        console.log(response);
        showMessage(response);
        dispatch(actions.createCompany(response.data));
        onToggleForm(false);
      } catch (error) {
        console.log(error);
      }
    },
    [token, createCompany, dispatch, onToggleForm, showMessage],
  );

  const onSubmit = data => {
    const { name, UserId } = data;

    const newCompany = {
      name,
      UserId,
    };
    postNewCompany(newCompany);

    reset({
      name: '',
      accountant: '',
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
            <h1 className="h3 mb-3 fw-normal">Введите данные новой компании</h1>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="name"
                placeholder="Наименование компании"
                {...register('name', { required: true })}
              />
              {errors.name && <p>Обязательное поле</p>}
              <label htmlFor="name">Название компании</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="accountant"
                placeholder="Ответсвенный бухгалтер"
                defaultValue={''}
                {...register('UserId')}
              >
                {users.map(el => (
                  <option key={el.id} value={el.id}>{`${el.name}`}</option>
                ))}
              </select>
              <label htmlFor="accountant">Бухгалтер</label>
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
