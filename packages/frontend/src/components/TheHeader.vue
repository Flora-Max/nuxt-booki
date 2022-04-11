<template>
  <!-- En-tête -->
  <header class="header container">
    <!-- Logo de Booki -->
    <nuxt-link :to="{ name: 'index' }">
    <picture class="header__logo">
      <source media="(min-width: 768px)" srcset="/logos/booki/desktop.png">
      <img src="/logos/booki/mobile.png" alt="Booki">
    </picture>
    </nuxt-link>


    <!-- Navigation -->
    <nav class="header__nav">
      <ul class="header__nav__list">
        <li class="header__nav__list-item">
          <a href="#hebergements">Hébergements</a>
        </li>

        <li class="header__nav__list-item">
          <a href="#activites">Activités</a>
        </li>

        <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'inscription' }">Inscription</nuxt-link>
        </li>
          <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'connexion' }">Connexion</nuxt-link>
        </li>
          <li class="header__nav__list-item">
          <nuxt-link :to="{ name: 'deconnexion' }">Deconnexion</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
