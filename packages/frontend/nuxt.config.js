export default {
  ssr: false, // SPA
  telemetry: false, // disable tracking
  components: true, // enable components auto loading

  srcDir: 'src', // where source code is
  buildDir: 'dist', // where the build outputs

  head: {
    htmlAttrs: {
      lang: 'fr', // in which language is the site
    },
    meta: [
      { charset: 'utf-8' }, // HTML5 document encoding
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }, // XHTML document encoding
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, // how to behave for the responsive
      { name: 'description', hid: 'description', content: 'Avec Booki, trouvez votre hébergement pour des vacances de rêve !' },
    ],
    link: [
      // <!-- FontAwesome -->
      { rel: 'preload', as: 'style', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css' },
      { rel: 'preload', as: 'style', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/solid.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/solid.min.css' },

      // <!-- Raleway font -->
      { rel: 'preconnect', crossorigin: true, href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap' },
    ],
    title: 'Booki - Trouvez votre hébergement pour des vacances de rêve',
  },

  css: [
    'minireset.css', // reset browser default styling
    '~/assets/styles/main.scss', // sass refactoring
    '~/assets/styles/booki.css', // original css
  ],

  modules: [
    '~/modules/api/', // our API
    '@nuxtjs/axios', // library for HTTP requests
  ],

  build: {
    loaders: {
      scss: {
        // import variables for components with <style lang="scss" />
        additionalData: `
          @import "@/assets/styles/variables";
        `
      },
    },
  },

  vue: {
    config: {
      devtools: false,
      productionTip: false,
    },
  },

  publicRuntimeConfig: {
    api: {
      baseURL: process.env.BOOKI_API_URL || '/api/', // base URL used by $api
    },
  },
}
