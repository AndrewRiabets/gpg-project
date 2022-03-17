import { useState } from 'react';
import uniqid from 'uniqid';

function TaxesReportForm() {
  const [list, setList] = useState([1]);

  const addlistCounter = e => {
    const newListAdd = list.concat(list[list.length - 1] + 1);
    list.length <= 5 && setList(newListAdd);
  };

  const delistCounter = e => {
    console.log(list.length);
    const newListDel = list.slice(0, -1);
    list.length >= 2 && setList(newListDel);
  };

  console.log(list.length);

  return (
    <div>
      <h5>Уплаченные налоги</h5>

      <div>
        <ul>
          <p>Список налогов оплачиваемых компанией в текущем месяце</p>
          {list.map(item => (
            <li key={uniqid()}>
              <input key={uniqid()} type="text" name="taxName"></input>
              <input
                key={uniqid()}
                type="date"
                min="2022-03-01"
                max="2024-12-31"
                // className={style.input__field}
                // onChange={handleInputChange}
                // value={month}
              />
            </li>
          ))}
        </ul>

        <div>
          <button type="button" onClick={addlistCounter}>
            Добавить поле
          </button>
          <button type="button" onClick={delistCounter}>
            Удалить поле
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaxesReportForm;
