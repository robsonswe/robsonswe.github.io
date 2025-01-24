import { useEffect } from "react"
import i18n from "../locales/i18n"
import MetaData from "../components/metadata"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div className="font-mono text-lightgray bg-gblue">
      <MetaData/>
      <Navbar />

      <main className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-24 lg:grid-cols-2">
          <About />
          <Contact />
        </div>
        <Skills />
        <Projects />
      </main>

      <footer className="py-6 text-center border-t border-midgray">
        <p className="text-sm">
          © {new Date().getFullYear()} Robson Santana. All rights reserved.<br />
        </p>
      </footer>
    </div>
  )
}
