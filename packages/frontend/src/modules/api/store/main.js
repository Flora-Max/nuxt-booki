/**
 * Permet d'intéragir avec l'API et stocker les données dans le state de l'application.
 */

const state = () => ({})

const actions = {
  /**
   * Récupère les hébergements depuis l'API et les stocke dans le state du module resources.
   */
  async fetchAccomodations ({ commit }) {
    const accomodations = await this.$api.getAccommodations()

    return commit('resources/SET', [ 'accomodations', accomodations ])
  },
}

export default {
  namespaced: true,
  state,
  actions,
}
