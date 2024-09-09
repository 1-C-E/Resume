export default defineNuxtConfig({
  ssr: false, 
  generate: {
    routes: []
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: { 
    classSuffix: '',
     preference: 'light'
  },
  tailwindcss: {
    cssPath:'~/assets/css/tailwind.css',
  }
})