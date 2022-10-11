import React, { useState } from 'react'
import { CardGroup, Container } from 'reactstrap';
import { CardLink, Card, Row, Col, CardBody, CardFooter, CardImg, CardTitle, CardHeader } from 'reactstrap';
import ProjectDetail from '../ProjectDetail'

const photos = [0, 1, 2, 3, 4, 5];
const currentPhotos = photos;

function Portfolio() {

  return (
    <Container>
      <h1>My Projects</h1>
      <Row className="flex-row">
        {currentPhotos.map((image, i) => (
          <Col sm="6">
            <Card body>
              <CardImg
                src={require(`../../assets/projects/${i}.png`)}
                alt={image.name}
                key={image.name}
                onClick={() => ProjectDetail(i)}
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