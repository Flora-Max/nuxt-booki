<template>
  <b-form @submit.prevent="onSubmit" class="form">
    <!-- Nom -->
    <b-form-group
      id="input-group-1"
      label="Nom de l'établissement:"
      label-for="input-1"
      required
    >
      <b-form-input
        id="input-1"
        @input="setForm('name', $event)"
        :value="form.name"
        type="text"
        placeholder="Nom de l'établissement"
        required
      ></b-form-input>
    </b-form-group>

    <!-- Description -->
    <b-form-group id="input-group-3" label="Description:" label-for="input-3">
      <b-form-textarea
        id="input-3"
        @input="setForm('description', $event)"
        :value="form.description"
        placeholder="Description de l'établissement"
        rows="5"
      ></b-form-textarea>
    </b-form-group>

    <!-- Prix -->
    <b-form-group
      id="input-group-3"
      label="Prix de la nuit:"
      label-for="input-3"
    >
      <b-form-input
        id="input-3"
        @input="setForm('price', parseInt($event, 10))"
        :value="form.price"
        placeholder="Prix de la nuit"
        required
        type="number"
      ></b-form-input>
    </b-form-group>

    <!-- Ville -->
    <b-form-group id="input-group-2" label="Ville:" label-for="input-2">
      <b-form-input
        id="input-2"
        @input="setForm('city', $event)"
        :value="form.city"
        placeholder="Ville:"
        required
      ></b-form-input>
    </b-form-group>

    <!-- Code postal -->
    <b-form-group id="input-group-3" label="Code postal:" label-for="input-3">
      <b-form-input
        id="input-3"
        @input="setForm('postcode', parseInt($event, 10))"
        :value="form.postcode"
        placeholder="Code postal"
        required
        type="number"
      ></b-form-input>
    </b-form-group>

    <!-- Catégorie -->
    <b-form-group id="input-group-3" label="Categorie:" label-for="input-3">
      <b-form-select
        id="input-3"
        @input="setForm('category', $event)"
        :value="form.category"
        :options="categories"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-3" label="Categorie:" label-for="input-3">
      <b-form-checkbox
        @input="setForm('trend', $event)"
        :checked="form.trend"
        name="check-button"
        switch
      >
        Afficher en tendance
      </b-form-checkbox>
    </b-form-group>

    <br>

    <b-button-group v-if="!noActions">
      <b-button type="reset">Effacer</b-button>
      <b-button variant="primary" type="submit">Envoyer</b-button>
    </b-button-group>
  </b-form>
</template>


<script>
export default {
  name: "Formulaire",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    noActions: { type: Boolean, default: false },
    value: { type: Object, default: () => ({}) },
  },

  watch: {
    value(value) {
      this.form = value;
    },
  },

  data() {
    return {
      form: this.value,
      categories: [
        { text: "Select One", value: null },
        { text: "Romantique", value: 'romantic' },
        { text: "Familial", value: 'family' },
        { text: "Économique", value: 'economic' },
        { text: "Animaux autorisés", value: 'pets' },
      ],
    };
  },

  methods: {
    setForm(key, value) {
      const form = Object.assign({}, this.form);

      if (form[key] !== undefined) {
        form[key] = value;
      }

      this.$emit("change", form);
    },
    onSubmit () {
      this.$emit('submit', this.form)
    },
  },
};
</script>

<style lang="scss">
.formulaire {
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
}
</style>
