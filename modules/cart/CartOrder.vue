<template>
  <div class="cart-order">
    <app-title class="-small">
      Оформление заказа
    </app-title>
    <form
      class="cart-order__form"
      @submit.prevent="submit"
    >
      <div class="cart-order__box">
        <p class="cart-order__box-number">
          <span>1</span>
        </p>
        <p class="cart-order__box-title cart-order__box-container">
          Способ доставки
        </p>
        <div class="cart-order__checkbox-list cart-order__box-container">
          <app-checkbox
            v-model="deliveryMethod"
            value="deliver"
            type="radio"
            label="Курьер"
            disabled
          >
            <template #icon>
              <svg-icon
                name="deliver"
                width="30"
                height="30"
              />
            </template>
            <template #bage>
              <p class="cart-order__unavailable-text">
                Временно недоступно
              </p>
            </template>
          </app-checkbox>
          <app-checkbox
            v-model="deliveryMethod"
            value="self"
            type="radio"
            label="Самовывоз"
          >
            <template #icon>
              <svg-icon
                name="self"
                width="30"
                height="30"
              />
            </template>
            <template #bage>
              <p class="cart-order__discount-text">
                <b>Скидка - 10%</b> <br>
                на стоиомость покупки
              </p>
            </template>
          </app-checkbox>
        </div>
      </div>
      <div class="cart-order__box">
        <p class="cart-order__box-number">
          <span>2</span>
        </p>
        <p class="cart-order__box-title cart-order__box-container">
          Данные для доставки
        </p>
        <div class="cart-order__box-input-list cart-order__box-container">
          <app-phone-input
            v-model="phone"
            :errors="v$.phone.$errors"
          >
            <template #icon>
              <svg-icon
                name="input-phone"
                width="18"
                height="18"
              />
            </template>
          </app-phone-input>
          <app-text-input
            v-model="name"
            :errors="v$.name.$errors"
            placeholder="Имя"
          >
            <template #icon>
              <svg-icon
                name="input-name"
                width="18"
                height="18"
              />
            </template>
          </app-text-input>
          <app-text-input
            v-model="info"
            placeholder="Дополнительная информация"
          >
            <template #icon>
              <svg-icon
                name="input-info"
                width="18"
                height="18"
              />
            </template>
          </app-text-input>
        </div>
      </div>
      <div class="cart-order__box">
        <div class="cart-order__price-box cart-order__box-container">
          <div class="cart-order__price-row">
            <p class="cart-order__price-label">
              Cтоимость товаров
            </p>
            <div class="cart-order__price">
              <b>{{ cartStore.positionsPrice }} ₽</b>
            </div>
          </div>
          <hr class="cart-order__price-devider">
          <div class="cart-order__price-row">
            <p class="cart-order__price-label">
              <b>Итого к оплате</b>
            </p>
            <div class="cart-order__price">
              <b>{{ cartStore.totalCartPrice }} ₽</b>
            </div>
          </div>
        </div>
        <button
          class="cart-order__submit-btn"
          type="submit"
          @click="console.log(deliveryMethod);"
        >
          Купить и оплатить
        </button>
        <p class="cart-order__policy-text">
          Создавая заказ, вы соглашаетесь с <a href="/">политикой обработки персональных данных</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { required, helpers, minLength } from '@vuelidate/validators';
import isPhoneNumber from '~/common/helpers/is-phone-number';

const cartStore = useCartStore();
const router = useRouter();
const $notification = inject('$notification');

const deliveryMethod = computed({
  get() {
    return cartStore.deliveryMethod;
  },
  set(value) {
    cartStore.setDeliveryMethod(value);
  },
});

const phone = computed({
  get() {
    return cartStore.phone;
  },
  set(value) {
    cartStore.setPhone(value);
  },
});

const name = computed({
  get() {
    return cartStore.name;
  },
  set(value) {
    cartStore.setName(value);
  },
});

const info = computed({
  get() {
    return cartStore.info;
  },
  set(value) {
    cartStore.setInfo(value);
  },
});

const formState = reactive({
  name,
  phone,
});

const rules = {
  phone: {
    required: helpers.withMessage('Заполните поле', required),
    phone: helpers.withMessage('Некорректный номер', isPhoneNumber),
  },
  name: {
    required: helpers.withMessage('Заполните поле', required),
    minLengthValue: helpers.withMessage('Слишком короткое имя', minLength(3)),
  },
};

const v$ = useVuelidate(rules, formState);

const submit = async () => {
  const validationResult = await v$.value.$validate();

  if (validationResult) {
    await router.push('/');
    $notification.open({
      label: 'Спасибо за покупку',
      backgroundColor: 'green',
      icon: 'check-icon',
    });
  }
};
</script>

<style lang="scss" scoped>
.cart-order__form {
  margin-top: 1.7rem;

  &>*+* {
    margin-top: 0.9rem;
  }
}

.cart-order__box {
  border-radius: 0.5rem;
  background: #FFF;
  position: relative;
  padding: 1rem;
}

.cart-order__box-container {
  padding-left: 2.88rem;
  padding-right: 2rem;

  @include media-breakpoint(sm) {
    padding-left: 0;
    padding-right: 0;
  }
}

.cart-order__box-number {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  background-color: #D34A44;
  border-radius: 50%;
  color: #FFF;
  font-size: 1.25rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    top: 2px;
  }
}

.cart-order__box-title {
  color: #191919;
  font-family: Ubuntu;
  font-size: 1.375rem;
  font-weight: 300;

  @include media-breakpoint(sm) {
    padding-left: 3rem;
  }
}

.cart-order__checkbox-list {
  margin-top: 1rem;

  &>*+* {
    margin-top: 0.88rem;
  }
}

.cart-order__unavailable-text,
.cart-order__discount-text {
  color: #F00;
  font-family: Ubuntu;
  font-size: 0.75rem;
  font-weight: 300;

  @include media-breakpoint(sm) {
    grid-column: 1/4;
  }
}

.cart-order__discount-text {
  color: #3F4871;
  font-family: Ubuntu;
  font-size: 0.5rem;
  font-weight: 700;

  b {
    font-size: 0.875rem;
    font-weight: 700;
  }
}

.cart-order__box-input-list {
  margin-top: 2.25rem;
  padding-bottom: 0.75rem;

  &>*+* {
    margin-top: 2.5rem;
  }
}

.cart-order__price-box {
  padding-top: 1rem;
}

.cart-order__price-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @include media-breakpoint(sm) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
}

.cart-order__price-devider {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.cart-order__price-label,
.cart-order__price {
  color: #222;
  font-family: Ubuntu;
  font-size: 1.125rem;
  font-weight: 300;

  b {
    font-weight: 400;
  }
}

.cart-order__price {
  flex-shrink: 0;
}

.cart-order__submit-btn {
  border-radius: 0.25rem;
  border: 1px solid #0C334A;
  background: #0C334A;
  margin-top: 2.5rem;
  text-align: center;
  color: white;
  font-family: Neucha;
  font-size: 1.125rem;
  letter-spacing: 0.05625rem;
  width: 100%;
  padding: 0.9rem 1rem;
}

.cart-order__policy-text {
  color: #212121;
  font-family: Ubuntu;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.3;
  margin-top: 1.25rem;

  a {
    color: #185598;
  }
}
</style>
