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
        <b-form class="mt-5" @reset="onReset" @submit.prevent="handleSubmit" id="formInscription">
          <!--Email-->
          <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Entrer votre email"
              required
            >
            </b-form-input>
          </b-form-group>

          <!--Username-->
          <b-form-group id="input-group-2" label="Username:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.username"
            placeholder="Entrer un username"
            required
            type="text"
            >
            </b-form-input>
          </b-form-group>

          <!--Mot de passe-->
          <b-form-group id="input-group-3" label="Mot de passe:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Entrer un mot de passe"
            required
            type="password"
            >
            </b-form-input>
          </b-form-group>

          <b-button class="mt-3" type="submit" variant="outline-primary">Submit</b-button>
          <b-button class="mt-3" type="reset" variant="outline-danger">Reset</b-button>
        </b-form>
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
            //isAdmin = 0
          }
        }
    },
    methods: {
      async handleSubmit (event) {
          await this.$axios.$post('/register', this.form)
          this.$router.push({ name: "index" });
      },


      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>
