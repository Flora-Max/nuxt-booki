<template>
  <div>
    <h1 class="h1">Réservation</h1>
    <b-form @reset="onReset" @submit.prevent="onSubmit" id="formReservation">
      <b-form-group
        id="input-group-1"
        label="Nom de l'établissement:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          :value="content.name"
          required
          readonly
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre de personne:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model.number="form.quantityPeople"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre de nuits:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model.number="form.quantityNight"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date de création:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="date"
          v-model="form.creationDate"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date de début de séjour:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="date"
          v-model="form.firstNightDate"
          required>
        </b-form-input>
      </b-form-group>
       <!-- <modale></modale> -->
      <button class="btn" type="submit">Je réserve</button>
    </b-form>  
  </div>
</template>

<script>
// import Modale from '../../components/Modale.vue';

export default {
  name: "PageReservation",
  // components: {
  //   'modale': Modale
  // },
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
    onReset () {
      console.log('reset')
    },
    onSubmit() {
      //requete POST pour envoyer données de formulaire de notre réservation vers la bdd
      this.$axios
        .$post(`/reservationForm/${this.content.id}`, this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error", error);
        })
        this.$router.push({ name: 'adminDisplay'})
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
    margin-right: 280px;
  }
  .buttonForm{
    margin-top: 20px;
  }
</style>