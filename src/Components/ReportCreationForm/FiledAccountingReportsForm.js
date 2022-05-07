import { useEffect, useState } from 'react';
import reportItemsList from '../../helpers/reportItemslist';
import uniqid from 'uniqid';

function FiledAccountingReportsForm({ handleChange, value }) {
  const [list, setList] = useState(
    !value ? [1] : Object.keys(value).map(el => Number(el)),
  );
  const [mountStatus, setMountStatus] = useState(false);
  const reportsInfo = value || reportItemsList.reportsInfo;

  useEffect(() => {
    setMountStatus(true);
    localStorage.setItem('1-reportTitle', '');
    localStorage.setItem('1-reportPayDate', '');
  }, [mountStatus]);

  const handleReportItem = e => {
    let value;
    const valueValidation = e.target.value;
    if (valueValidation.length === 10 && valueValidation.includes(202)) {
      value = new Date(e.target.value);
    } else {
      value = e.target.value;
    }
    const reportItemId = e.target.id;
    const data = e.target.dataset.report;
    const taxSample = { reportTitle: '', reportPayDate: '' };

    for (const key in reportsInfo) {
      if (key === data) {
        localStorage.setItem(`${key}-${reportItemId}`, value);
        reportsInfo[key][reportItemId] = value;
        handleChange(reportsInfo);
      }
      if (!Object.keys(reportsInfo).includes(data)) {
        reportsInfo[data] = { ...taxSample, [reportItemId]: value };
        handleChange(reportsInfo);
      }
    }
  };

  const addlistCounter = () => {
    if (list.length <= 5) {
      const newListAdd = list.concat(list[list.length - 1] + 1);
      setList(newListAdd);
      localStorage.setItem(`${list.length + 1}-reportTitle`, '');
      localStorage.setItem(`${list.length + 1}-reportPayDate`, '');
    }
  };

  const deleteCounter = () => {
    if (list.length >= 2) {
      localStorage.removeItem(`${list.length}-reportTitle`);
      localStorage.removeItem(`${list.length}-reportPayDate`);
      delete reportsInfo[list.length];

      const newListDel = list.slice(0, -1);
      setList(newListDel);
    }
  };

  return (
    <div>
      <h5>Поданные отчеты</h5>

      <div>
        <ul>
          <p>Список подаваемых отчетов в текущем месяце</p>
          <p>ДАТА получения получения квитанции №2</p>
          {list.map(item => (
            <li key={uniqid()}>
              <input
                key={uniqid()}
                type="text"
                onChange={handleReportItem}
                id="reportTitle"
                data-report={item}
                {...(value && value[item]
                  ? {
                      defaultValue: `${value[item].reportTitle}`,
                    }
                  : {
                      defaultValue: `${window.localStorage.getItem(
                        `${item}-reportTitle`,
                      )}`,
                    })}
              ></input>
              <input
                key={uniqid()}
                type="date"
                min="2022-03-01"
                max="2024-12-31"
                onChange={handleReportItem}
                id="reportPayDate"
                data-report={item}
                {...(value && value[item] && value[item].reportPayDate
                  ? {
                      defaultValue: `${value[item].reportPayDate.substr(
                        0,
                        10,
                      )}`,
                    }
                  : {
                      defaultValue: `${window.localStorage.getItem(
                        `${item}-reportPayDate`,
                      )}`,
                    })}
                // className={style.input__field}
              />
            </li>
          ))}
        </ul>
        <div>
          <button type="button" onClick={addlistCounter}>
            Добавить поле
          </button>
          <button type="button" onClick={deleteCounter}>
            Удалить поле
          </button>
        </div>
      </div>
    </div>
  );
}
export default FiledAccountingReportsForm;
