<!--<template>
    <div>
        <h1>Ajout d'un nouvel établissement</h1>
        <form>
            <label for="name">Nom: </label>
                <input type="text" id="name" 
                v-model="form.name">
            <label for="city">Ville: </label>
                <input 
                type="text" 
                id="city" 
                v-model="form.city">
            <label for="postcode">Code postale: </label>
                <input 
                type="number" 
                id="postcode" 
                v-model.number="form.postcode">
            <label for="description">Description: </label>
                <input 
                type="text" 
                id="description" 
                v-model="form.description">
            <label for="price">Prix: </label>
                <input 
                type="number" 
                id="price" 
                v-model.number="form.price">
            <label for="price">Categorie: </label>
                <input 
                type="text" 
                id="category" 
                v-model="form.category">
            <modale  v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
            <button  @click.prevent="submit" @click="toggleModale" type="button">Ajouter</button>
        </form>
    </div>
</template>

<script>
import Modale from '../components/Modale.vue';
export default {
  components: { Modale },
    name:'formulaire',
    data() {
        return{
            form: {
                name: '',
                city: '',
                description: '',
                price: null,
                category: '',
                postcode: null,
            },
            content: {}
            }
    },

    methods: {
        submit(){
            console.log(this.form);
            this.$axios.$put('admin/create/hebergement', this.form)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log("error", error);
            })
            this.$router.push({ name: 'adminDisplay'})
        }
    }    
}
</script>

<template>
  <div>
    <h1 class="h1">Ajout d'un nouvel établissement</h1>

    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Nom de l'établissement:"
        label-for="input-1"
        description="Nom de l'établissement."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Nom de l'établissement"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ville:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.city"
          placeholder="Ville:"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Code postal:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model.number="form.postcode"
          placeholder="Code postal"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Prix de la nuit:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.price"
          placeholder="Prix de la nuit"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.description"
          placeholder="Description de l'établissement"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Categorie:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.category"
          :options="category"
          required
        ></b-form-select>
      </b-form-group>
        <div class="buttonForm">
        <modale></modale>
      </div>
    </b-form>
  </div>
</template>

<script>
import Modale from '../components/Modale.vue';
  export default {
  components: { Modale },
    data() {
      return {
        form: {
          name: '',
          city: '',
          description:'',
          category: null,
          checked: []
        },
        category: [{ text: 'Select One', value: null }, 'Romantique', 'Animaux autorisés', 'Economique', 'Familial'],
       
        show: true
      }
    },
    methods: {
        /*onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },*/
        onSubmit(){
            console.log(this.form);
            this.$axios.$put('admin/create/hebergement', this.form)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log("error", error);
            })
            this.$router.push({ name: 'adminDisplay'})
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.city = ''
            this.form.description = ''
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
        })
      }
    }
  }
</script>

<style scoped>
    .h1{
        margin-top: 50px;
        padding: 50px;
    }
    .form{
        padding: 50px;
        padding-top: 10px;
        margin-right: 280px;
    }
    .buttonForm{
        margin-top: 20px;
    }
</style>-->
<template>
  <div>
    <h1 class="h1">Ajout d'un nouvel établissement</h1>
    <formulaire></formulaire>
    <button  @click.prevent="onSubmit">Ajouter</button>
    <modale  :v-bind="title"></modale>
  </div>
  
</template>

<script>
import Formulaire from "~/components/Formulaire.vue"
import Modale from '../components/Modale.vue';

export default {
  components: { Formulaire , Modale},
  name: 'createForm',
  data() {
      return {
        form: {
          name: '',
          city: '',
          description:'',
          price:null,
          postcode:null,
         // checked: [],
          category: [{ text: 'Select One', value: null }, 'Romantique', 'Animaux autorisés', 'Economique', 'Familial'],
        },
        content: {},
        title:'Ajouter avec succes',
  

  methods: {
    onSubmit(){
      console.log(this.form);
      this.$axios.$post('admin/create/hebergement', this.form)
      .then((response) => {
      console.log(response);
      })
      .catch((error) => {
      console.log("error", error);
      })
      this.$router.push({ name: 'adminDisplay'})
    }   
  }
}
  }}
</script>

<style scoped>
  .h1{
    margin-top: 50px;
    padding: 50px;
  }
  .form{
    padding: 50px;
    padding-top: 10px;
    margin-right: 280px;
  }
  .buttonForm{
    margin-top: 20px;
  }

</style>