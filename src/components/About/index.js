import React from 'react';
import byrnesImage from "../../assets/cover/JByrnesPhoto1.jpeg";
import { Container, Row, Col } from 'reactstrap';

function About() {
  return (
    <Container id="container-about">
      <h1>About me</h1>
      <Row className="flex-wrap justify-center">
        <Col xs="auto">
          <img src={byrnesImage} className="img-fluid my-2" style={{ minWidth: "350px", height: "350px" }} alt="Jennifer Byrnes" />
        </Col>
        <Col md="6">
          <div className="my-2 text-center">
            <div>
              <h2>Motivated Experienced</h2>
              <h2>Bootcamp Graduate</h2>
              <h2>Navy Veteran</h2>
            </div>
            <div>
              <p></p>
              <h4>Full Stack Web Developer with a focus on front-end development and experience in application development,
                teaching, and military leadership. Earned certificate from the University of Richmond's Full Stack Web Development Bootcamp in November 2022. 
                </h4>
                <h4>
                Skillset has been recently updated with the full MERN stack with responsive web design to build applications from scaffolding to rollout.</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;