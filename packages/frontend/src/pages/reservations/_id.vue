<template>
  <div>
    <!-- Contenu principal -->
    <main class="content container">
      <section>
        <header>
          <h1 class="h1">Réserver</h1>
        </header>
      </section>

      <section>
        <form id="formReservation">
              <div>
                  <label for="username">Username</label>
                  <input type="text" id="name" v-model="username">
              </div>
                <div>
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email">
                </div>
                <div>
                  <label for="password">Mot de passe</label>
                  <input type="password" id="password" v-model="password">
                </div>
                 <div>
                  <label for="quantityPeople">Nombre de personne:</label>
                  <input type="text" id="quantityPeople" v-model="quantityPeople">
              </div>
               <div>
                  <label for="quantityNight">Nombre de nuit</label>
                  <input type="text" id="quantityNight" v-model="quantityNight">
              </div>
               <div>
                  <label for="firstNightDate">Date de début de séjour:</label>
                  <input type="date" id="firstNightDate" v-model="firstNightDate">
              </div>
              <div>
                <label for="creationDate">Date de création de la réservation:</label>
                <input type="date" id="creationDate" v-model="creationDate">
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
    name: 'PageReservation',

    data(){
      return{
        item: {},
      }
    },
    

    async mounted () {
      //requete pour envoyer données de formulaire de notre réservation vers la bdd
      await this.$axios.$post('http://localhost:8000/reservationForm', 
      { username, email, username, password, quantityPeople, quantityNight, firstNightDate, creationDate })
      .then((res) => {
      console.log(res)
      return this.$router.redirect({ name: 'index' })
        })
      },
  }
</script>