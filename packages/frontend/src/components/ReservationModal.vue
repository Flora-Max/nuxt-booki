<template>
  <b-modal
    ref="modal"
    @hidden="$emit('close')"
    @ok="handleSubmitReservation"
    v-model="visible"
    :ok-title="okTitle"
    cancel-title="Fermer"
    :title="title"
  >

    <div>
    <b-form @submit="handleSubmitReservation"
      no-actions>
      <b-form-group
        id="input-group-1"
        label="Nom:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.hebergement"
          readonly
          type="text"
          placeholder="Nom de l'établissement"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Nombre de nuits:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model.number="form.quantityNight"
          type="number"
          placeholder="Nombre de nuits"
          required
        ></b-form-input>

      </b-form-group>
          <b-form-group
        id="input-group-3"
        label="Nombre de personne:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model.number="form.quantityPeople"
          type="number"
          placeholder="Nombre de personne: "
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Date de début de séjour:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.firstNightDate"
          type="date"
          placeholder="Date de début de séjour:"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Date de création de la demande:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.creationDate"
          type="date"
          placeholder="Date de création de la demande:"
          required
        ></b-form-input>
      </b-form-group>

    </b-form>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ReservationModal",

  props: {
    content: { type: Object, required: true },
    title: { type: String, default: 'Modifier ma réservation' },
    okTitle: { type: String, default: 'Ajouter' },
  },

  data() {
    return {
      visible: true,
      form: {
        name: this.content.hebergment,
        quantityNight: this.content.quantityNight,
        quantityPeople: this.content.quantityPeople,
        firstNightDate: this.content.firstNightDate,
        creationDate: this.content.creationDate,
      },
    };
  },

  methods: {
    async handleSubmitReservation(event) {
      event.preventDefault()
      //requete POST pour modifier une reservation de notre bdd selon son id
      await this.$axios.$post(`reservation/update/${this.content.id}`, this.form)
      this.$emit('ok', event)
      this.$nextTick(() => this.$refs.modal.hide())
      alert('Demande de modification prise en compte, vous allez recevoir un mail de confirmation')
    },
  },
};
</script>
