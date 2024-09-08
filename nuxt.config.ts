// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Отключаем серверный рендеринг
  generate: {
    routes: [] // Указываем пустой массив маршрутов
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