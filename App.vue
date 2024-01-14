<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
  <app-notification />
</template>

<script setup>
const favoritesStore = useFavoritesStore();
const menuStore = useMenuStore();

if (process.browser) {
  favoritesStore.getFavoritesFromLocalStorage();
}

menuStore.fetchMenu();
</script>

<style lang="scss">
@import '~/assets/scss/reboot.scss';
@import '~/assets/scss/fonts.scss';

body {
  background-color: white;
  color: $black;
  font-family: 'Neucha', sans-serif;
  font-weight: 400;
  line-height: 1.3;

  &.hidden-content {
    overflow: hidden;
  }

  & > main {
    overflow: clip;
  }
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1170px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 rem(24);
  }

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
}

.visually-hidden {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
}
</style>
