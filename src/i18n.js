import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzb from "./locale/uzb";
import eng from "./locale/eng";
import rus from "./locale/rus";

const resources = {
  uzb: {
    translation: uzb
  },
  eng: {
    translation: eng
  },
  rus: {
    translation: rus
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uzb", 
    fallbackLng: "eng", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
