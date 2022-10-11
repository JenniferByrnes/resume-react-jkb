import React, { useState } from 'react';
import About from './components/About'
import NavBar from './components/Nav'
// import Gallery from './components/Gallery'
import Portfolio from './components/Portfolio'
import PortfolioAlt from './components/PortfolioAlt'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

import './App.css';
import { Modal, ModalBody, ModalHeader, Container, Card } from 'reactstrap';

export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // if the current page as brought in by the useState of "About" - return the About component, otherwise, bring in the other named components.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'PortfolioAlt') {
      return <PortfolioAlt />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* This passes in the currentPage and handlePageChange values to NavTabs as props. */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This calls the renderPage function which will determine which page to show (About, Portfolio, Resume, Contact). */}
        {renderPage()}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}