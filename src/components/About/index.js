import React from 'react';
import byrnesImage from "../../assets/cover/JByrnesPhoto1.jpeg";

function About() {
  return (
    <header className="my-5">
      <h1 id="about">About me</h1>
      <div id="about-me">
        <img src={byrnesImage} className="my-2" style={{ width: "350px", height: "350px" }} alt="cover"/>    
        <div id="about-text" className="my-2">
          <h2>Motivated Experienced</h2>
          <h2>Bootcamp Graduate</h2>
          <h2>Navy Veteran</h2>
          <span>Full Stack Web Developer with a focus on front-end development and experience in application development,
            teaching, and military leadership. Expected certificate from the University of Richmond's Full Stack Web
            Development Bootcamp in November 2022; skillset has been recently updated with HTML, CSS, Javascript,
            React.js, and responsive web design to build applications from scaffolding to rollout.</span>
        </div>
      </div>
    </header>
  )
}

export default About;