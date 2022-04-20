<!--<template>
    <div>
        <h1>BACK-OFFICE Modification: </h1>
        <form>
             <label for="name">Nom de l'établissement:</label>
                <input 
                type="text" 
                id="name"
                :value="content.name">
            <label for="city">Ville</label>
                <input type="text" 
                id="city" 
                :value="content.city">
             <label for="postcode">Code postale</label>
                <input 
                type="number" 
                id="postcode" 
                v-model.number="content.postcode">
             <label for="description">Description</label>
                <input 
                type="text" 
                id="description" 
                :value="content.description">
            <label for="price">Prix:</label>
                <input 
                type="number" 
                id="price" 
                v-model.number="content.price">
            <label for="category">Categorie:</label>
                <input 
                type="text" 
                id="category" 
                :value="content.category">
            <b-button  @click.prevent="update()" variant="outline-primary">Générer</b-button>
            <b-button @click.prevent="deleteContent()" variant="danger">Supprimer</b-button>
        </form>
    </div> 
    
</template>

<script>

export default {
    name: 'formAdmin',

    data() {
        return{
            form: {
                hebergementId: null,
                name: '',
                city: '',
                price: '',
                category: '',
                description: '',
                postcode: ''
            },

            content: {
                id: null,
            }
        }
    },


    async mounted(){
        //requete vers l'affichage d'un élément hébergement de notre bdd
        this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
        this.form.hebergementId = this.content.id
   },

   methods: {

        //requete DELETE pour supprimer un hebergement de notre bdd selon son id
        deleteContent(){
            this.$axios.$delete(`admin/hebergement/delete/${this.content.id}`, this.form)
            this.$router.push({ name: 'adminDisplay'})
        },

        update() {
           //requete PUT pour modifier un hebergement de notre bdd selon son id 
           this.$axios
           .$post(`admin/update/hebergement/${this.content.id}`, this.form)
           //.$put('admin/update/hebergement' + hebergementId, this.form )
           .then((response) => this.form = response.data)
           .catch((error) => {
            console.log("error", error);
            })
            //this.$router.push({ name: 'adminDisplay'})
        }
    }
}
</script>-->

<template>
    <div>
        <h1 class="h1">BACK-OFFICE Modification: </h1>
        <formulaire></formulaire>
    </div>
    
</template>

<script>
//import Formulaire from '../components/Formulaire.vue';
export default {
    name: 'formAdmin',
    //components: {
    //'formulaire': Formulaire,

    data() {
        return{
            form: {
                hebergementId: null,
                name: '',
                city: '',
                price: '',
                category: '',
                description: '',
                postcode: ''
            },

            content: {
                id: null,
            }
        }
    },


    async mounted(){
        //requete vers l'affichage d'un élément hébergement de notre bdd
        this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
        this.form.hebergementId = this.content.id
   },

   methods: {

        //requete DELETE pour supprimer un hebergement de notre bdd selon son id
        deleteContent(){
            this.$axios.$delete(`admin/hebergement/delete/${this.content.id}`, this.form)
            this.$router.push({ name: 'adminDisplay'})
        },

        update() {
           //requete PUT pour modifier un hebergement de notre bdd selon son id 
           this.$axios
           .$post(`admin/update/hebergement/${this.content.id}`, this.form)
           //.$put('admin/update/hebergement' + hebergementId, this.form )
           .then((response) => this.form = response.data)
           .catch((error) => {
            console.log("error", error);
            })
            //this.$router.push({ name: 'adminDisplay'})
        }
    }
}
</script>


