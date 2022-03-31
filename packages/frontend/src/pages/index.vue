<template>
  <div>
    <!-- Contenu principal -->
    <main class="content container">
      <!-- Section de recherche -->
      <section>
        <header>
          <h1 class="h1">Trouvez votre hébergement pour des vacances de rêve</h1>
        </header>

        <p class="mt-1">En plein centre ville ou en pleine nature</p>

        <!-- formulaire de recherche -->
        <form action="index.html" method="GET" role="search">
          <div class="search-input">
            <!-- label -->
            <label for="search" class="search-input__icon">
              <i class="fas fa-map-marker-alt"></i>
            </label>
            <!-- zone de texte -->
            <div class="search-input__text">
              <input type="search" id="search" name="search" placeholder="Paris, France">
            </div>
            <!-- bouton d'envoi -->
            <button type="submit" class="search-input__button" aria-label="Rechercher">
              <span class="search-input__button__text">Rechercher</span>
              <i class="fas fa-search search-input__button__icon"></i>
            </button>
          </div>
        </form>

        <!-- Filtres -->
        <article id="filters">
          <div class="filters">
            <header>
              <h2 class="filters__title">Filtres</h2>
            </header>

            <!-- Liste des filtres disponibles -->
            <filtres-liste
              v-model="selectedFilter"
              :filters="[]"
            />
            <!-- <filtres-liste
              @change="selectedFilter = $event"       //idem que le model
              :filters="[]"
              :selected="selectedFilter"
            /> -->
          </div>

          <div class="hint">
            <i class="fas fa-info"></i>
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
        </article>
      </section>

      <div class="cards-group">
        <!-- Hébergements -->
        <section id="hebergements" class="cards-group__item">
          <header>
            <h2 class="h2">Hébergements à Marseille</h2>
          </header>

          <!-- Résultats -->
          <CardList :items="hebergements"/>

          <button @click="addDisplay" role="button" type="button" class="btn-more" title="Afficher plus de résultats">Afficher plus</button>
        </section>

        <!-- Les plus populaires -->
        <section id="populaires" class="cards-group__item">
          <header>
            <h2 class="h2 h2--icon">
              <span>Les plus populaires</span>
              <i class="fas fa-chart-line"></i>
            </h2>
          </header>

          <!-- Résultats -->
          <CardList :items="populaires" variant="paysage" />
        </section>
      </div>

      <!-- Activités à Marseille -->
      <section id="activites">
        <header>
          <h2 class="h2">Activités à Marseille</h2>
        </header>

        <!-- Résultats -->
        <CardList
          :items="activities"
          id="grid-activities"
          class="grid-activities"
          variant="jumbo"
        />
      </section>
    </main>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import CardList from '../components/CardList.vue'
export default {
  components: { Card, CardList },
  name: 'IndexPage',
  data () {
    return {
      accommodations: [], // résultats de l'API pour les hébergements
      activities: [], // résultats de l'API pour les activités
      selectedFilter: null, // filtre sélectionné
      filters: ['economic', 'family', 'pets', 'romantic'],
    }
  },

// pas de this en () =>
// méthode [...///] peut remplacer push
  methods: {
    //méthode appelé au click sur le bouton, retourne un complément d'affichage
    addDisplay() {
      return this.accommodations.push(this.accommodations['1'], this.accommodations['2'])
    }
  },

  computed: {
    //retourne les éléments en tendance
    trending () {
      return this.accommodations.filter(accomodation => accomodation.trending === true)
    },

    notTrending () {
      //retourne les éléments pas en tendance
      return this.accommodations.filter(accomodation => accomodation.trending === false)
    },

    hebergements () {
      // retourne les éléments pas en tendance et qui correspondent au filtre sélectionné dans item.tags
       //si pas de filtres slectionnés renvoie liste par défault
      if (!this.selectedFilter) return this.notTrending
      return this.notTrending.filter(accomodation => accomodation.tags.includes(this.selectedFilter));
    },

    populaires () {
      // retourne les éléments en tendance et qui correspondent au filtre sélectionné dans item.tags
      //si pas de filtres slectionnés renvoie liste par défault
      if (!this.selectedFilter) return this.trending
      return this.trending.filter(accomodation => accomodation.tags.includes(this.selectedFilter));
    },
  },

  async mounted () {
    // on attend que notre page soit prête dans le DOM
    await this.$nextTick()

    // axios : requête vers les hébergements
    this.accommodations = await this.$axios.$get('/api/accommodations')
    // axios : requête vers les activités
    this.activities = await this.$axios.$get('/api/activities')
  },
}
</script>
