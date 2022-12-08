import { useState } from 'react'
import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Projects from './components/projects'

import './index.css'

function Index() {
  /**          <About />
          <Contact /> */
  return (
    <div className="App">
          <Navbar />
          <Projects />

    </div>
  )
}

export default Index
