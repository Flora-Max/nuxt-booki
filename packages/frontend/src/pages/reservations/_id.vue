<template>
  <div>
    <h1 class="h1">Réservation</h1>
    <b-row>
      <b-col :sm="12" :lg="6">
        <b-form @submit.prevent="submit" id="formReservation">
          <b-form-group
            id="input-group-1"
            class="mt-2"
            label="Nom de l'établissement:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              type="text"
              :value="content.name"
              readonly
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            class="mt-2"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else.">
            <b-form-input
              id="input-1"
              v-model="form.email"
              required
              type="email"
              placeholder="Enter email">
            </b-form-input>
          </b-form-group>

          <b-form-group
            class="mt-2"
            label="Nombre de personne:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="number"
              v-model.number="form.quantityPeople"
              required>
            </b-form-input>
          </b-form-group>

          <b-form-group class="mt-2" label="Nombre de nuits:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="number"
              v-model.number="form.quantityNight"
              required>
            </b-form-input>
          </b-form-group>

          <b-form-group class="mt-2" label="Date de création:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="date"
              v-model="form.creationDate"
              required>
            </b-form-input>
          </b-form-group>

          <b-form-group class="mt-2" label="Date de début de séjour:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="date"
              v-model="form.firstNightDate"
              required>
            </b-form-input>
          </b-form-group>

          <b-button type="submit" class="buttonForm" variant="primary">Reserver</b-button>
        </b-form>
      </b-col>
    </b-row>
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
        hebergementName:''
      },
      revele: false
    };
  },

  async mounted() {
    //requete GET pour récupérer l'id de l'hébergement selectionné
    this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
    this.form.hebergementId = this.content.id
  },

  methods: {

    submit() {
      //requete POST pour envoyer données de formulaire de notre réservation vers la bdd
      if(!(this.form.creationDate <= this.form.firstNightDate) ){
        alert("La date de début de séjour ne peut être antérieur à la date de création")
      }else{
        this.$axios
          .$post(`/reservationForm/${this.content.id}`, this.form)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("error", error);
          })
          window.alert("Merci pour votre reservation")
          this.$router.push({ name: 'index'})
      }
    },
  }
}
</script>

<style scoped>
  .h1{
    margin-top: 50px;
    padding: 50px;
  }
  #formReservation{
    padding: 50px;
    padding-top: 10px;
    /* margin-right: 280px; */
  }
  .buttonForm{
    margin-top: 20px;
  }
</style>
