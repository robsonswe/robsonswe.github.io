import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail, ArrowRight, Monitor, Hash, Code, Terminal } from "lucide-react";

const contactLinks = [
  {
    id: "email",
    Icon: Mail,
    href: "mailto:robsonssdev@gmail.com",
    username: "robsonssdev@gmail.com",
    color: "rgb(234, 179, 8)",
  },
  {
    id: "linkedin",
    Icon: Linkedin,
    href: "http://linkedin.com/in/robsonswe/",
    username: "robsonswe",
    color: "rgb(59, 130, 246)",
  },
  {
    id: "github",
    Icon: Github,
    href: "https://github.com/robsonswe",
    username: "robsonswe",
    color: "rgb(168, 162, 158)",
  },
];

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <>
      {/* About section header */}
      <div className="flex items-center mb-8 group">
        <div className="p-2 mr-4 border rounded-lg bg-terminal-accent/10 border-terminal-accent/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--terminal-accent-rgb),0.3)]">
          <Terminal size={24} className="text-terminal-accent" />
        </div>
        <h2 className="text-2xl transition-all duration-300 font-pixel text-terminal-accent group-hover:text-terminal-highlight">
          {t("about.title").toUpperCase()}
        </h2>
      </div>

      {/* About content */}
      <section id="about" className="mb-20">
        <div className="grid grid-cols-1 gap-8">
          {/* Terminal window for bio */}
          <div className="overflow-hidden border rounded-lg md:col-span-2 border-terminal-accent/30 bg-terminal-muted/10 backdrop-blur-xs transition-all duration-300 hover:border-terminal-accent/50 hover:shadow-[0_0_20px_rgba(var(--terminal-accent-rgb),0.15)]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-terminal-muted/30 border-terminal-accent/30">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500/70"></span>
                </div>
                <Hash size={14} className="ml-2 text-terminal-accent" />
                <span className="text-sm font-terminal text-terminal-accent/80">{t("about.subtitle").toLowerCase()}.sh</span>
              </div>
              <div className="font-mono text-xs text-terminal-accent/70">bash</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-terminal">
              <div className="flex items-start mb-4">
                <span className="mr-2 text-terminal-accent">robson@portfolio:~$</span>
                <div className="typing-animation">
                  <span className="font-bold text-terminal-accent">cat</span> {t("about.subtitle").toLowerCase()}.txt
                </div>
              </div>

              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 ml-4 text-lg leading-relaxed font-terminal">
                  {paragraph}
                </p>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="mb-16">
        <div className="flex items-center mb-8 group">
          <div className="p-2 mr-4 border rounded-lg bg-terminal-accent/10 border-terminal-accent/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--terminal-accent-rgb),0.3)]">
            <Mail size={24} className="text-terminal-accent" />
          </div>
          <h2 className="text-2xl transition-all duration-300 font-pixel text-terminal-accent group-hover:text-terminal-highlight">
            {t("contact.title", "CONTACT").toUpperCase()}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactLinks.map(({ id, Icon, href, username, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 text-lg transition-all duration-300 transform border rounded-lg font-terminal border-terminal-accent/20 bg-terminal-muted/10 backdrop-blur-xs text-terminal-text hover:border-terminal-accent/50 hover:translate-y-[-4px] hover:shadow-[0_5px_15px_rgba(var(--terminal-accent-rgb),0.2)] group"
              style={{ "--hover-color": color }}
            >
              <div className="p-2 transition-colors rounded-lg bg-terminal-muted/20 group-hover:bg-terminal-accent/10">
                <Icon size={24} className="transition-colors group-hover:text-terminal-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-terminal-accent/70">{id}</span>
                <span className="transition-colors group-hover:text-terminal-accent">{username}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}