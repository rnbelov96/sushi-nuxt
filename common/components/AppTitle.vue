<template>
  <h1 class="title">
    <div class="title__dot" />
    <slot />
    <div class="title__dot" />
  </h1>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title {
  color: $main-color;
  font-family: Neucha;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  &.-small {
    font-size: 2rem;
    gap: 1rem;

    .title__dot {
      width: 0.3125rem;
      height: 0.3125rem;
    }

    @include media-breakpoint(sm) {
      font-size: 1.375rem;
      gap: 1rem;
    }
  }

  @include media-breakpoint(sm) {
    font-size: 1.375rem;
    gap: 1rem;
  }
}

.title__dot {
  width: 0.625rem;
  height: 0.625rem;
  background-color: $main-color;
  border-radius: 50%;
  position: relative;
  top: -3px;

  @include media-breakpoint(sm) {
    width: 0.3125rem;
    height: 0.3125rem;
  }
}
</style>
