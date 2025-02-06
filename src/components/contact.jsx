import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    id: "email",
    Icon: Mail,
    href: "mailto:robsonssdev@gmail.com",
  },
  {
    id: "linkedin",
    Icon: Linkedin,
    href: "http://linkedin.com/in/robsonossantana/",
  },
  {
    id: "github",
    Icon: Github,
    href: "https://github.com/ROSS1996",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="my-2">
      <div className="flex justify-center gap-6 p-6 transition-all duration-300 rounded-lg">
        {contactLinks.map(({ id, Icon, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 rounded-full shadow-md bg-midgray hover:bg-white hover:text-midgray"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </section>
  );
}