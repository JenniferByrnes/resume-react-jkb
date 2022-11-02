import React from 'react'
import { Container } from 'reactstrap';
import { Row, Col, Card, CardImg, CardHeader } from 'reactstrap';
import Project from '../Project';

const photos = [0, 1, 2, 3, 4, 5];

function Portfolio() {
  return (
    <Container className="flex">
      <h1>My Projects</h1>
      <Row className="flex-row">
        {photos.map((image, i) => (   
          <Col xs="12" md="6" xl="4" >
            <Card className="m-2" style={{ minWidth: "350px", height: "540px" }} >
              <CardHeader>
            <Project projectKey={i} />
            </CardHeader>
              <CardImg
                src={require(`../../assets/projects/${i}.png`)}
                alt={image.name}
                key={image.name}
                style={{ minWidth: "350px", height: "440px" }}
                width="100%"
                height="100%"
              />
            </Card>    
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default Portfolio;