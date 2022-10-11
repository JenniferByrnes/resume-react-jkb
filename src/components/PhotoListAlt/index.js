import React, { useState } from 'react';
import ModalProject from '../Modal';
import { Modal, ModalBody, ModalHeader, CardLink, Card, Row, Col, CardBody, CardFooter, CardImg, CardTitle, CardHeader } from 'reactstrap';

const PhotoListAlt = () => {

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
      <Row className="flex-row">
        
        {currentPhotos.map((image, i) => (
          <Col sm="6">
          <Card className='card-stuff' style={{
            width: '500px'
          }}>
            <CardHeader>
              <CardTitle tag="h5">{image.name}</CardTitle>
            </CardHeader>

              <CardImg
                src={require(`../../assets/projects/${i}.png`)}
                alt={image.name}
                onClick={() => toggleModal(image, i)}
                key={image.name}
              />

            <CardFooter>
              <CardLink href="#">
                Deployed App
              </CardLink>
              <CardLink href="#">
                GitHub
              </CardLink>
            </CardFooter>
          </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PhotoListAlt;