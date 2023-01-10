
import { Maven_Pro } from '@next/font/google'

const mavenpro = Maven_Pro({ subsets: ['latin'] })

import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from '../components/skills'


export default function Home() {
  return (
    <div>
      < PageHead pageTitle='Robson Santana' />
      <header className={`sticky inset-0 ${mavenpro.className} z-10`}>
        <Navbar />
      </header>
      <main>
        <About />
        < Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}