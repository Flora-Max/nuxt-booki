<template >
  <ul class="cards-list">
    <card
      v-for="(content, i) in items"
      :key="`${i}_${content.id}`"
      :variant="variant"
      :content="content"
    />
  </ul>
</template>

<script>
export default {
  name: 'CardList',
  props : {
    variant: {
      type: String,
      default: '',
    },
    // liste des éléments afficher
    items: {
      type: Array,
      default: () => ([])
    },
  },
}
</script>
