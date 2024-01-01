import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // 使用 HttpBackend
  .use(initReactI18next)
  .init({
    lng: "zh", // 默认语言
    fallbackLng: "zh",
    backend: {
      loadPath: '/locales/{{lng}}.json', // 加载翻译文件的路径
    },
    keySeparator: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
