<template>
    <div>
    <h1 class="h1">BACKOFFICE ADMINISTRATEUR</h1>
    <br>
    <h2>Liste des hébergements</h2>
   

    <b-button class="link" href="createForm" variant="outline-secondary">Importer un nouvel établissement</b-button>

    <table class="table">
        <thead>
            <tr>
                <th >Nom:</th>
                <th >Ville:</th>
                <th >Prix:</th>
                <th >Id:</th>
            </tr>
        </thead>
        <tbody>

            <tr v-for="(accommodation, i) in accommodations"
            :key="i">
                <td>{{ accommodation.name}}</td>
                <td>{{ accommodation.city}}</td>
                <td>{{ accommodation.price }}</td>
                <td>{{ accommodation.id }}</td>
                <td><nuxt-link :to="{ name: 'formAdmin-id', params: {id: accommodation.id } }" :title="accommodation.name">
                     <b-button variant="outline-primary">Modifier</b-button>
                    </nuxt-link>
                </td>  
                <td><nuxt-link :to="{ name: 'formAdmin-id', params: {id: accommodation.id} }">
                     <b-button variant="outline-danger">Supprimer</b-button>
                    </nuxt-link>
                </td> 
            </tr>

        </tbody>
    </table>

</div>

</template>

<script>
export default {
    name: 'admin-display',

    data() {
        return{
            accommodations: [],
            content: {}
        }
    },

    async mounted () {
    // requête GET pour récupérer les hébergements de notre bdd
    this.accommodations = await this.$axios.$get('/')

   
    
    }
}
</script>

<style scoped>
    .table{
        margin-left: 70px;
    }
    .h1{
        margin-top: 40px;
        margin-left: 30px;
    }

    h2{
        margin-top: 30px;
        margin-left:70px;
    }

    .link{
        margin-left: 1000px
    }
</style>