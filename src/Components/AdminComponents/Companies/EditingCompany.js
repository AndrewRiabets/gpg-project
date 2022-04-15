import { React, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CreateCompany from './CreateCompany';
import CompaniesList from './CompaniesList';
// import UsersList from './UsersList';

const EditingCompany = () => {
  const [userCreateFormToggle, setCreateFormToggle] = useState(false);

  const createCompany = () => {
    userCreateFormToggle
      ? setCreateFormToggle(false)
      : setCreateFormToggle(true);
  };

  const showMessage = response => {
    if (response.data) {
      console.log('success');
      toast.success(`Компания ${response.data.name} успешно создана`, {
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
      <button onClick={createCompany}>Создать компанию</button>
      {userCreateFormToggle && (
        <div>
          <CreateCompany
            onToggleForm={setCreateFormToggle}
            showMessage={showMessage}
          />
        </div>
      )}
      <CompaniesList />
    </div>
  );
};

export default EditingCompany;
