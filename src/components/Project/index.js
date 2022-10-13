import React, { useState } from 'react';
import { CardLink, CardText } from 'reactstrap';

const Project = ({ projectKey }) => {

  const [photos] = useState([
    {
      key: 0,
      name: 'Password Generator',
      description: 'A password generator allows the user to choose the type of characters in their password.',
      deployedLink: 'https://jenniferbyrnes.github.io/password-gen/',
      githubLink: 'https://github.com/JenniferByrnes/password-gen'
    },
    {
      key: 1,
      name: 'Workday Scheduler',
      description: 'The user can type in appointments for day and it keeps track of the time using colors on the planner.',
      deployedLink: 'https://jenniferbyrnes.github.io/work-day-scheduler',
      githubLink: 'https://github.com/JenniferByrnes/work-day-scheduler'
    },
    {
      key: 2,
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
      key: 4,
      name: 'Weather Playlist',
      description: 'This 3 person team project allows the user to key in their city for the daily weather, related GIF, and a Spotify playlist recommendation',
      deployedLink: 'https://rata-whats-cooking.herokuapp.com/',
      githubLink: 'https://github.com/JenniferByrnes/weather-playlist'
    },
    {
      key: 5,
      name: 'Whats Cooking',
      description: 'This project was creatd by me as the leader of a 6 person team, and it provides the user with an online, family cookbook. The user begins with a nice selection of recipes searchable by ingredient. The user can add and update their own recipes, including images, and add notes to existing recipes.',
      deployedLink: 'https://rata-whats-cooking.herokuapp.com/',
      githubLink: 'https://github.com/JenniferByrnes/whats-cooking'
    },
  ]);

  return (
    <div>
        <CardText tag="h3" style={{ color: "var(--primary)" }} >{photos[projectKey].name}</CardText>

        <CardText>
          <CardLink href={photos[projectKey].deployedLink}>
            Deployed App
          </CardLink>
          <CardLink href={photos[projectKey].githubLink}>
            GitHub
          </CardLink>
        </CardText>
    </div>
  )
}

export default Project;