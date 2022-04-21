import { React, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UsersList from './UsersList';
import CreateUser from './CreateUser';

import style from './Users.module.css';

const EditingUser = () => {
  const [userCreateFormToggle, setCreateFormToggle] = useState(false);

  const createUser = () => {
    userCreateFormToggle
      ? setCreateFormToggle(false)
      : setCreateFormToggle(true);
  };

  const showMessage = response => {
    console.log(response);
    if (response.data) {
      toast.success(`Пользоватлеь ${response.data.name} успешно создан`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
    if (response.error) {
      toast.error(`${response.error.data.message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className={style.createUserBtnPCont}>
        <button onClick={createUser} className={style.createUserBtn}>
          Создать пользователя{' '}
        </button>
      </div>
      {userCreateFormToggle && (
        <div>
          <CreateUser
            onToggleForm={setCreateFormToggle}
            showMessage={showMessage}
          />
        </div>
      )}
      <UsersList />
    </div>
  );
};

export default EditingUser;
