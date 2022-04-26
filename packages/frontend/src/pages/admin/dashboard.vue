<template>
  <div class="content container">
    <h1 class="h1">Espace d'administration</h1>

    <!--Hebergement-->
    <section class="mt-5">
      <div class="d-flex align-items-center">
        <h2 class="h5 flex-grow-1">Liste des hébergements</h2>

        <b-button
          :to="{ name: 'admin-accommodations-new' }"
          variant="outline-success"
          >Importer un nouvel établissement</b-button
        >
      </div>

      <b-table
        class="mt-1"
        :fields="['id', 'name', 'city', 'price', 'actions']"
        :items="accommodations"
        hover
      >
        <template #cell(actions)="{ item: accommodation }">
          <b-button
            variant="outline-primary"
            @click="handleEdit(accommodation)"
            :title="accommodation.name"
          >Modifier</b-button>

          <b-button
            @click="onDelete(accommodation)"
            type="button"
            variant="outline-danger"
            >Supprimer</b-button
          >
        </template>
      </b-table>
    </section>

    <accommodation-modal
      v-if="draftAccommodation !== null"
      @ok="fetchData"
      @close="draftAccommodation = null"
      :content="draftAccommodation"
      :title="`Modifier l'hébergement ”${draftAccommodation.name}”`"
      ok-title="Modifier"
    />

  <!--Acitivités-->
    <section class="mt-5">
      <div class="d-flex align-items-center">
        <h2 class="h5 flex-grow-1">Liste des activitées</h2>

        <b-button
          :to="{ name: 'admin-activities-new' }"
          variant="outline-success"
          >Importer une nouvelle activitée</b-button
        >
      </div>

      <b-table
        class="mt-1"
        :fields="['id', 'name','city', 'postcode' , 'actions']"
        :items="activities"
        hover
      >
        <template #cell(actions)="{ item: activity }">
          <b-button
            variant="outline-primary"
            @click="handleEditActivity(activity)"
            :title="activity.name"
          >Modifier</b-button>

          <b-button
            @click="onDeleteActivity(activity)"
            type="button"
            variant="outline-danger"
            >Supprimer</b-button
          >
        </template>
      </b-table>
    </section>

    <activity-modal
      v-if="draftActivity !== null"
      @ok="fetchData"
      @close="draftActivity = null"
      :content="draftActivity"
      :title="`Modifier l'activité ”${draftActivity.name}”`"
      ok-title="Modifier"
    />

  </div>
</template>

<script>
export default {
  name: "AdminDashboardPage",

  data() {
    return {
      accommodations: [],
      activities: [],
      content: {},
      draftAccommodation: null,
      draftActivity: null,
    };
  },

  async mounted() {
    await this.$nextTick();
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      // requête GET pour récupérer les hébergements et les activitées de notre bdd
      this.accommodations = await this.$axios.$get("/");
      this.activities = await this.$axios.$get("/activity");
    },

    //méthode pour supprimer un hébergement
    async onDelete(accommodation) {
      const consent = await this.$bvModal.msgBoxConfirm(
        "Supprimer cet hébergement"
      );

      if (consent) {
        await this.$axios.$delete(
          `/admin/hebergement/delete/${accommodation.id}`
        );

        return this.fetchData();
      }
    },
    handleEdit(accommodation) {
      this.draftAccommodation = accommodation
    },

    //activity
    async onDeleteActivity(activity) {
      const consent = await this.$bvModal.msgBoxConfirm(
        "Supprimer cette activité"
      );

      if (consent) {
        await this.$axios.$delete(
          `/admin/activity/delete/${activity.id}`
        );

        return this.fetchData();
      }
    },

    handleEditActivity(activity) {
      this.draftActivity = activity
    },

  },
};
</script>
