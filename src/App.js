import React, { useState } from 'react';
import About from './components/About'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

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
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="main-div">
      {/* This passes in the currentPage and handlePageChange values to NavTabs as props. */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This calls the renderPage function which will determine which page to show (About, Portfolio, Resume, Contact). */}
        {renderPage()}
      <footer className='justify-center'>
        <Footer></Footer>
      </footer>
    </div>
  );
}