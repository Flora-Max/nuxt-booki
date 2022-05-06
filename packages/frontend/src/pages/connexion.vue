<template>
  <div>
    <!-- Contenu principal -->

    <main class="content container">
      <section>
        <header>
          <h1 class="h1">Connectez-vous</h1>
        </header>
      </section>
      <!--Username-->
      <section>
        <b-form @submit.prevent="login">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-2"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              placeholder="Entrer un username"
              required
              type="text"
            >
            </b-form-input>
          </b-form-group>

          <!--Mot de passe-->
          <b-form-group
            id="input-group-2"
            label="Mot de passe:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              placeholder="Entrer un mot de passe"
              required
              type="password"
            >
            </b-form-input>
          </b-form-group>

          <b-button class="mt-3" type="submit" variant="outline-primary"
            >Submit</b-button
          >
          <b-button class="mt-3" type="reset" variant="outline-danger"
            >Reset</b-button
          >
        </b-form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "PageConnexion",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async login() {
      try {
        // on extrait le token de la réponse API
        const { token } = await this.$axios.$post("/login", this.form)

        // on sauvegarde le token dans le localStorage pour le récupérer
        // lorsque l'utilisateur reviendra sur notre app (F5 ou nouvel onglet ou fermeture/ouverture du navigateur)
        window.localStorage.setItem('token', token);
        //on envoie le token à l'API
        const me = await this.$axios.$get("/auth/me");

        await this.$store.dispatch('auth/me', me)
        // on redirige l'utilisateur vers la page d'accueil
        this.$router.push({ name: "index" })
      } catch (err) {
        /*this._vm.$bvToast.toast('Identifiant ou mot de passe invalide !', {
          title: 'Erreur de connexion',
          autoHideDelay: 5000,
          variant: 'danger',
        })*/
        // alert('Identifiant ou mot de passe invalide')
      }
    },
  },
};
</script>
