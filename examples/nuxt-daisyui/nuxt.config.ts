// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/examples/nuxt-daisyui/'
  },
  nitro: {
    output: {
      dir: '../../../dist/examples/nuxt-daisyui'
    }
  }
})
