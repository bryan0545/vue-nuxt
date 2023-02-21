// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": "/<rootDir>",
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/css/global.css",
        },
      ],
    },
  },
});
