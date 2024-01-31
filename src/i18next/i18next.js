import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationHindi from './translationHindi';
import translationEnglish from './translationEnglish';

const resources = {
  _en: {
    translation: translationEnglish,
  },
  _hi: {
    translation: translationHindi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: '_en',
  fallbackLng: '_en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
