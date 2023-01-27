import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import byrnesResumeOnline from "../../assets/cover/ByrnesResumeOnline.pdf";
import ImageAPI from "../../assets/skills/icons8-api-50.png";
import ImageApollo from "../../assets/skills/icons8-apollo-50.png";
import ImageAtlassian from "../../assets/skills/icons8-atlassian-confluence-50.png";
import ImageBootstrap from "../../assets/skills/icons8-bootstrap-50.png";
import ImageCss3 from "../../assets/skills/icons8-css3-50.png";
import ImageExpress from "../../assets/skills/icons8-express-js-50.png";
import ImageGithub from "../../assets/skills/icons8-github-50.png";
import ImageGraphql from "../../assets/skills/icons8-graphql-50.png";
import ImageHtml from "../../assets/skills/icons8-html-5-50.png";
import ImageJavascript from "../../assets/skills/icons8-javascript-50.png";
import ImageJsonWebToken from "../../assets/skills/icons8-json-web-token-50.png";
import ImageMaterial from "../../assets/skills/icons8-material-ui-50.png";
import ImageMongodb from "../../assets/skills/icons8-mongodb-50.png";
import ImageMongoose from "../../assets/skills/icons8-mongoose-50.png";
import ImageMysql from "../../assets/skills/icons8-mysql-logo-50.png";
import ImageNodejs from "../../assets/skills/icons8-nodejs-50.png";
import ImageNpm from "../../assets/skills/icons8-npm-50.png";
import ImageRedux from "../../assets/skills/icons8-redux-50.png";
import ImageTailwindcss from "../../assets/skills/icons8-tailwindcss-50.png";
import ImageVisual from "../../assets/skills/icons8-visual-studio-code-insides-50.png";
import ImageWebpack from "../../assets/skills/icons8-webpack-50.png";

function Resume() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Container>
      <h1>My Resumé</h1>
      <div>
        <div className="flex-wrap justify-center row">
          <Button className='m-2'
            style={{ color: "var(--light)", backgroundColor: "var(--primary)", maxWidth: '18rem' }}
            href="https://docs.google.com/document/d/1xlJVHfr4bVYev0StOZ8vOCXq7LtwUyQ-2tv2KReKpdY/edit?usp=sharing"
            tag="a"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >View resumé online
          </Button>

          <Button className='m-2'
            style={{ color: "var(--light)", backgroundColor: "var(--primary)", maxWidth: '18rem' }}
            href="#resumePDF"
            tag="a"
            size="lg"
            onClick={toggle}
          >Prepare for printing
          </Button>
        </div>
      </div>
      <div>
        <br />
        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalHeader toggle={toggle}>Resume for Jennifer Byrnes</ModalHeader>
          <ModalBody>
            <object width="100%" height="800" data={byrnesResumeOnline} type="application/pdf">Download PDF resumé with this link
            </object>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <h1 className='mt-4 my-2'>Skill Set</h1>

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
          <img src={ImageAPI} alt="skill icon" />
          <img src={ImageApollo} alt="skill icon" />
          <img src={ImageAtlassian} alt="skill icon" />
          <img src={ImageBootstrap} alt="skill icon" />
          <img src={ImageCss3} alt="skill icon" />
          <img src={ImageExpress} alt="skill icon" />
          <img src={ImageGithub} alt="skill icon" />
          <img src={ImageGraphql} alt="skill icon" />
          <img src={ImageHtml} alt="skill icon" />
          <img src={ImageJavascript} alt="skill icon" />
          <img src={ImageJsonWebToken} alt="skill icon" />
          <img src={ImageMaterial} alt="skill icon" />
          <img src={ImageMongodb} alt="skill icon" />
          <img src={ImageMongoose} alt="skill icon" />
          <img src={ImageMysql} alt="skill icon" />
          <img src={ImageNodejs} alt="skill icon" />
          <img src={ImageNpm} alt="skill icon" />
          <img src={ImageRedux} alt="skill icon" />
          <img src={ImageTailwindcss} alt="skill icon" />
          <img src={ImageVisual} alt="skill icon" />
          <img src={ImageWebpack} alt="skill icon" />
        </p>
      </Row>
    </Container >
  )
}

export default Resume;