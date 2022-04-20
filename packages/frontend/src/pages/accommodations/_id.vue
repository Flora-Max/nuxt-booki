<template>
  <article>
    <div class="cards-list__item__cover-wrapper">
      <picture class="cards-list__item__cover">
        <source media="(min-width: 992px)" :srcset="content.imageLarge" />
        <source media="(min-width: 768px)" :srcset="content.imageMedium" />
        <img :src="content.imageSmall" alt="Aperçu de l'élément" width="250" />
      </picture>
    </div>

    <div class="cards-list__item__content">
      <header class="cards-list__item__header">
        <h3 class="cards-list__item__title">{{ content.name }}</h3>
      </header>
      <p>
        <span><strong>Description: </strong>{{ content.description }}</span>
      </p>
      <p>
        <span><strong>Ville: </strong>{{ content.city }}</span>
      </p>
      <p>
        <span><strong>Nuit à partir de: </strong>{{ content.price }}€</span>
      </p>

          <aside v-if="content.note !== undefined" class="cards-list__item__stars" :data-stars="accommodations.note">Note de {{ content.note }} sur 5</aside> 

      <nuxt-link :to="{ name: 'reservations-id', params: { id: content.id } }"
        >Reserver</nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "InformationsPage",

  data() {
    return {
      content: {},
    };
  },

  async mounted() {
    //requete vers l'affichage d'un élément hébergement de notre bdd
    this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
  },
};
</script>

<style scoped>
 
</style>