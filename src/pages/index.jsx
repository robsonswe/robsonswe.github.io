
import { Maven_Pro } from '@next/font/google'

const mavenpro = Maven_Pro({ subsets: ['latin'] })

import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"


export default function Home() {
  return (
    <>
    <PageHead pageTitle='Portfolio' />
    <header className={`sticky inset-0 ${mavenpro.className}`}>
        <Navbar  />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}