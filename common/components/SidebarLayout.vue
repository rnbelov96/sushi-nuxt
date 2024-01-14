<template>
  <aside class="aside">
    <slot />
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
  width: 100%;
  max-width: 38rem;
  background-color: #EBE1D7;
  margin-left: auto;
  overflow: auto;
  padding: 2rem;
}
</style>
