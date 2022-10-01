// import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";


function Gallery(props) {
  const currentCategory = {
    name: "commercial",
    description: "Photos of grocery stores, food trucks, and other commercial projects"
  }
  return (
    <section >
      <h1 id="galleryTitle">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p id="galleryDesc">{currentCategory.description}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  )
}

export default Gallery;