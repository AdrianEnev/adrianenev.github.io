// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json'; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            en: en
        },
      },
      fr: {
        translation: {
          // French translations
        },
      },
      // Add more languages as needed
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
