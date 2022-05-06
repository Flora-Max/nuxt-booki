<template>
  <!-- En-tête -->
  <header class="header container">
    <!-- Logo de Booki -->
    <nuxt-link :to="{ name: 'index' }" class="header__logo">
      <picture>
        <source media="(min-width: 768px)" srcset="/logos/booki/desktop.png">
        <img src="/logos/booki/mobile.png" alt="Booki">
      </picture>
    </nuxt-link>


    <!-- Navigation -->
    <nav class="header__nav">
      <ul class="header__nav__list">
        <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'index', hash: '#hebergements' }">Hébergements</nuxt-link>
        </li>

        <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'index', hash: '#activites' }">Activités</nuxt-link>
        </li>

        <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'inscription' }">Inscription</nuxt-link>
        </li>
        <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'connexion' }">
            <i class="fas fa-sign-in-alt"></i>
          </nuxt-link>
        </li>
        <b-dropdown variant="light" id="dropdown" class="header__nav__list-item" text="Accès">
          <b-dropdown-item :to="{ name: 'admin-dashboard' }">Admin</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'dashboardClient' }">Mes réservations</b-dropdown-item>
        </b-dropdown>
        <!-- <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'deconnexion' }">
            <i class="fas fa-sign-out-alt"></i>
          </nuxt-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
  #dropdown{
    display: block;
    padding: 40px 40px 10px;
    border-top: 2px solid transparent;
    color: #000;
    line-height: 32px;
  }

  #dropdown:hover {
    border-color: #0065fc;
    color: #0065fc;
  }

</style>
