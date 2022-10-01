// import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";


function About() {
  return (
    <header className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </header>
  )
}

export default About;