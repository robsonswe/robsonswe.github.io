
import { Open_Sans, Maven_Pro } from '@next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })
const mavenpro = Maven_Pro({ subsets: ['latin'] })

import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"


export default function Home() {
  return (
    <>
    <PageHead />
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