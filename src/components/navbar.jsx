"use client"

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
      const offset = 80 // Adjust this based on your navbar height
      const top = section.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-10 transition-all duration-300 ${isScrolled ? "bg-gblue shadow-lg" : "bg-transparent"}`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-center w-full h-16">
          <ul className="flex flex-wrap justify-center w-full gap-3 sm:gap-6">
            {navItems.map((item) => (
              <li key={item} className="text-sm uppercase md:text-lg">
                <button
                  onClick={() => handleScrollToSection(item)}
                  className="px-3 py-2 transition-all duration-300 rounded-lg text-lightgray hover:bg-lightgblue hover:text-white"
                >
                  {t(`navbar.${item}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
