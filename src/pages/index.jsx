import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from '../components/skills'


export default function Home() {
  return (
    <div className='flex flex-col bg-gblue text-lightgray font-ruda sm:flex-row sm:h-screen sm:overflow-hidden'>
      < PageHead pageTitle='Robson Santana' />
      <header className='font-ruda sm:w-2/6'>
        <Navbar />
      </header>
      <main className='overflow-y-auto scroll-smooth flex flex-col gap-6 font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray p-2 sm:p-6'>
        <About />
        < Skills />
        <Projects />
        <Contact />
      </main>
    </div >
  )
}