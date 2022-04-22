<template>
  <div class="content container">
    <b-form @submit="handleSubmit"
      no-actions>
      <b-form-group
        id="input-group-1"
        label="Nom:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Nom de l'activitée"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Description:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.description"
          type="text"
          placeholder="Description de l'activitée"
          required
        ></b-form-input>
      </b-form-group>
          <b-form-group
        id="input-group-1"
        label="City"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.city"
          type="text"
          placeholder="Ville"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Code postal:"
        label-for="input-1"
        description="Code postal:"
      >
        <b-form-input
          id="input-1"
          v-model.number="form.postcode"
          type="text"
          placeholder="Code postal"
          required
        ></b-form-input>
      </b-form-group>

      <b-button-group v-if="!noActions">
        <b-button type="reset">Effacer</b-button>
        <b-button variant="primary" type="submit">Envoyer</b-button>
      </b-button-group>
    </b-form>
    </div>
</template>

<script>
import ActivityModal from '../../../components/ActivityModal.vue';
export default {
  components: { ActivityModal },
  name: "AdminActivitiesNew",
  props: {
    content: {}
  },
  data() {
    return {
      visible: true,
      form: {
        name: null,
        description: null,
        city: null,
        postcode: null,
      },
    };
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault()

      //requete POST pour ajouter une activité à notre bdd
      await this.$axios.$post("admin/create/activity", this.form)
      this.$router.push({ name: "admin-dashboard" });
    },
  },
};
</script>

<style scoped>
.h1 {
  margin-top: 50px;
  padding: 50px;
}
.form {
  padding: 50px;
  padding-top: 10px;
  margin-right: 280px;
}
.buttonForm {
  margin-top: 20px;
}
</style>
