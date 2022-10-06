import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">My Resumé</h1>
      <div>
        <a href="https://docs.google.com/document/d/1xlJVHfr4bVYev0StOZ8vOCXq7LtwUyQ-2tv2KReKpdY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View resumé online with this link</a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1IdE3PRXEy_g7v-1FYMSWLRVFAzAfUZUX/view?usp=sharing" download>Download PDF resumé with this link
        </a>
      </div>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </section>
  )
}

export default Resume;