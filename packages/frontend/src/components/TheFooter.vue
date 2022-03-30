<template>
    <!-- Pied de page -->
    <footer class="footer">
      <nav class="container">
        <div class="footer__container">
          <!-- À propos -->
          <section class="footer__section">
            <header>
              <h2 class="footer__section__title h2">À propos</h2>
            </header>

            <ul class="footer__section__list">
              <li class="footer__section__list-item">
                <a href="#">Fonctionnement du site</a>
              </li>
              <li class="footer__section__list-item">
                <a href="#">Conditions générales de vente</a>
              </li>
              <li class="footer__section__list-item">
                <a href="#">Données et confidentialité</a>
              </li>
            </ul>
          </section>

          <!-- Nos hébergements -->
          <section class="footer__section">
            <header>
              <h2 class="footer__section__title h2">Nos hébergements</h2>
            </header>

            <ul class="footer__section__list">
              <li class="footer__section__list-item">
                <a href="#">Charte qualité</a>
              </li>
              <li class="footer__section__list-item">
                <a href="#">Soumettre votre hôtel</a>
              </li>
            </ul>
          </section>

          <!-- Assistance -->
          <section class="footer__section">
            <header>
              <h2 class="footer__section__title h2">Assistance</h2>
            </header>

            <ul class="footer__section__list">
              <li class="footer__section__list-item">
                <a href="#">Centre d'aide</a>
              </li>
              <li class="footer__section__list-item">
                <a href="#">Nous contacter</a>
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </footer>

</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
