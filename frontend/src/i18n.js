import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

// the translations
const resources = {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  };

i18n
  // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
    fallbackLng: ["en", "fr"],

    interpolation: {
      escapeValue: false
    }, 
    react: {
        wait: true
      }
  });


export default i18n;