export default function (ctx, inject) {
  // on ajoute notre token à toutes les requêtes
  ctx.$axios.onRequest(function (config) {
    const token = window.localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  })

  // on ajoute dans notre application les informations sur l'utilisateur connecté
  const auth = {
    get isLoggedIn () {
      return ctx.store.getters['auth/isLoggedIn']
    },
    get user () {
      return ctx.store.state.auth.me
    },
  }

  inject('auth', auth)
}
