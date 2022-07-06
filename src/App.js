import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from './components/About';
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio';


const App = () => {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <SocialLinks />

    </div>
  )
}

export default App;
