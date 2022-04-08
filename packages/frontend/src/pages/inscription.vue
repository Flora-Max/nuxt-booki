<template>
  <div>
    <!-- Contenu principal -->
    <main class="content container">
      <section>
        <header>
          <h1 class="h1">Inscrivez-vous</h1>
        </header>
      </section>

      <section>
          <form>
              <div>
                  <label for="email">E-mail</label>
                  <input type="text" id="email" v-model="email">
              </div>
              <div>
                  <label for="password">Mot de passe</label>
                  <input type="password" id="password" v-model="password">
              </div>
              <div>
                  <button type="submit">Envoyer</button>
              </div>
          </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
    name: 'PageInscription',
    data () {
        return {
            email: null,
            password: null,
        }
    }
}
</script>