import { React, useState } from 'react';

import CreatedReports from '../../Components/ReportView/CreatedReports';

const MainPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyListRender, setCompanyListRender] = useState(false);

  const btnCompanyToggle = e => {
    setCompanyName(`${e.target.textContent}`);
  };

  const btnCompanyHandler = e => {
    btnCompanyToggle(e);
    return companyListRender && companyName === e.target.textContent
      ? setCompanyListRender(false)
      : setCompanyListRender(true);
  };
  return (
    <>
      <h1>Выбирете компанию</h1>

      <ul>
        <li>
          <button type="button" onClick={btnCompanyHandler}>
            Рога и копыта 1
          </button>
        </li>
        <li>
          <button type="button" onClick={btnCompanyHandler}>
            Рога и копыта 2
          </button>
        </li>
        <li>
          <button type="button" onClick={btnCompanyHandler}>
            Рога и копыта 3
          </button>
        </li>
        {companyListRender && <CreatedReports name={companyName} />}
      </ul>
    </>
  );
};

export default MainPage;
