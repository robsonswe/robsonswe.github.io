import i18n from "../locales/i18n";
import PageHead from "../components/head";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Skills from '../components/skills';

export default function Home() {
  return (
    <div className='flex flex-col bg-gblue text-lightgray font-ruda sm:flex-row sm:h-screen sm:overflow-hidden'>
      <PageHead pageTitle='Robson Santana' />
      <header className='font-ruda sm:w-56'>
        <Navbar page={'index'} />
      </header>
      <main className='flex flex-col gap-6 p-2 overflow-y-auto scroll-smooth font-outfit scrollbar-thin scrollbar-thumb-midgray scrollbar-thumb-rounded-full scrollbar-track-lightgray sm:p-6'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}