import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  const paragraphs = t('about.paragraphs', { returnObjects: true });

  return (
    <section id="about" className="ml-2">
      <h2 className="text-2xl font-bold">{t('about.title')}</h2>
      <div className="flex flex-col gap-2 p-4 mt-1 rounded bg-lightgblue">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-justify">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
