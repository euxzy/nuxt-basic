// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Learn NuxtJS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale' },
        { name: 'description', content: 'learn nuxtjs' },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
