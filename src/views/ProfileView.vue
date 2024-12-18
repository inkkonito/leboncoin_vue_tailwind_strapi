<script setup>
import BtnPublisherOffer from '../components/BtnPublisherOffer.vue'
</script>
<template>
  <div class="mx-[20px] mb-[20px] mt-[200px]">
    <div>
      <div class="mb-[30px] flex gap-[20px] rounded-[15px] border-[1px] p-[15px]">
        <!-- avatar -->
        <div class="flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-lbc_grey">
          <p>Initial</p>
        </div>

        <!-- infos -->
        <div class="flex flex-col items-center justify-center gap-[10px]">
          <h1 class="text-[24px] font-bold">Username</h1>
          <p>email</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-[20px] rounded-[15px] px-[25px] py-[15px]">
        <p>Vous n'avez aucune annonce en ligne</p>
        <BtnPublisherOffer />
      </div>
    </div>
  </div>
</template>
