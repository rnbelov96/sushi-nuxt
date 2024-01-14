<template>
  <section class="menu">
    <div class="container">
      <app-title>Меню</app-title>
      <menu-position-types
        :type-list="menuStore.typeList"
        :current-type-id="menuStore.currentTypeId"
        class="menu__types"
        @set-type="menuStore.setCurrentType($event)"
      />
      <menu-list :menu="menuStore.menuExtended" />
    </div>
  </section>
  <nuxt-page />
</template>

<script setup>
const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.menu {
  padding-top: 2.5rem;
  padding-bottom: 7.5rem;

  @include media-breakpoint(md) {
    padding-bottom: 5rem;
  }

  @include media-breakpoint(sm) {
    padding-top: 1.25rem;
    padding-bottom: 3rem;
  }
}

.menu__types {
  margin-top: 1.87rem;

  @include media-breakpoint(sm) {
    margin-top: 1.25rem;
  }
}
</style>
