import React from 'react'
import { Container } from 'reactstrap';
import PhotoList from '../PhotoList'

function Portfolio() {

  return (
    <Container>
      <h1>My Projects</h1>
      {//<h1>{(name)}</h1>
      }
      {//<p>{description}</p>
      }
      <PhotoList />
    </Container>
  )
}

export default Portfolio;