import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import JennLogo from "../../assets/cover/JennLogo.png";

export default function NavBar({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar expand="md" >
        <NavbarBrand>
          <img src={JennLogo} className="img-fluid my-2" style={{ minWidth: "200px", height: "200px" }} alt="Jennifer Byrnes logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="nav-tabs border-bottom-0 my-1 flex-row flex-end"
          isOpen={isOpen} navbar>
          <Nav end navbar>
            <NavItem className="nav-choice mx-2">
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
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

