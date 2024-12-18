<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { inject } from 'vue'

import BtnPublisherOffer from './BtnPublisherOffer.vue'
import SearchByTitle from './SearchByTitle.vue'

const GlobalStore = inject('GlobalStore')

// console.log(GlobalStore.userInfos)

const disconnectUser = () => {
  GlobalStore.changeUserInfos({ username: '', token: '' })
  $cookies.remove('userInfos')
  router.push({ name: 'home' })
}

const route = useRoute()
const router = useRouter()

const handleSearch = (searchText) => {
  console.log('searchText>>', searchText)
  const queries = { ...route.query }

  if (searchText) {
    queries.title = searchText
  } else {
    delete queries.title
  }

  queries.page = 1

  router.push({ name: 'home', query: queries })
}

const whenBecomeEmpty = (value) => {
  if (value === '') {
    // Copie des query existantes pour pouvoir les modifier
    const queries = { ...route.query }

    // Suppression de la query 'title'
    delete queries.title

    // On navigue vers la route actuelle avec les query mises à jour
    router.push({ name: 'home', query: queries })
  }
}
</script>
<template>
  <header class="fixed left-0 top-0 z-10 h-[110px] w-full border-b-2 bg-white">
    <!-- Header container -->
    <div class="mx-auto flex max-w-[1050px] flex-col justify-between pb-5 pt-5">
      <!-- Top bloc -->
      <div class="flex items-center justify-between">
        <RouterLink to="/"><img src="../assets/svg/logo.svg" alt="" class="w-[140px]" /></RouterLink>
        <!-- Top : Middle Part -->
        <div class="flex gap-5">
          <div>
            <BtnPublisherOffer />
          </div>
          <div>
            <SearchByTitle v-on:handleSearch="handleSearch" v-on:whenBecomeEmpty="whenBecomeEmpty" />
          </div>
        </div>
        <!-- Top : Right part -->
        <div
          v-if="GlobalStore && GlobalStore.userInfos && GlobalStore.userInfos.value && GlobalStore.userInfos.value.username"
          class="flex h-full items-center gap-[30px] text-[16px]"
        >
          <div class="flex flex-col items-center justify-center">
            <font-awesome-icon :icon="['far', 'user']" />
            <RouterLink :to="{ name: 'profile' }">
              <p class="text-[12px]">{{ GlobalStore.userInfos.value.username }}</p>
            </RouterLink>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-right']" @click="disconnectUser" class="cursor-pointer text-lbc_grey" />
          </div>
        </div>
        <div v-else>
          <a href="/login" class="flex flex-col items-center justify-center">
            <font-awesome-icon :icon="['far', 'user']" class="" />
            <p class="text-base">Se connecter</p>
          </a>
        </div>
      </div>
      <!-- Bottom Bloc -->
      <div class="mb-2 mt-4">
        <ul class="flex items-center justify-between">
          <li>Immobilier</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Véhicules</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Location de vacances</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Emploi</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Mode</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Maison & Jardin</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Famille</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Electronique</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Loisirs</li>
          <font-awesome-icon :icon="['fas', 'circle']" class="h-1 w-1" />
          <li>Autres</li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
