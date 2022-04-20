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
          <form @submit.prevent="handleSubmit" id="formInscription">
              <div>
                  <label for="email">E-mail:</label>
                  <input type="email" id="email" v-model="form.email">
              </div>
              <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="form.username">
              </div>
              <div>
                  <label for="password">Mot de passe:</label>
                  <input type="password" id="password" v-model="form.password">
              </div>
              <div>
                 <label for="role">Rôle:</label>

                  <input type="radio" id="client" v-model="role" value="client">
                  <label for="client">Client</label>
                  <div>
                  <input type="radio" id="admin" name="admin"  v-model="role" value="admin">
                  <label for="admin">Admin</label>
                </div>
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
          form: {
            username: '',
            email: '',
            password: '',
            role: null
          }
        }
    },


    methods: {
      handleSubmit (event) {
        console.log(this.form);
        return this.$axios.$post('/register', this.form)
          .then((res) => {
            console.log(res) 
            //return this.$router.redirect({ name: 'index' })
          })
      }
    }
}
</script>