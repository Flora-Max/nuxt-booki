<template>
    <div class="container">
      <h1 class="fs-1">{{ content.name }}</h1>
      <div class="picture">
        <b-img class="img" :srcset="content.imageLarge" alt="Accommodation picture"></b-img>
      </div>

      <div class="desc">
        <p>
          <span><strong>Description: </strong>{{ content.description }}</span>
        </p>
        <p>
          <span class="city"><strong>Ville: </strong>{{ content.city }}</span>
        </p>
        <p>
          <span class="price"><strong>Nuit à partir de: </strong>{{ content.price }}€</span>
        </p>

        <aside v-if="content.note !== undefined" class="cards-list__item__stars" :data-stars="accommodations.note">Note de {{ content.note }} sur 5</aside>

        <b-button class="btn" :to="{ name: 'reservations-id', params: { id: content.id } }" variant="primary">Reserver</b-button>
      </div>
    </div>
</template>

<script>
export default {
  name: "InformationsPage",

  data() {
    return {
      content: {},
    };
  },

  async mounted() {
    //requete vers l'affichage d'un élément hébergement de notre bdd
    this.content = await this.$axios.$get(`/display/${this.$route.params.id}`);
  },
};
</script>

<style scoped>
  .container{
    display: grid;
    grid-template-areas: "title image" "desc image";
    grid-template-columns: 1fr 40vw;
    grid-gap: 15px;
    padding: 25px;
    margin-top: 50px;
    margin-bottom: 100px;
  }

    .fs-1{

    padding-bottom: 30px;
    grid-area: title;
  }

  .picture{
    grid-area: image;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgb(0 0 0 /50%);
    border-radius: 10px;
    margin-top: 20px;

  }

  .img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .desc{
    grid-area: desc;
  }

  .btn{
    margin-top:20px
  }

  .city{
    margin-top:20px;
  }
</style>
