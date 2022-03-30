<template>
  <li
    :class="[
      'cards-list__item',
      variant && `cards-list__item--${variant}`
    ]"
  >
    <a href="#" :title="content.name"  class="cards-list__item__wrapper">
      <article class="cards-list__item__container">
        <div class="cards-list__item__cover-wrapper">
          <picture class="cards-list__item__cover">
            <source media="(min-width: 992px)" :srcset="content.images.large">
            <source media="(min-width: 768px)" :srcset="content.images.medium">
            <img :src="content.images.small" alt="Aperçu de l'élément" width="250">
          </picture>
        </div>

        <div class="cards-list__item__content">
          <header class="cards-list__item__header">
            <h3 class="cards-list__item__title">{{ content.name }}</h3>
          </header>

          <p v-if="content.price" class="cards-list__item__description">
            <strong>Nuit à partir de <span>{{ content.price }}</span></strong>
          </p>

          <aside v-if="content.note !== undefined" class="cards-list__item__stars" :data-stars="content.note">Note de {{ content.note }} sur 5</aside>
        </div>
      </article>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Card',
  props : {
    variant: {
      type: String,
      default: '',
      validator: value => !value ? true : [ 'paysage', 'jumbo' ].includes(value)
    },
    content: {
      type: Object,
      default: () => ({})
    },
  },
}
</script>
