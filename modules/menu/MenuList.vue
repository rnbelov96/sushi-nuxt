<template>
  <div
    class="menu-list"
  >
    <menu-position
      v-for="position in menu"
      :key="position.id"
      :data="position"
    />
  </div>
</template>

<script setup>
defineProps({
  menu: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.menu-list {
  display: grid;
  gap: 1.87rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3.75rem;

  @include media-breakpoint(lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media-breakpoint(md) {
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-breakpoint(sm) {
    margin-top: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
