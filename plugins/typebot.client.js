// plugins/typebot.client.js
import { defineNuxtPlugin } from '#app'
import TypebotVue from '@alisaitteke/typebot-vue'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(TypebotVue)
})
