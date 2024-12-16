<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const props = defineProps(['pagination'])

// Méthode pour changer de page
const changePage = (num) => {
  const queries = { ...route.query }
  queries.page = num

  // Assurez-vous de convertir la valeur de la page en nombre
  router.push({ name: 'home', query: queries })
}

// Calculer la page actuelle à partir de route.query.page
const currentPage = computed(() => Number(route.query.page || 1))
</script>
<template>
  <div class="mt-[40px] flex w-full items-center justify-center gap-[25px]">
    <!-- Icône "previous" -->
    <font-awesome-icon :icon="['fas', 'angle-left']" @click="changePage(currentPage - 1)" v-if="currentPage > 1" />
    <font-awesome-icon :icon="['fas', 'angle-left']" class="text-lbc_greymed" v-else />

    <!-- Liste des pages -->
    <div class="flex">
      <p
        v-for="num in pagination.pageCount"
        :key="num"
        :class="{
          'rounded-sm bg-black text-white': num === currentPage,
          'flex h-10 w-10 cursor-pointer items-center justify-center': true,
        }"
        @click="changePage(num)"
      >
        {{ num }}
      </p>
    </div>

    <!-- Icône "next" -->
    <font-awesome-icon :icon="['fas', 'angle-right']" @click="changePage(currentPage + 1)" v-if="currentPage < pagination.pageCount" />
    <font-awesome-icon :icon="['fas', 'angle-right']" class="text-lbc_grey_med" v-else />
  </div>
</template>
