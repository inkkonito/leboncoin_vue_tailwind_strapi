<script setup></script>
<template>
  <RouterLink :to="{ name: 'publish' }" class="rounded-xl bg-lbc_orange px-4 py-2 font-bold">
    <font-awesome-icon :icon="['fas', 'plus']" class="mx-1 border-2 p-[1px] text-lg font-bold text-white" />
    <span class="text-lg text-white">Déposer une annonce</span>
  </RouterLink>
</template>
