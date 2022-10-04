import React, { useState } from 'react';
import About from './components/About'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

import './App.css';

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);

  console.log("aboutSelected=", aboutSelected );
  console.log("contactSelected=", contactSelected );
  console.log("resumeSelected=", resumeSelected );
  console.log("currentCategory=", currentCategory );

  var mainContent = {};
  if (aboutSelected){mainContent={About}};
  if (resumeSelected){mainContent={Resume}};
  if (contactSelected){mainContent={ContactForm}};

  console.log("mainContent=", mainContent );

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        <mainContent></mainContent>
        <ContactForm></ContactForm>
        <Resume></Resume>
        <About></About>
      </main>
    </div>
  );
}

export default App;
