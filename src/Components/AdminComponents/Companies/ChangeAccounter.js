import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useChangeAccounterMutation } from '../../../redux/services/companiesAPI';
import { getToken } from '../../../redux/auth/auth-selectors';
import { getAllUsers } from '../../../redux/users/user-selector';

const ChangeAccounter = ({
  companyName,
  showMessage,
  showChangeAccounterForm,
}) => {
  const [changeAccounter] = useChangeAccounterMutation();
  const users = useSelector(getAllUsers);
  const token = useSelector(getToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeCompanyAccounter = async newAccounter => {
    try {
      const response = await changeAccounter({ token, newAccounter });
      showMessage(response);
      showChangeAccounterForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = ({ userId }) => {
    const newAccounter = {
      companyName,
      userId,
    };
    changeCompanyAccounter(newAccounter);
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
              Изменить ответсвенного бухгалтера {companyName}
            </h1>

            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="accountant"
                placeholder="Ответсвенный бухгалтер"
                defaultValue={''}
                {...register('userId')}
              >
                {users.map(el => (
                  <option key={el.id} value={el.id}>{`${el.name}`}</option>
                ))}
              </select>
              <label htmlFor="accountant">Бухгалтер</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Изменить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeAccounter;
