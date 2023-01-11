import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from '../components/skills'


export default function Home() {
  return (
    <div className='flex flex-row h-screen overflow-hidden bg-quaternary text-secondary font-ruda'>
      < PageHead pageTitle='Robson Santana' />
      <header className='w-2/6'>
        <Navbar />
      </header>
      <main className='overflow-y-auto scroll-smooth p-6 flex flex-col gap-6 font-outfit'>
        <About />
        < Skills />
        <Projects />
        <Contact />
      </main>
    </div >
  )
}