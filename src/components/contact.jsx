import { useTranslation } from "react-i18next"
import { Github, Linkedin, Envelope } from "react-bootstrap-icons"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="h-full">
      <h2 className="pb-4 mb-6 text-5xl font-bold border-b text-lightgray border-midgray">
        {t("contact.title").toUpperCase()}
      </h2>
      
      <div className="p-6 space-y-6 text-lg border rounded-lg bg-lightgblue border-midgray" >

        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <Envelope className="flex-shrink-0 " size={24} />
            <a 
              href="mailto:robsonssdev@gmail.com" 
              className="text-xl text-lightgray hover: hover:underline"
            >
              robsonssdev@gmail.com
            </a>
          </li>
          
          <li className="flex items-center gap-4">
            <Linkedin className="flex-shrink-0" size={24} />
            <a
              href="http://linkedin.com/in/robsonossantana/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-lightgray hover: hover:underline"
            >
              linkedin.com/in/robsonossantana
            </a>
          </li>
          
          <li className="flex items-center gap-4">
            <Github className="flex-shrink-0 " size={24} />
            <a
              href="https://github.com/ROSS1996"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-lightgray hover: hover:underline"
            >
              github.com/ROSS1996
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
