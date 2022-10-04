import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// function categorySelected(name) {
//   console.log(`${name} clicked`)
// }


function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Byrnes
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => {setContactSelected(false)
            setResumeSelected(false)
            setAboutSelected(true)}}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {setContactSelected(true)
            setResumeSelected(false)
            setAboutSelected(false)}}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <a data-testid="about" href="#resume" onClick={() => {setContactSelected(false)
            setResumeSelected(true)
            setAboutSelected(false)}}
            >Resumé</a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && !resumeSelected &&`navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
                setResumeSelected(false);
                setAboutSelected(false);
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;