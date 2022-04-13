<template>
  <div>
    <!-- Contenu principal -->
    <main class="content container">
      <section>
        <header>
          <h1 class="h1">Réserver</h1>
        </header>
      </section>

      <section>
        <form @submit.prevent="submit" id="formReservation">
          <div>
            <label for="hebergementName">Nom de l'établissement:</label>
            <input
              type="text"
              id="hebergementName"
              readonly
              :value="content.name"
            />
          </div>
          <div>
            <label for="quantityPeople">Nombre de personne:</label>
            <input
              type="number"
              id="quantityPeople"
              v-model.number="form.quantityPeople"
            />
          </div>
          <div>
            <label for="quantityNight">Nombre de nuit</label>
            <input
              type="number"
              id="quantityNight"
              v-model.number="form.quantityNight"
            />
          </div>
          <div>
            <label for="firstNightDate">Date de début de séjour:</label>
            <input
              type="date"
              id="firstNightDate"
              v-model="form.firstNightDate"
            />
          </div>
          <div>
            <label for="creationDate"
              >Date de création de la réservation:</label
            >
            <input type="date" id="creationDate" v-model="form.creationDate" />
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
  name: "PageReservation",

  data() {
    return {
      content: {},
      form: {
        hebergementId: null,
        quantityPeople: 0,
        quantityNight: 0,
        firstNightDate: null,
        creationDate: null,
      },
    };
  },

  async mounted() {
    //requete vers l'affichage d'un élément hébergement de notre bdd
    this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
    this.form.hebergementId = this.content.id
  },

  methods: {
    submit() {
      console.log(this.form);
      //dataForm = JSON.stringify({form})
      //requete pour envoyer données de formulaire de notre réservation vers la bdd
      //return this.$axios.$post('/reservationForm', this.form)
      //.then((res) => {
      // console.log(res)
      // return this.$router.redirect({ name: 'index' })
      this.$axios
        .$post(`/reservationForm/${this.content.id}`, this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>