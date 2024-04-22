// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
        "vue3-carousel-nuxt",
        "nuxt-icon",
        "@nuxtjs/google-fonts",
        "@nuxtjs/tailwindcss"
    ],
	googleFonts: {
		"Noto+Sans": true,
	},
})