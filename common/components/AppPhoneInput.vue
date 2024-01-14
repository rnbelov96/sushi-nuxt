<template>
  <div
    class="input__wrapper"
    :class="{
      '-errored': errors.length > 0
    }"
  >
    <div class="input__icon">
      <slot name="icon" />
    </div>
    <input
      v-model="value"
      v-maska
      :data-maska="mask"
      :placeholder="placeholder"
      class="input"
      @focus="onFocus"
    >
    <div class="input__error-msg">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: () => 'Телефон',
  },
  mask: {
    type: String,
    required: false,
    default: () => '+7 ### ###-##-##',
  },
  modelValue: {
    type: String,
    required: true,
  },
  errors: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});

const errorMessage = computed(() => props.errors.map((error) => error.$message).join(', '));

const onFocus = () => {
  if (value.value.length < 2) {
    emit('update:modelValue', '+7');
  }
};
</script>
