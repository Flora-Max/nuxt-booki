<template>
  <div>
    <!-- Contenu principal -->
    <main class="content container">
      <section>
        <header>
          <h1 class="h1">Inscrivez-vous</h1>
        </header>
      </section>

      <section>
          <form @submit.prevent="handleSubmit">
              <div>
                  <label for="email">E-mail</label>
                  <input type="text" id="email" v-model="email">
              </div>
              <div>
                <label for="email">Username</label>
                <input type="text" id="username" v-model="username">
              </div>
              <div>
                  <label for="password">Mot de passe</label>
                  <input type="password" id="password" v-model="password">
              </div>
              <div>
                  <button type="submit">Envoyer</button>
              </div>
          </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
    name: 'PageInscription',
    data () {
        return {
            email: null,
            username: null,
            password: null,
            
        }
    },

    router: {
      prefetchLinks: false
  },

    methods: {
      handleSubmit (event) {
        return this.$axios.$post('http://localhost:8000/login', { email, username, password })
          .then((res) => {
            console.log(res) 
            return this.$router.redirect({ name: 'index' })
          })
      }
    }
}
</script>