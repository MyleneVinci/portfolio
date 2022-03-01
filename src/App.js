import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Training from './components/training/Training';
import Experiencies from './components/experiencies/Experiencies';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import './App.css';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Training />
      <Experiencies />
      <Project />
      <Contact />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ⇧
        </button>
      )}
    </div>
  );
}

export default App;
