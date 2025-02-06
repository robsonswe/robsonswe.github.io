import { useTranslation } from "react-i18next";
import { User, Github, Linkedin, Mail } from "lucide-react";

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
    href: "http://linkedin.com/in/robsonossantana/",
    username: "robsonossantana",
  },
  {
    id: "github",
    Icon: Github,
    href: "https://github.com/robsonodev",
    username: "robsonodev",
  },
];

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <section id="about" className="h-full">
      <h2 className="flex items-center pb-4 mb-6 text-3xl font-bold border-b-2 text-lightgray border-midgray">
        <User className="mr-2" size={28} />
        {t("about.title").toUpperCase()}
      </h2>
      <div className="space-y-6 text-lg leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="p-6 transition-all duration-300 border rounded-lg shadow-md bg-lightgblue border-midgray hover:shadow-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div id="contact" className="flex justify-center gap-8 p-8 my-12 transition-all duration-300 rounded-xl bg-darkblue/50 backdrop-blur-sm">
        {contactLinks.map(({ id, Icon, href, username }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 transition-all duration-300 rounded-lg shadow-lg bg-midgray/50 hover:bg-primary-500 hover:-translate-y-2 group"
            title={id}
          >
            <Icon
              size={28}
              className="text-gray-300 transition-colors duration-300 group-hover:text-white"
            />
            <span className="text-sm text-white">{username}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
