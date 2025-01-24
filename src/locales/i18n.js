import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dynamically load translations
const importAllTranslations = () => {
  const context = require.context('./translations', false, /\.json$/);
  const resources = {};

  context.keys().forEach((key) => {
    const langCode = key.match(/\/([a-z\-]+)\.json$/i)[1];
    const [language, country] = langCode.split('-');
    const normalizedLangCode = country
      ? `${language}-${country.toUpperCase()}`
      : language;

    resources[normalizedLangCode] = { translation: context(key) };
  });

  return resources;
};

const resources = importAllTranslations();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
