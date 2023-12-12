export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts',
        'nuxt-schema-org',
        '@vueuse/nuxt',
        'nuxt-simple-sitemap',
    ],

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

    sitemap: {
        sitemaps: {
            posts: {
                include: [
                    '/blog/**',
                ],
                defaults: {priority: 0.7},
            },
            pages: {
                exclude: [
                    '/blog/**',
                ]
            }
        }
    }
})