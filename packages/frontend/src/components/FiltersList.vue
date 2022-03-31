<template >
  <ul class="filters__list">
    <filtres
      v-for="(item, i) in items"
      @change="$emit('change', $event)"
      :key="i"
      :filtre="item"
      :selected="selected === item.value"
    /> <!-- On rajoute un index dans le item au cas ou 2 noms pareils-->
  </ul>

</template>

<script>
export default {
  name: 'FilterList',
  model: {  // model appliqué ds index  // evenement= pour passer des infos aux parents; props= pour passer des infos aux enfants
    prop: 'selected',
    event: 'change'
  },
  props: {
    selected: {
      type: [ String, null ],
      default: null
    }
  },
  data () {
    return {
      items: [
        {name:'Economique', value: 'economic', icon: 'fas fa-money-bill-wave'},
        {name: 'Familial', value: 'family', icon: 'fas fa-child'},
        {name: 'Romantique', value: 'romantic', icon: 'fas fa-heart'},
        {name: 'Animaux autorisés', value: 'pets', icon: 'fas fa-dog'}
      ],
    }
  },



}
</script>
