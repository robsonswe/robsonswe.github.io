import Typewriter from "typewriter-effect";
import { Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-20 text-center">
      <h1 className="flex items-center justify-center mb-4 text-4xl font-pixel md:text-5xl text-terminal-accent">
        <Terminal size={48} className="mr-4 text-terminal-accent" />
        Robson Santana
      </h1>
      <div className="flex items-center justify-center gap-2 text-xl font-terminal md:text-2xl text-terminal-text">
        <span className="text-terminal-accent animate-pulse">$</span>
        <Typewriter
          options={{
            strings: t("hero.titles", { returnObjects: true }),
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </div>
    </header>
  );
};
export default Hero;