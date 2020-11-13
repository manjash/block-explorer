import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

const defaultLanguage = 'en'
const languages = ['en']

export default i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    debug: true,
    whitelist: languages,
    interpolation: {
      escapeValue: false,
    },
  })
