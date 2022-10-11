import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import byrnesResume from "../../assets/cover/Byrnesresume.pdf";

function ResumeSolo() {

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <ModalHeader closeButton>PDF Resumé</ModalHeader>
        <ModalBody>

          <object width="100%" height="800" data={byrnesResume} type="application/pdf">Download PDF resumé with this link
          </object>

          <button type="button">Close</button>
        </ModalBody>
      </div>
    </div>
  );
}

export default ResumeSolo;