<template>
  <div class="formulaire">
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Nom de l'établissement:"
        label-for="input-1"
        description="Nom de l'établissement."
        required>
        <b-form-input
          id="input-1"
          v-model="content.name"
          type="text"
          placeholder="Nom de l'établissement"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ville:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="content.city"
          placeholder="Ville:"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Code postal:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model.number="content.postcode"
          placeholder="Code postal"
          required
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Prix de la nuit:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model.number="content.price"
          placeholder="Prix de la nuit"
          required
          type="number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Description:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="content.description"
          placeholder="Description de l'établissement"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Categorie:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="content.category"
          :options="category"
          required
        ></b-form-select>
      </b-form-group>
        <div class="buttonForm">
      </div>
    </b-form>
  </div>
</template>


<script>
import Modale from '../components/Modale.vue';
export default {
    name: 'Formulaire',
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
        content: {},
       
        show: true
      }
    },

   /* async mounted(){
        //requete vers l'affichage d'un élément hébergement de notre bdd
        this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
        this.form.hebergementId = this.content.id
    },*/

    methods: {
        /*onSubmit(){
            console.log(this.form);
            this.$axios.$put('admin/create/hebergement', this.form)
            .then((response) => {
            console.log(response);
            })
            .catch((error) => {
            console.log("error", error);
            })
            this.$router.push({ name: 'adminDisplay'})
        },*/
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

<style lang="scss">
.formulaire {
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
}

</style>