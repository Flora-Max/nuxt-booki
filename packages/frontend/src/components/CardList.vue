<template >
  <ul class="cards-list">
    <card
      v-for="content in items"
      :key="content.id"
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
