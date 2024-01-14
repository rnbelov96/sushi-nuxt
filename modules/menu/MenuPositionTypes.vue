<template>
  <ul
    class="type-list"
  >
    <li
      v-for="typeItem in typeList"
      :key="typeItem.id"
      class="type-list__item"
      @click="$emit('setType', typeItem.id)"
    >
      <button
        class="type-list__btn"
        :class="{
          '-active': currentTypeId === typeItem.id
        }"
      >
        {{ typeItem.name }}
      </button>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  typeList: {
    required: true,
    type: Array,
  },
  currentTypeId: {
    required: true,
    type: [Number, null],
  },
});

defineEmits(['setType']);
</script>

<style lang="scss" scoped>
.type-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @include media-breakpoint(md) {
    gap: 0;
  }

  @include media-breakpoint(sm) {
    gap: 0.12rem
  }
}

.type-list__btn {
  border-radius: 6.25rem;
  background: #FFF;
  color: #B3A296;
  font-family: Neucha;
  font-size: 1.75rem;
  line-height: 1;
  text-transform: uppercase;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &.-active {
    background-color: $main-color;
    color: white;
  }

  @include media-breakpoint(md) {
    font-size: 1.3125rem;
  }

  @include media-breakpoint(sm) {
    padding: 0.75rem 1.125rem;
    font-size: 1rem;
  }
}
</style>
