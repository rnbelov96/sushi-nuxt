<template>
  <article
    class="position"
    :class="{
      'position_in-cart': data.quantity > 0
    }"
  >
    <favorite-icon
      class="position__favorite-icon"
      :item-id="data.id"
    />
    <main>
      <div class="position__img-box">
        <img
          :src="data.image"
          width="130"
          height="130"
          alt="Картинка позиции"
          class="position__img"
        >
      </div>
      <div class="position__title-box">
        <h3 class="position__title">
          {{ data.name }}
        </h3>
        <p class="position__weight">
          {{ data.weight }} г
        </p>
      </div>
      <p class="position__ingredients">
        {{ data.ingredients }}
      </p>
    </main>
    <footer class="position__footer">
      <p class="position__price">
        {{ data.price }} ₽
      </p>
      <button
        v-if="data.quantity === 0"
        class="position__add-to-cart"
        @click="cartStore.addPositionToCart(data)"
      >
        В корзину
      </button>

      <app-counter
        v-else
        :value="data.quantity"
        @input="cartStore.setPositionQuantity(data.id, $event)"
      />
    </footer>
  </article>
</template>

<script setup>
const cartStore = useCartStore();

defineProps({
  data: {
    required: true,
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.position {
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-height: 24rem;
  position: relative;
  transition: 0.3s;

  &_in-cart {
    border-radius: 0.5rem;
    background: $main-color;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

    .position__img-box::before {
      opacity: 1;
    }

    .position__title,
    .position__weight,
    .position__ingredients,
    .position__price {
      color: white;
    }
  }
}

.position__favorite-icon {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1;
}

.position__img-box {
  width: 130px;
  height: 130px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  &::before {
    position: absolute;
    z-index: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    filter: blur(35px);
    bottom: 20px;
    right: 12px;
    pointer-events: none;
    background: rgba(203, 182, 137, 0.70);
    content: '';
    opacity: 0;
    transition: 0.3s;
  }
}

.position__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
}

.position__title-box {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.position__title {
  font-family: Neucha;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.11875rem;
  text-transform: uppercase;
  transition: 0.3s;
}

.position__weight {
  color: #808080;
  font-family: Ubuntu;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 0.3s;
}

.position__ingredients {
  margin-top: 1.25rem;
  color: #808080;
  font-family: Arial;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0375rem;
  transition: 0.3s;
}

.position__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.position__price {
  font-family: Neucha;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05938rem;
  transition: 0.3s;
}

.position__add-to-cart {
  border-radius: 0.5rem;
  padding: 0.5rem 1.3rem;
  background-color: $main-color;
  color: white;
  font-family: PT Sans Narrow;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.02813rem;
}
</style>
