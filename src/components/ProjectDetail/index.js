import React, { useState } from 'react';
import { CardLink, Card, Row, Col, CardBody, CardFooter, CardImg, CardTitle, CardHeader } from 'reactstrap';

const ProjectDetail = (projectKey) => {

  const [photos] = useState([
    {
      key: 0,
      name: 'Password Generator',
      description: 'A password generator allows the user to choose the type of characters in their password.',
      deployedLink: '',
      githubLink: ''
    },
    {
      key: 1,
      name: 'Workday Scheduler',
      description: 'The user can type in appointments for day and it keeps track of the time using colors on the planner.',
      deployedLink: '',
      githubLink: ''
    },
    {
      key: 2,
      name: 'Wix Mask Making',
      description: 'A WIX site to allow customers to view fabric and mask options. This site is live and available for customers - though demand has dropped.',
      deployedLink: '',
      githubLink: ''
    },
    {
      key: 3,
      name: 'Code Quiz',
      description: 'A class project for a timed javascript code quiz that tracks of high scores and stores the data locally.',
      deployedLink: '',
      githubLink: ''
    },
    {
      key: 4,
      name: 'Weather Playlist',
      description: 'This 3 person team project allows the user to key in their city for the daily weather, related GIF, and a Spotify playlist recommendation',
      deployedLink: '',
      githubLink: ''
    },
    {
      key: 5,
      name: 'Whats Cooking',
      description: 'This project was creatd by me as the leader of a 6 person team, and it provides the user with an online, family cookbook. The user begins with a nice selection of recipes searchable by ingredient. The user can add and update their own recipes, including images, and add notes to existing recipes.',
      deployedLink: '',
      githubLink: ''
    },
  ]);

  const currentPhotos = photos;

  const [currentPhoto, setCurrentPhoto] = useState();

  return (
    <div>
      <CardHeader>
        <CardTitle tag="h5">{photos[projectKey].name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <CardLink href="{photos[projectKey].deployedLink}">
          Deployed App
        </CardLink>
        <CardLink href="{photos[projectKey].githubLink}">
          GitHub
        </CardLink>
      </CardFooter>
    </div>
  )
}

export default ProjectDetail;