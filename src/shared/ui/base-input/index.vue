<template>
  <div :class="styles.container">
    <span :class="placeholderClasses">{{ props.placeholder }}</span>

    <input
      v-model="inputValue"
      :class="styles.input"
      @input="onInput"
      @focusin="setFocused(true)"
      @focusout="setFocused(false)"
    />

    <slot v-if="$slots['right']" name="right" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import styles from "./styles.module.css";

type BaseInputEmits = {
  "update:model-value": [value: string];
};
interface BaseInputProps {
  modalValue: string;
  placeholder: string;
}

defineSlots<{
  default(props: object): never;
  right(props: object): never;
}>();
const props = defineProps<BaseInputProps>();
const emits = defineEmits<BaseInputEmits>();

const inputValue = ref<string>(props.modalValue);
const isFocused = ref<boolean>(false);

const placeholderClasses = computed((): string[] => {
  const classes: string[] = [styles.placeholder];

  if (isFocused.value || !!inputValue.value) classes.push(styles.focused);

  return classes;
});

const setFocused = (value: boolean): void => {
  isFocused.value = value;
};
const onInput = (): void => {
  emits("update:model-value", inputValue.value);
};
</script>
