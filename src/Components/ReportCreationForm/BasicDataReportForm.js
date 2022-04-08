import { connect } from "react-redux";
import * as actions from '../../redux/createNewReport/newReport-action'


function BasicDataReportForm({ handleChange, value }) {
  const newGeneralInfo = value;

  const handleReportItem = e => {
    const value = e.target.value;
    const reportItemId = e.target.id;
    newGeneralInfo[reportItemId] = value;
    handleChange(newGeneralInfo);
  };
  return (
    <div>
      <h5>Общая информация</h5>
      <div>
        <label>
          Месяц
          <input
            type="month"
            min="2022-03"
            max="2023-12"
            onChange={handleReportItem}
            id="month"
          />
        </label>
      </div>

      <div>
        <label htmlFor="taxationSystems">Система налогообложения</label>
        <select
          name="taxationSystems"
          id="taxSystem"
          onChange={handleReportItem}
          required
        >
          <option value="Общая система С НДС">Общая система С НДС</option>
          <option value="Общая система БЕЗ НДС">Общая система БЕЗ НДС</option>
          <option value="Единый налог 1 группа">Единый налог 1 группа</option>
          <option value="Единый налог 2 группа">Единый налог 2 группа</option>
          <option value="Единый налог 3 группа БЕЗ НДС">
            Единый налог 3 группа БЕЗ НДС
          </option>
          <option value="Единый налог 3 группа С НДС">
            Единый налог 3 группа С НДС
          </option>
          <option value="Единый налог 4 группа">Единый налог 4 группа</option>
        </select>
      </div>

      <div>
        <label>
          Количество наемных сотрудников на начало месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'emplBeginMonth'}
            type="text"
            name="employeeBeginingMonth"
            title="Только цифры"
            required
          />
        </label>
      </div>

      <div>
        <label>
          Количество наемных сотрудников на конец месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'emplEndMonth'}
            type="text"
            title="Только цифры"
          />
        </label>
      </div>

      <div>
        <p>День выплаты зарплаты:</p>
        <label>
          за первую половину месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'firstSalaryDay'}
            type="text"
            name="prepaid"
            title="Только цифры"
            required
          />
        </label>
        <label>
          за вторую половину месяца
          <input
            // className={style.input__field}
            onChange={handleReportItem}
            id={'secondSalaryDay'}
            type="text"
            name="salary"
            title="Только цифры"
            required
          />
        </label>
      </div>
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     value: state.BasicDataReportForm
//   }
// }

const mapDispatchToProps = dispatch => ({
  handleReportItem: e => dispatch(actions.generalInfo(e))
})

export default connect(null, mapDispatchToProps)(BasicDataReportForm) ;
