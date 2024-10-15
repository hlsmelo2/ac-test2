// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    plugins: [
        '~/plugins/globals',
    ],
    runtimeConfig: {
        public: {
            API_BASE: process.env.API_BASE,
            AUTH_COOKIES_EXPIRATION: process.env.AUTH_COOKIES_EXPIRATION,
        },
    },
    alias: {
        "@": "~/",
    },
});
