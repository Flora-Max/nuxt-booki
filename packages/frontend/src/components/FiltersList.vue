<template >
  <ul class="filters__list">
    <filters-list-item
      v-for="(item, i) in items"
      @change="$emit('change', $event)"
      :key="i"
      :filtre="item"
      :selected="value === item.value"
    /> <!-- On rajoute un index dans le item au cas ou 2 noms pareils-->
  </ul>

</template>

<script>
export default {
  name: 'FiltersList',
  model: {  // model appliqué ds index  // evenement= pour passer des infos aux parents; props= pour passer des infos aux enfants
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
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
