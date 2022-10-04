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
    setAboutSelected,
    portfolioSelected,
    setPortfolioSelected
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
          <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => {
              setContactSelected(false)
              setResumeSelected(false)
              setPortfolioSelected(false)
              setAboutSelected(true)
            }}>About me</a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => {
              setContactSelected(true)
              setResumeSelected(false)
              setPortfolioSelected(false)
              setAboutSelected(false)
            }}>Contact</span>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
            <a data-testid="resume" href="#resume" onClick={() => {
              setContactSelected(false)
              setResumeSelected(true)
              setPortfolioSelected(false)
              setAboutSelected(false)
            }}>Resumé</a>
          </li>
          <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
            <a data-testid="portfolio" href="#portfolio" onClick={() => {
              setContactSelected(false)
              setResumeSelected(false)
              setPortfolioSelected(true)
              setAboutSelected(false)
            }}
            >Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;