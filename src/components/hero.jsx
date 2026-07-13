import { Mail, Linkedin, Github } from "lucide-react";

const contactLinks = [
  { href: "mailto:robsonssdev@gmail.com", label: "robsonssdev@gmail.com", Icon: Mail },
  { href: "https://linkedin.com/in/robsonswe/", label: "linkedin/robsonswe", Icon: Linkedin },
  { href: "https://github.com/robsonswe", label: "github/robsonswe", Icon: Github },
];

const Hero = () => {
  return (
    <header className="pt-28 pb-[72px] md:pt-32 md:pb-20 text-center">
      <h1 className="hero-name text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
        Robson Santana
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {contactLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink hover:text-primary transition-colors duration-200 group"
          >
            <Icon size={16} className="text-muted group-hover:text-primary transition-colors duration-200" />
            {label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Hero;
