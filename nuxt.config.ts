import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "dayjs-nuxt",
    "@nuxtjs/google-fonts",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    download: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Red Hat Display": [300, 400, 500, 600, 700, 800, 900],
      "Kantumruy Pro": [100, 200, 300, 400, 500, 600, 700],
      Battambang: [100, 300, 400, 700, 900],
    },
  },
});
