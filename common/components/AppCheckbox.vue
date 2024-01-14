<template>
  <label
    class="checkbox"
    :class="{
      '-disabled': disabled
    }"
  >
    <div class="checkbox__check-icon-box">
      <input
        v-model="inputValue"
        :type="type"
        :name="name"
        :value="value"
        class="visually-hidden checkbox__hidden-check-icon"
      >
      <div class="checkbox__check-icon">
        <svg-icon
          name="check-icon"
          width="12"
          height="12"
        />
      </div>
    </div>
    <div class="checkbox__icon">
      <slot
        name="icon"
      />
    </div>
    <p class="checkbox__label">
      {{ label }}
    </p>
    <slot
      name="bage"
    />
  </label>
</template>

<script setup>
const props = defineProps({
  name: {
    required: false,
    type: String,
    default: '',
  },
  value: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  label: {
    required: true,
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  modelValue: {
    required: true,
    type: [Array, Number, String],
  },
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
  get() {
    return props.modelValue;
  },

  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 2rem 1.9rem 1fr 1fr;
  gap: 1.25rem;
  cursor: pointer;

  &.-disabled {
    pointer-events: none;
    .checkbox__icon,
    .checkbox__label {
      opacity: 0.6;
    }
  }
}

.checkbox__check-icon-box {
  width: 2rem;
  height: 2rem;
}

.checkbox__check-icon {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #A5A5A5;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  svg {
    opacity: 0;
    transition: 0.3s;
  }
}

.checkbox__hidden-check-icon:checked + * {
  border: 1px solid transparent;
  background-color: rgba(10, 207, 131, 1);

  svg {
    opacity: 1;
  }
}

.checkbox__label {
  color: #222;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-left: 1.25rem;
}
</style>
