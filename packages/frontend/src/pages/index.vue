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
        <form @submit.prevent="getValue" action="index.html" method="GET" role="search">
          <div class="search-input">
            <!-- label -->
            <label for="search" class="search-input__icon">
              <i class="fas fa-map-marker-alt"></i>
            </label>
            <!-- zone de texte -->
            <div class="search-input__text">
              <input v-model="valueCity" type="search" id="search" name="search" placeholder="Paris, France">
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
            <filters-list
              @change="onFilterChange"
              :value="selectedFilter"
            />
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
            <h2 class="h2">Hébergements à {{ city }}</h2>
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
          <h2 class="h2">Activités à {{ city }}</h2>
        </header>

        <!-- Résultats -->
        <CardList
          :items="activitiesCity"
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
import FiltersList from '../components/FiltersList.vue'
export default {
  components: { Card, CardList, FiltersList },
  name: 'IndexPage',

  data () {
    return {
      accommodations: [], // résultats de l'API pour les hébergements
      activities: [], // résultats de l'API pour les activités
      selectedFilter: null, // filtre sélectionné
      //filters: ['economic', 'family', 'pets', 'romantic'],
      city: 'Marseille',
      valueCity: 'Marseille',

    }
  },


// pas de this en () =>
// méthode [...///] peut remplacer push
  methods: {
    //méthode appelé au click sur le bouton, retourne un complément d'affichage
    addDisplay() {
      this.accommodations = [].concat(this.accommodations, this.accommodations.slice(0, 6))
    },
   //méthode appelé au click de la searchBar, change titre ac le nom de la ville renseignée par l'utilisateur
    getValue() {
      this.city = this.valueCity
      //return city.charAt(0).toUppercase() + city.slice(1)
      const str1 = this.city;
      const str2 = str1.charAt(0).toUpperCase() + str1.slice(1)
      this.city = str2;
    },
    onFilterChange (value) {
      if (value === this.selectedFilter) {
        this.selectedFilter = null
      } else {
        this.selectedFilter = value
      }
    }
  },

  computed: {

    hebergements () {
      // retourne les éléments pas en tendance et qui correspondent au filtre sélectionné dans item.tags
       //si pas de filtres slectionnés renvoie liste par défault
        return this.accommodations
        .filter((hebergement) => (
          hebergement.trend === false && // on ne garde que ceux qui  ne sont pas en tendance
          hebergement.city === this.city && // qui sont dans la ville sélectionnée par le formulaire
          (this.selectedFilter ? hebergement.category === this.selectedFilter : true) // et qui correspondent au filtre
        )
      )
    },

    populaires () {
      // retourne les éléments en tendance et qui correspondent au filtre sélectionné dans item.tags
      //si pas de filtres slectionnés renvoie liste par défault
      return this.accommodations
        .filter(hebergement => (
          hebergement.trend === true &&
          hebergement.city === this.city &&
          (this.selectedFilter ? hebergement.category === this.selectedFilter : true)
        ));
    },

    activitiesCity() {
      //retourne les éléments activités en fonction de la ville sélectionnée
      return this.activities.filter((activity) => activity.city == this.city);
    }
  },

  async mounted () {
    // axios : requête vers les hébergements
    //this.accommodations = await this.$axios.$get('/api/accommodations')
    this.accommodations = await this.$axios.$get('/')
    
    // axios : requête vers les activités
    this.activities = await this.$axios.$get('/activity')
  },
}
</script>
