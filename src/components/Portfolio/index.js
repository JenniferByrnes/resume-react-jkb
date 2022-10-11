import React, { useState } from 'react'
import { CardGroup, Container } from 'reactstrap';
import { CardLink, Card, Row, Col, CardBody, CardFooter, CardImg, CardTitle, CardHeader } from 'reactstrap';
import ProjectDetail from '../ProjectDetail'

const photos = [0, 1, 2, 3, 4, 5];
const currentPhotos = photos;

function Portfolio() {

  return (
    <Container className="flex">
      <h1>My Projects</h1>
      <Row className="flex-row">
        {currentPhotos.map((image, i) => (
          <Col xs="12" md="6" xl="4">
            <CardBody style={{ minWidth: "350px", height: "540px" }}>
              <CardImg
                src={require(`../../assets/projects/${i}.png`)}
                alt={image.name}
                key={image.name}
                style={{ minWidth: "350px", height: "500px" }}
                width="100%"
                onClick={() => ProjectDetail(i)}
              />
            </CardBody>
          </Col>
        )
        )}
      </Row>
    </Container>
  )
}

export default Portfolio;