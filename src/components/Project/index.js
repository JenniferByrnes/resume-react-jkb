import React, { useState } from 'react';
import { CardLink, CardText } from 'reactstrap';
import { CardImg, CardHeader, CardBody } from 'reactstrap';

const Project = ({ projectKey }) => {

  const [photos] = useState([
    {
      key: 0,
      name: 'Project Choice',
      description: 'This programs allows a user to find the abortion laws for a given US state and provides an online retail store from which to purchase branded merchandise.  I led a five person team to build this class project and then followed it up with one other programmer to enhance it.',
      deployedLink: 'https://project-choice.onrender.com/',
      githubLink: 'https://github.com/JenniferByrnes/project-choice'
    },
    {
      key: 5,
      name: 'Workday Scheduler',
      description: 'The user can type in appointments for day and it keeps track of the time using colors on the planner.',
      deployedLink: 'https://jenniferbyrnes.github.io/work-day-scheduler',
      githubLink: 'https://github.com/JenniferByrnes/work-day-scheduler'
    },
    {
      key: 4,
      name: 'Wix Mask Making',
      description: 'A WIX site to allow customers to view fabric and mask options. This site is live and available for customers - though demand has dropped.',
      deployedLink: 'https://jenniferbyrnes.wixsite.com/mysite',
      githubLink: 'https://github.com/JenniferByrnes'
    },
    {
      key: 3,
      name: 'Code Quiz',
      description: 'A class project for a timed javascript code quiz that tracks of high scores and stores the data locally.',
      deployedLink: 'https://jenniferbyrnes.github.io/code-quiz',
      githubLink: 'https://github.com/JenniferByrnes/code-quiz'
    },
    {
      key: 2,
      name: 'Weather Playlist',
      description: 'This 3 person team project allows the user to key in their city for the daily weather, related GIF, and a Spotify playlist recommendation',
      deployedLink: 'https://jenniferbyrnes.github.io/weather-playlist/',
      githubLink: 'https://github.com/JenniferByrnes/weather-playlist'
    },
    {
      key: 1,
      name: 'Whats Cooking',
      description: 'This project was creatd by me as the leader of a 6 person team, and it provides the user with an online, family cookbook. The user begins with a nice selection of recipes searchable by ingredient. The user can add and update their own recipes, including images, and add notes to existing recipes.',
      deployedLink: 'https://rata-whats-cooking.herokuapp.com/',
      githubLink: 'https://github.com/JenniferByrnes/whats-cooking'
    },
  ]);

  return (
    <CardBody style={{ backgroundColor: "var(--tertiary)" }} >
      <CardLink href={photos[projectKey].deployedLink} target="_blank" rel="noreferrer noopener">
        <CardImg
          src={require(`../../assets/projects/${projectKey}.png`)}
          alt={photos[projectKey].name}
          width="100%"
          height="90%"
        />
      </CardLink>
      <CardHeader>
        <CardText tag="h3" style={{ color: "var(--primary)" }} >{photos[projectKey].name}</CardText>
      </CardHeader>
      
    </CardBody>
  )
}

export default Project;