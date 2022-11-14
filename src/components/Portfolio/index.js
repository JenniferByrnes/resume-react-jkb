import React from 'react'
import { Container } from 'reactstrap';
import { Row, Col, Card } from 'reactstrap';
import Project from '../Project';
import Tilt from 'react-parallax-tilt';

const photos = [0, 1, 2, 3, 4, 5];

function Portfolio() {
  return (
    <Container className="flex">
      <h1>My Projects</h1>
      <Row className="flex-row">
        {photos.map((image, i) => (
          <Col xs="12" md="6" xl="4" >
            <Tilt>
              <Card className="my-2" style={{ maxWidth: "350px", height: "540px", }} >
                <Project projectKey={i} />
              </Card>
            </Tilt>
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default Portfolio;