import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["about", "skills", "projects", "contact"]

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      const offset = 80
      const top = section.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-0 z-40 border-b bg-terminal-muted/80 backdrop-blur-xs border-terminal-accent/20">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="flex items-center gap-6 font-terminal">
            <a 
              href="#about" 
              className="transition-colors text-terminal-text hover:text-terminal-accent" 
              onClick={() => handleScrollToSection('about')}
            >
              {t('navbar.about')}
            </a>
            <a 
              href="#skills" 
              className="transition-colors text-terminal-text hover:text-terminal-accent" 
              onClick={() => handleScrollToSection('skills')}
            >
              {t('navbar.skills')}
            </a>
            <a 
              href="#projects" 
              className="transition-colors text-terminal-text hover:text-terminal-accent" 
              onClick={() => handleScrollToSection('projects')}
            >
              {t('navbar.projects')}
            </a>
            <a 
              href="#contact" 
              className="transition-colors text-terminal-text hover:text-terminal-accent" 
              onClick={() => handleScrollToSection('contact')}
            >
              {t('navbar.contact')}
            </a>
          </div>
          <div className="w-24" />
        </div>
      </div>
    </nav>
  )
}
