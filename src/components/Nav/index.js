import React from 'react';
import { Nav, NavItem } from 'reactstrap';

function NavBar({ currentPage, handlePageChange }) {

  return (
    <header className="flex-row px-0 space-between">
      <h2>
        <a data-testid="link" className="text-decoration-none" href="/">
          <span role="img" aria-label="camera"> 📸</span> Jennifer Byrnes
        </a>
      </h2>
      <Nav className="nav-tabs border-bottom-0 my-1 flex-row">
          <NavItem className="mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Ternary operator - if - ?then - :else
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </NavItem>
          <NavItem className="mx-2">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resumé
            </a>
          </NavItem>
          <NavItem className="mx-2">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </NavItem>
          <NavItem className="mx-2">
            <a
              href="#portfolioalt"
              onClick={() => handlePageChange('PortfolioAlt')}
              className={currentPage === 'PortfolioAlt' ? 'nav-link active' : 'nav-link'}
            >
              PortfolioAlt
            </a>
          </NavItem>
          <NavItem className="mx-2">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </NavItem>
      </Nav>
    </header>
  );
}

export default NavBar;