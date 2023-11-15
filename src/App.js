import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import ScrollDownLogo from './components/ScrollDownLogo';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection id="hero" />
      <AboutMeSection id="about" />
      <Projects id="projects" />
      <ContactMe id="contact" />
      <ScrollDownLogo /> 
    </div>
  );
}

export default App;