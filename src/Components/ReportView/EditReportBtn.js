import { useState } from 'react';

import ReportEditModal from '../ReportEditModal/ReportEditModal';

export default function EditReportBtn({ reportPart, text }) {
  // console.log(reportPart);
  const [showModal, setShowModal] = useState(false);
  const onModalToggle = () => {
    return showModal ? setShowModal(false) : setShowModal(true);
  };
  return (
    <div>
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
        />
      )}
    </div>
  );
}
