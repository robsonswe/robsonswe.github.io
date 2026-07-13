import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true });

  return (
    <section id="about" className="mb-24">
      <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
        {t("about.title")}
      </div>
      <div className="w-12 h-px mb-8 bg-primary/40" />

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-ink/85 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
