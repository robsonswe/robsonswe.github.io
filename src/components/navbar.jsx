"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["about", "skills", "projects", "contact"]

  return (
    <nav
      className={`sticky top-0 z-10 transition-all duration-300 ${isScrolled ? "bg-gblue shadow-lg" : "bg-transparent"}`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-lightgray sm:text-3xl">ROBSON SANTANA</h1>
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item} className="text-lg uppercase">
                  <a
                    href={`#${item}`}
                    className="px-3 py-2 transition-all duration-300 rounded-lg text-lightgray hover:bg-lightgblue hover:text-white"
                  >
                    {t(`navbar.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 transition-colors duration-300 rounded-lg sm:hidden hover:bg-lightgblue"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} className="text-lightgray" /> : <Menu size={24} className="text-lightgray" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item} className="text-lg uppercase">
                <a
                  href={`#${item}`}
                  className="block px-3 py-2 transition-all duration-300 rounded-lg text-lightgray hover:bg-lightgblue hover:text-white"
                  onClick={toggleMenu}
                >
                  {t(`navbar.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

