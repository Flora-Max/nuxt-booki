<template>
  <div>
    <h1 class="h1">Ajout d'un nouvel établissement</h1>

    <formulaire
      v-model="form"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
export default {
  name: "AdminAccommodationsNew",
  data() {
    return {
      form: {
        name: null,
        description: null,
        price: null,
        city: null,
        postcode: null,
        category: null,
        trend: false,
      },
    }
  },
  methods: {
    async handleSubmit() {
      await this.$axios.$post("admin/create/hebergement", this.form)
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
