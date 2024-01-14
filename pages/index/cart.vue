<template>
  <section
    class="cart"
    @click.self="closeCart"
  >
    <sidebar-layout>
      <transition
        name="fade"
        mode="out-in"
      >
        <cart-summary
          v-if="currentScreen === 'summary'"
          @change-screen="changeScreen"
        />
        <cart-order
          v-else
          @change-screen="changeScreen"
        />
      </transition>
    </sidebar-layout>
  </section>
</template>

<script setup>
const router = useRouter();

const currentScreen = ref('summary');

const changeScreen = (newScreen) => {
  currentScreen.value = newScreen;
};

const closeCart = () => {
  router.push('/');
};

if (process.browser) {
  onMounted(() => {
    document.body.style.overflow = 'hidden';
  });
  onUnmounted(() => {
    document.body.style.overflow = 'initial';
  });
}
</script>

<style lang="scss" scoped>
.cart {
  background: rgba(60, 75, 97, 0.60);
  backdrop-filter: blur(11px);
  position: fixed;
  height: 100dvh;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
