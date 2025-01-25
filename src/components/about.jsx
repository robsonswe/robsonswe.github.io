import { useTranslation } from "react-i18next"
import { User } from "lucide-react"

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t("about.paragraphs", { returnObjects: true })

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
    </section>
  )
}

