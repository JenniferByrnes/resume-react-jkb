import React from 'react';
import byrnesImage from "../../assets/cover/JByrnesPhoto1.jpeg";
import { Container } from 'reactstrap';

function About() {
  return (
    <Container>
      <h1>About me</h1>
      <div>
        <img src={byrnesImage} className="img-fluid my-2" style={{ width: "350px", height: "350px" }} alt="Jennifer Byrnes" />
        <div className="my-2">
          <div className="text-warning">
            <h2>Motivated Experienced</h2>
            <h2>Bootcamp Graduate</h2>
            <h2>Navy Veteran</h2>
          </div>
          <div>
            <span>Full Stack Web Developer with a focus on front-end development and experience in application development,
              teaching, and military leadership. Expected certificate from the University of Richmond's Full Stack Web
              Development Bootcamp in November 2022; skillset has been recently updated with HTML, CSS, Javascript,
              React.js, and responsive web design to build applications from scaffolding to rollout.</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About;