const state = () => ({
  me: null, // informations de notre utilisateur
})

const mutations = {
  // on met à jour les infos de l'utilisateur connecté
  SET_ME (state, me) {
    state.me = me
  },
}

const actions = {
  // on sauvegarde les informations de l'utilisateur connecté
  me ({ commit }, me) {
    commit('SET_ME', me)
  },
}

const getters = {
  // on vérifie si on est connecté
  isLoggedIn ({ me }) {
    return me !== null
  },
}

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters,
}
