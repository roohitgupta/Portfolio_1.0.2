import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard';


const App = () => {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <ProjectCard />
     <Experience />
     <Contact />
     <SocialLinks />
    </div>
  )
}

export default App;
