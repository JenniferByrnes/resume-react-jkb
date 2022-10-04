import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList'

function Gallery({ currentCategory }) {
  const {
    name,
    description
  } = currentCategory;
  return (
    <section >
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  )
}

export default Gallery;