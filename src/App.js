import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Training from './components/training/Training';
import Experiencies from './components/experiencies/Experiencies';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Training />
      <Experiencies />
      <Contact />
    </div>
  );
}

export default App;
