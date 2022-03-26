/**
 * Permet de stocker les hébergements et activités récupérés depuis l'API.
 */

const state = () => ({
  accomodations: [],
  activities: [],
})

const mutations = {
  SET (state, [ key, value ]) {
    if (state[key] === undefined) {
      return
    }

    state[key] = value
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
