export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts',
        'nuxt-simple-sitemap',
        'nuxt-schema-org',
        '@vueuse/nuxt',
    ],

    build: {
        transpile: ['vue-notion'],
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
})