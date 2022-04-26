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
    <formulaire
      v-model="form"
      @submit="handleSubmit"
      no-actions
    />
  </b-modal>
</template>

<script>
export default {
  name: "AccommodationModal",

  props: {
    content: { type: Object, required: true },
    title: { type: String, default: 'Ajouter un hébergement' },
    okTitle: { type: String, default: 'Ajouter' },
  },

  data() {
    return {
      visible: true,
      form: {
        name: this.content.name,
        city: this.content.city,
        description: this.content.description,
        category: this.content.category,
        price: this.content.price,
        postcode: this.content.postcode,
        trend: this.content.trend,
      },
    };
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault()

      //requete POST pour modifier un hebergement de notre bdd selon son id
      await this.$axios.$post(`admin/update/hebergement/${this.content.id}`, this.form)

      this.$emit('ok', event)
      this.$nextTick(() => this.$refs.modal.hide())
    },
  },
};
</script>


