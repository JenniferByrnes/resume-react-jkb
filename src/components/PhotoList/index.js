import React, { useState } from 'react';
import ModalProject from '../Modal';
import { Modal, ModalBody, ModalHeader, Container, Card, CardGroup, CardBody, CardFooter } from 'reactstrap';

const PhotoList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Password Generator',
      description: 'A password generator allows the user to choose the type of characters in their password.',
    },
    {
      name: 'Workday Scheduler',
      description: 'The user can type in appointments for day and it keeps track of the time using colors on the planner.',
    },
    {
      name: 'Wix Mask Making',
      description: 'A WIX site to allow customers to view fabric and mask options. This site is live and available for customers - though demand has dropped.',
    },
    {
      name: 'Code Quiz',
      description: 'A class project for a timed javascript code quiz that tracks of high scores and stores the data locally.',
    },
    {
      name: 'Weather Playlist',
      description: 'This 3 person team project allows the user to key in their city for the daily weather, related GIF, and a Spotify playlist recommendation',
    },
    {
      name: 'Whats Cooking',
      description: 'This project was creatd by me as the leader of a 6 person team, and it provides the user with an online, family cookbook. The user begins with a nice selection of recipes searchable by ingredient. The user can add and update their own recipes, including images, and add notes to existing recipes.',
    },
  ]);

  const currentPhotos = photos;

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      {isModalOpen && (
        <ModalProject currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <CardGroup className="flex-row">
        {currentPhotos.map((image, i) => (
          <Card className='card-stuff'>
            <h5 className="card-title">{image.name}</h5>
            <img
              src={require(`../../assets/projects/${i}.png`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
            <CardFooter>
              <a href="#" class="btn btn-primary">Deployed App</a>
              <a href="#" class="btn btn-primary">GitHub</a>
            </CardFooter>
          </Card>
        ))}
      </CardGroup>
    </div>
  )
}

export default PhotoList;