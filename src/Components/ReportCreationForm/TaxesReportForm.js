import { useState } from 'react';
import uniqid from 'uniqid';

function TaxesReportForm({ handleChange, value }) {
  const [list, setList] = useState([1]);

  localStorage.setItem('1-taxTitle', '');
  localStorage.setItem('1-taxPayDate', '');

  const taxInfo = value;

  const handleTaxItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    const data = e.target.dataset.tax;
    const taxSample = { taxTitle: '', taxPayDate: '' };

    for (const key in taxInfo) {
      if (key === data) {
        localStorage.setItem(`${key}-${reportItemId}`, value);
        taxInfo[key][reportItemId] = value;
        handleChange(taxInfo);
      }
      if (!Object.keys(taxInfo).includes(data)) {
        taxInfo[data] = { ...taxSample, [reportItemId]: value };
        handleChange(taxInfo);
      }
    }
  };

  const addlistCounter = e => {
    if (list.length <= 5) {
      const newListAdd = list.concat(list[list.length - 1] + 1);
      setList(newListAdd);
      localStorage.setItem(`${list.length + 1}-taxTitle`, '');
      localStorage.setItem(`${list.length + 1}-taxPayDate`, '');
    }
  };

  const delListCounter = () => {
    if (list.length >= 2) {
      localStorage.removeItem(`${list.length}-taxTitle`);
      localStorage.removeItem(`${list.length}-taxPayDate`);
      delete taxInfo[list.length];
      const newListDel = list.slice(0, -1);
      setList(newListDel);
    }
  };

  return (
    <div>
      <h5>Уплаченные налоги</h5>

      <div>
        <ul>
          <p>Список налогов оплачиваемых компанией в текущем месяце</p>
          {list.map(item => (
            <li key={uniqid()}>
              <input
                key={uniqid()}
                onChange={handleTaxItem}
                id="taxTitle"
                type="text"
                name="taxName"
                data-tax={item}
                required
                value={window.localStorage.getItem(`${item}-taxTitle`)}
              />
              <input
                key={uniqid()}
                type="date"
                min="2022-03-01"
                max="2024-12-31"
                // className={style.input__field}
                onChange={handleTaxItem}
                id="taxPayDate"
                data-tax={item}
                value={window.localStorage.getItem(`${item}-taxPayDate`)}
              />
            </li>
          ))}
        </ul>

        <div>
          <button type="button" onClick={addlistCounter}>
            Добавить поле
          </button>
          <button type="button" onClick={delListCounter}>
            Удалить поле
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaxesReportForm;
