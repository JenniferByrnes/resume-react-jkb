import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardHeader, CardBody } from 'reactstrap';
import byrnesResume from "../../assets/cover/Byrnesresume.pdf";

function Resume() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <h1 id="resume">My Resumé</h1>
      <div>
        <a href="https://docs.google.com/document/d/1xlJVHfr4bVYev0StOZ8vOCXq7LtwUyQ-2tv2KReKpdY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View resumé online with this link</a>
      </div>
      <div>

        <a href="#resumePDF" onClick={toggle}
        >Download PDF resumé with this link</a>

        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <object width="100%" height="800" data={byrnesResume} type="application/pdf">Download PDF resumé with this link
            </object>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className="flex-wrap justify-center">
        <div>
          <div>Front-end Proficiencies</div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>PowerBuilder, PeopleSoft</li>
          </ul>
        </div>
        <div>
          <div>Back-end Proficiencies</div>
          <ul>
            <li>HTML</li>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL, MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>C, Unix, PL1, COBOL, Ingres</li>
          </ul>
        </div>
      </div>
    </Container >
  )
}

export default Resume;