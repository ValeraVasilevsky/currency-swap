<template>
  <Story class="inputs">
    <BaseInput v-model="inputValue" placeholder="Placeholder" />
  </Story>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "./index.vue";

const inputValue = ref<string>("");
</script>

<style scoped></style>
