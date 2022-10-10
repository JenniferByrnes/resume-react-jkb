import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function ModalProject({ onClose, currentPhoto }) {
  const { name, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          <img src={require(`../../assets/projects/${index}.png`)} alt="selected project" />
          <p>{description}</p>
          <button onClick={onClose} type="button">Close</button>
        </ModalBody>
      </div>
    </div>
  );
}

export default ModalProject;