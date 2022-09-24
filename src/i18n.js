import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}.json`,
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "qaTestCaseLang",
    },
    react: {
      useSuspense: true,
    },
    fallbackLng: ["en"],
    preload: ["en"],
    interpolation: {
      escapeValue: false,
      //   format: function(value, format, lng) {
      //     if(value instanceof Date)  {
      //       return moment(value).format(format);
      //     }
      //     return value;
      // }
    },
  });

export default i18next;
