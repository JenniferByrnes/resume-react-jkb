import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import byrnesResume from "../../assets/cover/Byrnesresume.pdf";
import ImageAPI from "../../assets/skills/icons8-api-50.png";
import ImageApollo from "../../assets/skills/icons8-apollo-50.png";
import ImageAtlassian from "../../assets/skills/icons8-atlassian-confluence-50.png";
import ImageBootstrap from "../../assets/skills/icons8-bootstrap-50.png";

import Imagecss3 from "../../assets/skills/icons8-css3-50.png";
import Imageexpress from "../../assets/skills/icons8-express-js-50.png";
import Imagegithub from "../../assets/skills/icons8-github-50.png";
import Imagegraphql from "../../assets/skills/icons8-graphql-50.png";
import Imagehtml from "../../assets/skills/icons8-html-5-50.png";
import Imagejavascript from "../../assets/skills/icons8-javascript-50.png";
import ImageJsonWebToken from "../../assets/skills/icons8-json-web-token-50.png";
import Imagematerial from "../../assets/skills/icons8-material-ui-50.png";
import Imagemongodb from "../../assets/skills/icons8-mongodb-50.png";
import Imagemongoose from "../../assets/skills/icons8-mongoose-50.png";
import Imagemysql from "../../assets/skills/icons8-mysql-logo-50.png";
import Imagenodejs from "../../assets/skills/icons8-nodejs-50.png";
import Imagenpm from "../../assets/skills/icons8-npm-50.png";
import Imageredux from "../../assets/skills/icons8-redux-50.png";
import ImageTailwindcss from "../../assets/skills/icons8-tailwindcss-50.png";
import Imagevisual from "../../assets/skills/icons8-visual-studio-code-insides-50.png";
import Imagewebpack from "../../assets/skills/icons8-webpack-50.png";

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

        <br />
        <a href="#resumePDF" onClick={toggle}
        >Download PDF resumé with this link</a>

        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalHeader toggle={toggle}>Resume for Jennifer Byrnes</ModalHeader>
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
      <div className="my-2 text-center">
        <h1 className='mt-4'>Skill Set</h1>
      </div>
      <div className="row">
        <div className="col-md">
          <h2>Front-end Proficiencies</h2>
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
        <div className="col-md">
          <h2>Back-end Proficiencies</h2>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL, MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
            <li>REST</li>
            <li>C, Unix, PL1, COBOL, Ingres</li>
          </ul>
        </div>
      </div>
      <Row>
        <p>
          <img src={ImageAPI} />
          <img src={ImageApollo} />
          <img src={ImageAtlassian} />
          <img src={ImageBootstrap} />
          <img src={Imagecss3} />
          <img src={Imageexpress} />
          <img src={Imagegithub} />
          <img src={Imagegraphql} />
          <img src={Imagehtml} />
          <img src={Imagejavascript} />
          <img src={ImageJsonWebToken} />
          <img src={Imagematerial} />
          <img src={Imagemongodb} />
          <img src={Imagemongoose} />
          <img src={Imagemysql} />
          <img src={Imagenodejs} />
          <img src={Imagenpm} />
          <img src={Imageredux} />
          <img src={ImageTailwindcss} />
          <img src={Imagevisual} />
          <img src={Imagewebpack} />
        </p>
      </Row>
    </Container >
  )
}

export default Resume;