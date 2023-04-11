import useLanguage from "../hooks/useLanguage"

import PageHead from "../components/head"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from '../components/skills'



export default function Home() {
  const lang = useLanguage();

  return (
    <div className='flex flex-col bg-gblue text-lightgray font-ruda sm:flex-row sm:h-screen sm:overflow-hidden'>
      < PageHead pageTitle='Robson Santana' />
      <header className='font-ruda sm:w-56'>
        <Navbar page={'index'} lang={lang} />
      </header>
      <main className='flex flex-col gap-6 p-2 overflow-y-auto scroll-smooth font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray sm:p-6'>
        <About lang={lang} />
        < Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
    </div >
  )
}