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

            <ul class="filters__list">
              <!-- Économique -->
              <li>
                <a href="#" class="filters__list__item" title="Économique">
                  <span class="filters__list__item__icon">
                    <i class="fas fa-money-bill-wave"></i>
                  </span>
                  <span class="filters__list__item__text">Économique</span>
                </a>
              </li>
              <!-- Familial -->
              <li>
                <a href="#" class="filters__list__item" title="Familial">
                  <span class="filters__list__item__icon">
                    <i class="fas fa-child"></i>
                  </span>
                  <span class="filters__list__item__text">Familial</span>
                </a>
              </li>
              <!-- Romantique -->
              <li>
                <a href="#" class="filters__list__item" title="Romantique">
                  <span class="filters__list__item__icon">
                    <i class="fas fa-heart"></i>
                  </span>
                  <span class="filters__list__item__text">Romantique</span>
                </a>
              </li>
              <!-- Animaux autorisés -->
              <li>
                <a href="#" class="filters__list__item" title="Animaux autorisés">
                  <span class="filters__list__item__icon">
                    <i class="fas fa-dog"></i>
                  </span>
                  <span class="filters__list__item__text">Animaux autorisés</span>
                </a>
              </li>
            </ul>
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
          <CardList :items="hebergements" />

          <button role="button" type="button" class="btn-more" title="Afficher plus de résultats">Afficher plus</button>
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
      accommodations: [],
      activities: [],
    }
  },
  computed: {
    hebergements () {
      // je veux garder que les éléments pas en trending
      // et qui correspondent au filtre sélectionné dans item.tags

      return this.accommodations
    },
    populaires () {
      // je veux garder que les éléments en trending
      // et qui correspondent au filtre sélectionné dans item.tags

      return this.accommodations
    },
  },
  async mounted () {
    // on attend que notre page soit prête dans le DOM
    await this.$nextTick()

    // axios : requête vers les hébergements
    this.accommodations = await this.$axios.$get('/api/accommodations')
    this.activities = await this.$axios.$get('/api/activities')

    // je veux stocker le résultat dans mon composant
    // docu vue.js : component data
  },
}
</script>
