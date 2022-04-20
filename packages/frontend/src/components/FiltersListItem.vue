<template>
  <li>
      <a
        @click.prevent="emitFilter"
        href="#"
        :class="[
          'filters__list__item',
          selected && 'filters__list__item--selected',
        ]"
        title="Economique"
      >
        <span class="filters__list__item__icon">
          <i  :class="filtre.icon"></i>
        </span>

        <span class="filters__list__item__text">{{ filtre.name }}</span>
      </a>
    </li>
</template>

<script>
export default {
  name: 'FiltersListItem',
  props: {
    filtre: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    emitFilter () {
      this.$emit('change', this.filtre.value)
    },
  }

}
</script>
