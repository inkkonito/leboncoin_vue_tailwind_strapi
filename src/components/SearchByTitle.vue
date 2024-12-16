<script setup>
import { ref } from 'vue'
const searchText = ref('')

const emits = defineEmits(['handleSearch', 'whenBecomeEmpty'])
</script>
<template>
  <form @submit.prevent="$emit('handleSearch', searchText)" class="flex rounded-lg bg-lbc_grey_light">
    <input
      v-model="searchText"
      type="text"
      placeholder="Recherche sur leboncoin"
      class="w-72 rounded-lg bg-transparent pl-2 text-lg placeholder-gray-500"
      @input="(event) => $emit('whenBecomeEmpty', event.target.value)"
    />
    <button class="bg-none p-2">
      <span class="rounded-lg bg-lbc_orange p-2">
        <font-awesome-icon :icon="['fas', 'search']" class="text-sm font-thin" />
      </span>
    </button>
  </form>
</template>
<style scoped></style>
