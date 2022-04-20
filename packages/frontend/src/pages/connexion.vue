<template>
    <div>
    <!-- Contenu principal -->
    <main class="content container">
        <section>
            <header>
                <h1 class="h1">Connectez-vous</h1>
            </header>
        </section>

        <section>
            <form @submit.prevent="handleSubmit">
                <div>
                    <label for="email">Username</label>
                    <input type="text" id="username" v-model="username">
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
    name: 'PageConnexion',
    data() {
        return{
            username: '',
            password: null,
        }
    },

    methods: {
        handleSubmit (event) {
        return this.$axios.$post('/login', { username, password })
          .then((res) => {
            console.log(res)
            //return this.$router.redirect({ name: 'index' })
          })
        }  
    }
}
</script>