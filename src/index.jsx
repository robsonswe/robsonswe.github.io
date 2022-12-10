import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

import "./index.css";

function Index() {
  /**          */
  return (
    <>
      <header className="sticky inset-0">
        <Navbar />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Index;
