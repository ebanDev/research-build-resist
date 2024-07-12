export default defineNuxtConfig({
  modules: [
      '@nuxt/image-edge',
      '@nuxtjs/google-fonts',
      'nuxt-schema-org',
      '@nuxtjs/sitemap',
      '@vueuse/nuxt',
      'nuxt-icon',
      "@nuxtjs/i18n"
  ],

  i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr',
      vueI18n: './i18n.config.ts'
  },

  build: {
      transpile: ['vue-notion'],
  },

  routeRules: {
      '/': {prerender: true},
      '/articles': {prerender: true},
  },

  image: {
      format: ['avif', 'webp', 'jpg'],
      provider: 'ipx',
      ipx: {
          modifiers: {
              format: 'avif',
          },
      },
  },

  app: {
      head: {
          title: 'Eban Rami',
          meta: [
              {charset: 'utf-8'},
              {name: 'viewport', content: 'width=device-width, initial-scale=1'},
              {name: 'theme-color', content: '#2E6934'},
              {name: 'apple-mobile-web-app-status-bar-style', content: '#2E6934'},
              {name: 'lang', content: 'fr'},
              {name: 'author', content: 'Eban Rami'},
              {name: 'description', content: 'i’m a student building in the realms of sysadmin, web development, and cybersecurity to catalyze radical change'}
          ],
          htmlAttrs: {
              lang: 'fr'
          }
      }
  },

  site: {
      url: 'https://eban.eu.org',
  },

  sitemap: {
      discoverImages: false
  },

  googleFonts: {
      download: true,
      families: {
          'Poppins': [100, 200, 300, 400, 500, 600, 700, 800],
          'DM Serif Display': true
      }
  },

  css: [
      'normalize.css/normalize.css',
      '@/assets/scss/main.scss',
  ],

  compatibilityDate: '2024-07-12',
})
