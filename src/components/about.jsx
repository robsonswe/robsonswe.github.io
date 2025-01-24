import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t("about.paragraphs", { returnObjects: true })

  return (
    <section id="about" className="h-full">
      <h2 className="pb-4 mb-6 text-5xl font-bold border-b text-lightgray border-midgray">
        {t("about.title").toUpperCase()}
      </h2>
      <div className="space-y-6 text-lg leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="p-6 border rounded-lg bg-lightgblue border-midgray"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
