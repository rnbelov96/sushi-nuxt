<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__left-side">
          <button>
            <svg-icon
              class="header__burger"
              width="24"
              height="24"
              name="burger"
            />
          </button>
          <div class="header__logo-box">
            <div class="header__logo-circle" />
            <svg-icon
              class="header__logo-icon"
              name="logo"
            />
          </div>

          <nav class="header__nav-wrapper">
            <ul class="header__nav-list">
              <li
                v-for="nav in navList"
                :key="nav.text"
                class="header__nav-item"
              >
                <nuxt-link
                  class="header__nav-link"
                  :to="nav.to"
                >
                  {{ nav.text }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <a
          class="header__phone"
          href="tel:+"
        >
          <svg-icon
            name="phone"
            width="24"
            height="24"
            class="header__phone-icon"
          />
          <span>+7 979 700 97 91</span>
        </a>
        <nuxt-link to="/cart">
          <button
            aria-label="Корзина"
            class="header__cart-btn"
          >
            <svg-icon
              name="cart"
              width="24"
              height="24"
              class="header__cart-icon"
            />
          </button>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script setup>
const navList = [
  {
    text: 'Меню',
    to: '/',
  },
];
</script>

<style lang="scss" scoped>
.header {
  background: var(--title, #062D4E);
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.header__left-side {
  display: flex;
  gap: 4rem;
  align-items: center;

  @include media-breakpoint(md) {
    gap: 1.25rem;
  }
}

.header__burger {
  display: none;

  @include media-breakpoint(md) {
    display: block;
  }
}

.header__logo-box {
  position: relative;
  width: 10rem;
  height: calc(5.125rem - 2.5rem);

  @include media-breakpoint(md) {
    width: 3rem;
    height: initial;
  }
}

.header__logo-circle {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  left: 0;
  top: -2.5rem;

  @include media-breakpoint(md) {
    display: none;
  }
}

.header__logo-icon {
  width: 5rem;
  height: 5rem;
  position: absolute;
  @include x-align;

  @include media-breakpoint(md) {
    position: relative;
    left: initial;
    transform: none;
    width: 3rem;
    height: 3rem;
  }
}

.header__nav-wrapper {
  @include media-breakpoint(md) {
    display: none;
  }
}

.header__nav-list {
  display: flex;
  align-items: baseline;

  &>*+* {
    padding-left: 1rem;
    margin-left: 1rem;

    &::before {
      position: absolute;
      width: 0.1875rem;
      height: 0.1875rem;
      background-color: white;
      border-radius: 50%;
      content: '';
      left: 0;
      top: 5px;
    }
  }
}

.header__nav-item {
  position: relative;
}

.header__nav-link {
  width: 100%;
  height: 100%;
  color: white;
  letter-spacing: 0.05rem;
  line-height: 1.25;
}

.header__phone {
  display: flex;
  align-items: flex-end;
  gap: 0.18rem;

  span {
    color: white;
    font-size: 1.125rem;

    @include media-breakpoint(sm) {
      display: none;
    }
  }
}

.header__phone-icon {
  @include media-breakpoint(sm) {
    width: 2rem;
    height: 2rem;
  }
}

.header__cart-btn {
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.625rem;
  height: 2.625rem;
  filter: drop-shadow(2px 1px 13px rgba(0, 0, 0, 0.26));
}
</style>
