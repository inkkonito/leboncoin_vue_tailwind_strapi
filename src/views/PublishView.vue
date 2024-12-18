<script setup>
import { inject, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const GlobalStore = inject('GlobalStore')

// init form variables
const title = ref('')
const price = ref(null)
const description = ref('')
const pictures = ref(null)

const errorMessage = ref('')
const isPublishing = ref(false)

const handleSubmit = async () => {
  errorMessage.value('')
}
</script>
<template>
  <div class="rounded-[15px] bg-white p-[20px]">
    <h1 class="mb-[50px] text-[22px] font-bold">Déposer une annonce</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col">
      <!-- titre -->
      <label for="title" class="mb-[20px]">Titre de l'annonce</label>
      <input type="text" name="title" id="title" class="w-[770px] rounded-[10px] border-[1px] border-lbc_grey p-[13px]" />
      <p class="mb-[30px] mt-[5px] w-[770px] text-[12px] leading-[14px] text-lbc_grey">
        Vous n'avez pas besoin de mentionner « Achat » ou « Vente » ici.
      </p>

      <!-- description -->
      <label for="description" class="mb-[10px]">Description de l'annonce</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="1"
        class="w-[770px] rounded-[10px] border-[1px] border-lbc_grey p-[13px]"
      ></textarea>
      <p class="mb-[30px] mt-[5px] w-[770px] text-[12px] leading-[14px] text-lbc_grey">
        Nous vous rappelons que la vente de contrefaçons est interdite. Nous vous invitons à ajouter tout élément permettant de prouver
        l’authenticité de votre article: numéro de série, facture, certificat, inscription de la marque sur l’article, emballage etc.
        Indiquez dans le texte de l’annonce si vous proposez un droit de rétractation à l’acheteur. En l’absence de toute mention,
        l’acheteur n’en bénéficiera pas et ne pourra pas demander le remboursement ou l’échange du bien ou service proposé
      </p>

      <!-- prix de vente -->
      <label for="price" class="mb-[10px]">Votre prix de vente</label>
      <div class="flex h-[45px] items-center">
        <input
          type="number"
          name="price"
          id="price"
          class="h-full rounded-bl-[15px] rounded-tl-[15px] border-[1px] border-lbc_grey p-[10px]"
        />
        <span
          class="flex h-full w-[45px] items-center justify-center rounded-br-[15px] rounded-tr-[15px] border-[1px] border-l-0 border-lbc_grey text-[14px]"
        >
          €
        </span>
      </div>

      <div>
        <label for="pictures" class="mb-[10px]">Ajoutez des photos</label>
        <div
          class="mt-[10px] flex h-[150px] w-[150px] flex-col items-center justify-center gap-[15px] rounded-[10px] border-[1px] border-lbc_blue_dark p-[5px]"
        >
          <font-awesome-icon :icon="['fas', 'camera']" class="text-[40px] text-lbc_blue_dark" />
          <span class="text-center leading-[20px] text-lbc_blue_dark">Sélectionnez jusqu'à 10 photos</span>
        </div>
      </div>

      <!-- preview  -->
      <div class="mt-[20px] flex flex-wrap gap-[10px]"></div>

      <button class="mt-[40px] cursor-pointer self-end rounded-[10px] border-0 bg-lbc_orange p-[10px] font-bold text-white">
        Déposer mon annonce
      </button>
    </form>
  </div>
</template>
<style scoped></style>
