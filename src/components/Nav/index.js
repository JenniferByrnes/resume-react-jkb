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
    } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
              }`} 
              key={category.name}
              >
              <span 
              onClick={() => {
                setCurrentCategory(category)
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