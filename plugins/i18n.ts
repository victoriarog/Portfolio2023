import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import es from '../locales/es.json'
import ru from '../locales/ru.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      es,
      ru
    }
  })

  vueApp.use(i18n)
})