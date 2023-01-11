import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from '../components/skills'


export default function Home() {
  return (
    <div className='flex flex-row h-screen overflow-hidden bg-gblue text-lightgray font-ruda'>
      < PageHead pageTitle='Robson Santana' />
      <header className='w-2/6 font-ruda'>
        <Navbar />
      </header>
      <main className='overflow-y-auto scroll-smooth p-6 flex flex-col gap-6 font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray '>
        <About />
        < Skills />
        <Projects />
        <Contact />
      </main>
    </div >
  )
}