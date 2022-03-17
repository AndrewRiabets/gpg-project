import { useState } from 'react';
import uniqid from 'uniqid';

function FiledAccountingReportsForm() {
  const [list, setList] = useState([1]);

  const addlistCounter = e => {
    const newListAdd = list.concat(list[list.length - 1] + 1);
    list.length <= 5 && setList(newListAdd);
  };

  const delistCounter = e => {
    const newListDel = list.slice(0, -1);
    list.length >= 2 && setList(newListDel);
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
export default FiledAccountingReportsForm;
