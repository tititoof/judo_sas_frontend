import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios.js', '~/plugins/axios-accessor.ts', { src: '~/plugins/TiptapVuetify', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // AUth module
    '@nuxtjs/auth',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Leaflet
    'nuxt-leaflet',
    // Vue mq
    ['nuxt-mq'],
    '@nuxtjs/recaptcha'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   ** process.env.API_URL,
   */
  axios: {
    baseURL: process.env.API_URL,
    debug: false,
    proxyHeaders: true,
    headers: {
      common: {
        client: '',
        'access-token': '',
        uid: '',
        'token-type': ''
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#4caf50',
          secondary: '#8bc34a',
          accent: '#009688',
          error: '#f44336',
          warning: '#ff5722',
          info: '#cddc39',
          success: '#673ab7'
        }
      }
    }
  },
  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity
    }
  },
  auth: {
    cookie: false,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/sign_in',
            method: 'post',
            propertyName: false
          },
          logout: { url: '/api/auth/sign_out', method: 'post' },
          user: {
            url: '/api/auth/validate_token',
            method: 'get',
            propertyName: 'data'
          }
        },
        tokenRequired: true,
        tokenType: 'bearer',
        autoFetchUser: false
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/admin'
    },
    localStorage: {
      prefix: 'sas_judo_auth.'
    }
  },
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    language: 'FR',   // Recaptcha language (v2)
    siteKey: process.env.CAPTCHA_KEY,    // Site key for requests
    version: 3,     // Version
    size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      presets({ isServer }) {
        return [['@nuxt/babel-preset-app', { loose: true }]]
      },
      plugins: [['istanbul']]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
