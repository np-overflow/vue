// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/examples/nuxt-daisyui/' : undefined
  },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  routeRules: {
    "/*": {
      prerender: true
    }
  }
})
