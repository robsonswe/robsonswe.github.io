import { useEffect, useState } from "react"
import i18n from "../locales/i18n"
import MetaData from "../components/metadata"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Skills from "../components/skills"
import { ArrowUp } from "lucide-react"
import Hero from "../components/Hero"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
    <div className="min-h-screen font-mono text-lightgray bg-gblue bg-opacity-95 bg-[url('/subtle-pattern.png')] bg-repeat">
      <MetaData pageTitle="Robson Santana | Software Engineer" />
      <Navbar />

      <main className="container px-4 py-8 mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="py-6 text-center border-t border-midgray">
        <p className="text-sm">© {new Date().getFullYear()} Robson Santana. All rights reserved.</p>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-2 transition-all duration-300 rounded-full shadow-lg bottom-4 right-4 bg-lightgblue hover:bg-midgray"
          aria-label="Back to top"
        >
          <ArrowUp size={24} className="text-gblue" />
        </button>
      )}
    </div>
  )
}

