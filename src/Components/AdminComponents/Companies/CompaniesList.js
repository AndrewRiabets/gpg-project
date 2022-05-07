import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllCompanies } from '../../../redux/companies/company-selector';

import ChangeAccounter from './ChangeAccounter';

import style from './Companies.module.css';
import pencil from '../../../Images/pencil.svg';
import bin from '../../../Images/bin.svg';

const CompaniesList = () => {
  const [companyIdToEdit, setCompanyIdToEdit] = useState('');
  const [changeAccounterForm, setChangeAccounterForm] = useState(false);
  const allCompanies = useSelector(getAllCompanies);
  const [companyName, setCompanyName] = useState(false);

  const showMessage = response => {
    if (response.data) {
      console.log('data saccess');
      toast.success(`Бухгалтер ${companyName} успешно изменен`, {
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

  const showChangeAccounterForm = () => {
    changeAccounterForm
      ? setChangeAccounterForm(false)
      : setChangeAccounterForm(true);
  };

  const showEditBtn = e => {
    if (companyIdToEdit === e.target.id) {
      setCompanyIdToEdit('');
      setCompanyName('');
    } else {
      setCompanyIdToEdit(e.target.id);
      setCompanyName(e.target.value);
    }
  };

  return (
    <div>
      <ToastContainer />
      <ul className={style.companiesList}>
        {allCompanies.map(el => (
          <li key={el.id} className={style.companiesListItem}>
            <div>
              <button
                id={el.id}
                className={style.companyButton}
                onClick={showEditBtn}
                value={el.name}
              >
                {el.name}
              </button>
            </div>
            {companyIdToEdit === el.id && (
              <div className={style.editBtnsCont}>
                <button>
                  <img
                    src={pencil}
                    alt="pencil"
                    onClick={showChangeAccounterForm}
                  ></img>
                </button>
                <button>
                  <img src={bin} alt="bin"></img>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {changeAccounterForm && (
        <ChangeAccounter
          companyName={companyName}
          showMessage={showMessage}
          showChangeAccounterForm={setChangeAccounterForm}
        />
      )}
    </div>
  );
};

export default CompaniesList;
