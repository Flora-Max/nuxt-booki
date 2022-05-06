<template>
  <div class="content container">
    <h1 class="h1">Mes réservations</h1>

    <!--Réservations-->
    <section class="mt-5">
        <b-table
        class="mt-1"
        :fields="['id', 'hebergement.name', 'quantityNight', 'quantityPeople', 'firstNightDate ', 'creationDate', 'actions' ]"
        :items="reservations"
        hover
      >

      <template #cell(actions)="{ item: reservation }">
          <b-button
            variant="outline-primary"
            @click="handleEdit(reservation)"
            :title="reservation.id"
          >Modifier</b-button>

          <b-button
            @click="onDelete(reservation)"
            type="button"
            variant="outline-danger"
            >Supprimer</b-button>
        </template>
      </b-table>
    </section>

    <reservation-modal
      v-if="draft !== null"
      @ok="fetchData"
      @close="draft = null"
      :content="draft"
      :title="Modifier"
      ok-title="Modifier"
    />
  </div>
</template>

<script>
  export default {
    name: "dashboardClient",

    data(){
      return{
        reservations : [],
        draft: null,
        content: {}
      }
    },

    async mounted() {
      await this.fetchData();
      await this.$nextTick();
    },


    methods: {
      async fetchData() {
      this.reservations = await this.$axios.$get('reservation/client/backoffice')
    },

    //méthode pour supprimer une réservation
    async onDelete(reservation) {
    const consent = await this.$bvModal.msgBoxConfirm(
      "Annuler cette réservation"
    );
    if (consent) {
      await this.$axios.$delete(`/reservation/delete/${reservation.id}`);
      return this.fetchData();
      }
    },

    //méthode pour éditer l'hebergement
    handleEdit(reservation) {
      this.draft = reservation
    },
  }
}
</script>
