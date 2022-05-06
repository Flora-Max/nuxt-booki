import { main, resources } from '~/modules/api/store'
import Client from '~/modules/api/lib/Client.js'


export default function (ctx, inject) {
  // register vuex module to store our API data and customs actions
  ctx.store.registerModule([ 'api' ], main, { preserveState: false }) // /!\ false for CSR
  ctx.store.registerModule([ 'api', 'resources' ], resources, { preserveState: false }) // /!\ false for CSR

  // create a new Client for our API
  inject('api', new Client(ctx))
}
