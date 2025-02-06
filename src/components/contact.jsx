import { useTranslation } from "react-i18next"
import { Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    id: 'email',
    Icon: Mail,
    label: 'robsonssdev@gmail.com',
    href: 'mailto:robsonssdev@gmail.com',
  },
  {
    id: 'linkedin',
    Icon: Linkedin,
    label: 'linkedin.com/in/robsonossantana',
    href: 'http://linkedin.com/in/robsonossantana/',
  },
  {
    id: 'github',
    Icon: Github,
    label: 'github.com/ROSS1996',
    href: 'https://github.com/ROSS1996',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="h-full">
      <h2 className="flex items-center pb-4 mb-6 text-3xl font-bold border-b-2 text-lightgray border-midgray">
        <Mail className="mr-2" size={28} />
        {t("contact.title").toUpperCase()}
      </h2>

      <div className="p-6 space-y-6 text-lg transition-all duration-300 border rounded-lg shadow-md bg-lightgblue border-midgray hover:shadow-lg">
        <ul className="space-y-4">
          {contactLinks.map(({ id, Icon, label, href }) => (
            <li key={id} className="flex items-center gap-4">
              <Icon className="flex-shrink-0" size={24} />
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold transition-all duration-300 sm:text-base text-lightgray hover:text-white hover:underline md:text-xl"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
