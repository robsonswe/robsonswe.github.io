import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <nav className="sticky top-0 z-10 border-b border-midgray bg-gblue/90 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between px-4 py-4 mx-auto sm:flex-row">
        <h1 className="mb-4 text-4xl font-bold text-lightgray sm:mb-0">
          ROBSON SANTANA
        </h1>
        <ul className="flex flex-wrap justify-center gap-6">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <li key={item} className="text-xl uppercase">
              <a 
                href={`#${item}`} 
                className="px-3 py-1 transition-all duration-300 rounded-lg text-lightgray hover:bg-lightgblue"
              >
                {t(`navbar.${item}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
