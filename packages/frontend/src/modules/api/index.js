import path from 'path'
import api from '@gtnsimon/nuxt-booki-backend/app.js'

export default function (moduleOptions = {}) {
  // register api middleware under /api/ only for dev
  // change env BOOKI_API_URL for production
  if (this.options.dev) {
    const {
      path: handlerPath = '/api/',
    } = moduleOptions

    this.addServerMiddleware({
      path: handlerPath,
      prefix: false,
      handler: api,
    })
  }

  // register plugin to interact with API client
  this.addPlugin({
    src: path.join(__dirname, 'plugin.js'),
    fileName: 'api/plugin.js',
  })
}
