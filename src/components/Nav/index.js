import React from 'react';

function Nav({ currentPage, handlePageChange }) {

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Jennifer Byrnes
        </a>
      </h2>
      <nav>
        <ul className="nav nav-tabs flex-row">
          <li className="nav-item mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Ternary operator - if - ?then - :else
              // if the currentPage is About, then nav-link is active, else nav-link is not changed to active
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
            >
              Resumé
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item mx-2">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;