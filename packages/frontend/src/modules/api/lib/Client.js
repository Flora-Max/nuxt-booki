import { NuxtAxiosInstance } from '@nuxtjs/axios'

/**
 * Client JavaScript basé sur axios pour intéragir avec l'API Booki.
 */
export default class Client {
  /**
   * @param {object} ctx Nuxt Context
   */
  constructor (ctx) {
    this.ctx = ctx
    this._api = null
  }

  /**
   * @returns {NuxtAxiosInstance}
   */
  get api () {
    if (!this._api) {
      // create a custom instance to change baseURL
      const api = this.ctx.$axios.create()

      api.setBaseURL(this.ctx.$config.api.baseURL)
      this._api = api
    }

    return this._api
  }

  /**
   * Récupère la liste des hébergements.
   *
   * @returns {Promise<Accommodations>}
   */
  getAccommodations () {
    return this.api.$get('/accommodations')
  }
}
