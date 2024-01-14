<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="value === min"
      @click="emit('input', value - 1)"
    >
      <span class="visually-hidden">Меньше</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M13.3333 8.00012H2.66666"
          stroke="#2A344A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <p class="counter__label">
      {{ value }}
    </p>
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--orange': accent }"
      :disabled="value === max"
      @click="emit('input', value + 1)"
    >
      <span class="visually-hidden">Больше</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M11.5556 8.0001H4.44446M8.00001 11.5556V4.44446"
          stroke="#2A344A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Number,
    required: true,
  },
  accent: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
});

const emit = defineEmits(['input']);
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  gap: 0.81rem;
  align-items: center;

  &.-small {
    gap: 0.44rem;
    .counter__button {
      width: 1.56rem;
      height: 1.56rem;
    }

    .counter__label {
      font-size: 1rem;
      min-width: rem(18);
      position: relative;
      top: 2px;
    }
  }

  &.-dark {
    .counter__button {
      background-color: $main-color;

      svg path {
        stroke: white;
      }
    }

    .counter__label {
      color: #353535;
    }
  }
}

.counter__button {
  border-radius: 3.75rem;
  background: #FFF;
  width: rem(35);
  height: rem(35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter__label {
  font-family: Neucha;
  font-size: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05938rem;
  color: white;
  min-width: 20px;
  text-align: center;
}
</style>
