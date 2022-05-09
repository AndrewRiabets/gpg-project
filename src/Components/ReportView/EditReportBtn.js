import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReportEditModal from '../ReportEditModal/ReportEditModal';

export default function EditReportBtn({ reportPart, text }) {
  // console.log(reportPart);
  const [showModal, setShowModal] = useState(false);

  const onModalToggle = () => {
    return showModal ? setShowModal(false) : setShowModal(true);
  };

  const showMessage = response => {
    if (response.data) {
      console.log('success');
      toast.success(`Отчет успешно изменен`, {
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
      <div>
        <button type="button" onClick={onModalToggle}>
          Редактировать
        </button>
      </div>
      {showModal && (
        <ReportEditModal
          reportPart={reportPart}
          text={text}
          onClose={onModalToggle}
          showMessage={showMessage}
        />
      )}
    </div>
  );
}
