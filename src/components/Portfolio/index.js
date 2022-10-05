import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList'

function Portfolio({ currentCategory }) {
  const {
    name,
    description
  } = currentCategory;
  return (
    <section >
      <h1>My Projects</h1>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  )
}

export default Portfolio;