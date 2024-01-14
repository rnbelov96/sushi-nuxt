<template>
  <div
    class="input__wrapper"
    :class="{
      '-errored': errors.length > 0
    }"
  >
    <slot name="icon" />
    <input
      v-model="value"
      :placeholder="placeholder"
      class="input"
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
    default: () => '',
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
</script>
