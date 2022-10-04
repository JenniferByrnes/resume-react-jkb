import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from '/../Nav'

// function categorySelected(name) {
//   console.log(`${name} clicked`)
// }
if (Nav.setCurrentCategory)

function Main(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  if (Nav.contactSelected)
    let main = ConcactForm

    <ContactForm></ContactForm>

  ) : (

    <>
      <Gallery currentCategory={currentCategory}></Gallery>
      <About></About>
      <Resume></Resume>
    </>
  )}

  return (
    <main className="flex-row px-1">
      <h2>
        
    </main>
  );
}

export default Main;