<template>
  <div class="cart-summary">
    <div class="cart-summary__top-box">
      <app-title>корзина</app-title>
      <div class="cart-summary__list">
        <article
          v-for="position in cartStore.positionsExtended"
          :key="position.id"
          class="cart-summary__item"
        >
          <div class="cart-summary__item-left-side">
            <div class="cart-summary__item-img-box">
              <img
                class="cart-summary__item-img"
                :src="position.image"
                alt="Изображение позиции"
                width="80"
                height="80"
              >
            </div>
            <div class="cart-summary__item-text-box">
              <div class="cart-summary__item-title-box">
                <h3 class="cart-summary__item-title">
                  {{ position.name }}
                </h3>
                <favorite-icon :item-id="position.id" />
              </div>
              <p class="cart-summary__item-ingredients">
                {{ position.ingredients }}
              </p>
              <p class="cart-summary__item-weight">
                ({{ position.weight }} г)
              </p>
            </div>
          </div>
          <div class="cart-summary__item-counter-box">
            <p class="cart-summary__item-price">
              <span>Цена</span> {{ position.price }} ₽
            </p>
            <app-counter
              class="-dark -small"
              :value="position.quantity"
              @input="cartStore.setPositionQuantity(position.id, $event)"
            />
            <p class="cart-summary__item-price">
              <span>Сумма</span> {{ position.totalPrice }} ₽
            </p>
          </div>
          <button
            class="cart-summary__item-delete-btn"
            @click="cartStore.deletePosition(position.id)"
          >
            <svg-icon
              name="delete"
              width="15"
              height="15"
            />
            <span class="visually-hidden">Удалить позицию</span>
          </button>
        </article>
      </div>
    </div>
    <p
      v-if="cartStore.positionsPrice === 0"
      class="cart-summary__empty-text"
    >
      Здесь пока ничего нет
    </p>
    <div class="cart-summary__bottom-box">
      <p
        v-if="cartStore.positionsPrice !== 0"
        class="cart-summary__total-price"
      >
        <span>Общая сумма</span> {{ cartStore.positionsPrice }} ₽
      </p>
      <p class="cart-summary__note">
        <span>*</span>
        <span>Сумма заказа для доставки курьером должна составлять не менее 500 ₽</span>
      </p>
      <div class="cart-summary__btn-box">
        <nuxt-link
          class="cart-summary__back-btn"
          to="/"
        >
          Вернуться к покупкам
        </nuxt-link>
        <button
          :disabled="cartStore.positionsPrice === 0"
          class="cart-summary__order-btn"
          @click="$emit('changeScreen', 'order')"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartStore = useCartStore();

defineEmits(['changeScreen']);
</script>

<style lang="scss" scoped>
.cart-summary {
  min-height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
}

.cart-summary__list {
  display: flex;
  flex-direction: column;
  gap: 0.31rem;
  margin-top: 1.88rem;
}

.cart-summary__empty-text {
  text-align: center;
  font-size: 2.5rem;
}

.cart-summary__item {
  padding: 1rem;
  padding-right: 4rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 1rem;

  @include media-breakpoint(sm) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.cart-summary__item-left-side {
  display: flex;
  gap: 1.63rem;
  align-items: center;
  flex-grow: 1;
}

.cart-summary__item-img-box {
  width: 5rem;
  height: 5rem;
  position: relative;
  flex-shrink: 0;
}

.cart-summary__item-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cart-summary__item-text-box {
  flex-grow: 1;
}

.cart-summary__item-title-box {
  display: flex;
  gap: 2rem;
}

.cart-summary__item-delete-btn {
  position: absolute;
  right: 0;
  @include y-align;
  width: 2.5625rem;
  height: 4rem;
  border-radius: 12.5rem 0rem 0rem 12.5rem;
  background: #312525;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-summary__item-title {
  font-family: Neucha;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.cart-summary__item-ingredients {
  color: #717171;
  font-family: PT Sans Narrow;
  font-size: 0.8125rem;
  font-weight: 400;
  max-width: 13.5rem;
}

.cart-summary__item-weight {
  color: #717171;
  font-family: PT Sans Narrow;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 0.13rem;
}

.cart-summary__item-counter-box {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 90px;
}

.cart-summary__item-price {
  font-family: Neucha;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05rem;

  span {
    font-size: 0.8125rem;
    letter-spacing: 0.04063rem;
  }
}

.cart-summary__bottom-box {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @include media-breakpoint(sm) {
    gap: 1.2rem;
  }
}

.cart-summary__total-price {
  font-family: Neucha;
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: 0.06875rem;

  span {
    letter-spacing: 0.0625rem;
    font-size: 1.25rem;
  }
}

.cart-summary__note {
  display: flex;
  gap: 0.5rem;
  color: #121212;
  font-family: Ubuntu;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem;
  letter-spacing: 0.03rem;
  max-width: 24rem;
}

.cart-summary__btn-box {
  display: flex;
  gap: 1.88rem;

  @include media-breakpoint(sm) {
    flex-direction: column;
    gap: 1rem;

    & > * {
      width: 100%;
    }
  }
}

.cart-summary__back-btn {
  border-radius: 0.5rem;
  padding: 1.2rem 1.4rem;
  border: 1px solid #AFAFAF;
  background: #FFF;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Neucha;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05625rem;
  text-align: center;
}

.cart-summary__order-btn {
  border-radius: 0.5rem;
  background: $main-color;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: Neucha;
  padding: 1.2rem 1.5rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05625rem;

  &:disabled {
    opacity: 0.7;
  }
}
</style>
