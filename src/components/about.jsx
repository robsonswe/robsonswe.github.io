import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    id: "email",
    Icon: Mail,
    href: "mailto:robsonssdev@gmail.com",
    username: "Email",
  },
  {
    id: "linkedin",
    Icon: Linkedin,
    href: "http://linkedin.com/in/robsonswe/",
    username: "robsonswe",
  },
  {
    id: "github",
    Icon: Github,
    href: "https://github.com/robsonswe",
    username: "robsonswe",
  },
];

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <>
      {/* About section */}
      <section id="about" className="relative mb-20">
        <div className="max-w-3xl p-6 mx-auto border rounded-lg border-terminal-accent/20 bg-terminal-muted/10 backdrop-blur-xs">
          <h2 className="flex items-center mb-6 text-2xl font-pixel text-terminal-accent">
            <ArrowRight className="mr-2" size={16} />
            {t("about.title").toUpperCase()}
          </h2>
          <p className="relative text-lg leading-relaxed font-terminal">
            <span className="mr-2 text-terminal-accent">$</span>
            {paragraphs.join(" ")}
            <span className="animate-pulse text-terminal-accent">_</span>
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="flex justify-center p-6">
        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map(({ id, Icon, href, username }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 transition-colors duration-200 transform border rounded-lg border-terminal-accent/20 bg-terminal-muted/10 backdrop-blur-xs text-terminal-text hover:text-terminal-accent hover:scale-110"
            >
              <Icon size={24} />
              <span>{username}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}