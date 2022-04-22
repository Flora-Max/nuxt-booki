<template>
  <b-modal
    ref="modal"
    @hidden="$emit('close')"
    @ok="handleSubmit"
    v-model="visible"
    :ok-title="okTitle"
    cancel-title="Fermer"
    :title="title"
  >

    <div>
    <b-form @submit="handleSubmit"
      no-actions>
      <b-form-group
        id="input-group-1"
        label="Nom:"
        label-for="input-1"
        description="Nom de l'activitée"
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
        description="Description de l'activité:"
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
        description="Ville:"
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
          v-model="form.postcode"
          type="text"
          placeholder="Code postal"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ActivityModal",

  props: {
    content: { type: Object, required: true },
    title: { type: String, default: 'Ajouter une activitée' },
    okTitle: { type: String, default: 'Ajouter' },
  },

  data() {
    return {
      visible: true,
      form: {
        name: this.content.name,
        description: this.content.description,
        city: this.content.city,
        postcode: this.content.postcode,
      },
    };
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault()

      //requete POST pour modifier une activitée de notre bdd selon son id
      await this.$axios.$post(`admin/update/activity/${this.content.id}`, this.form)

      this.$emit('ok', event)
      this.$nextTick(() => this.$refs.modal.hide())
    },
  },
};
</script>
