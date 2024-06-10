<template>
  <div class="max-w-[1600px] h-full mx-auto py-12 px-10 sm:py-6 sm:px-5">
    <div class="w-full">
      <h1 class="font-robotoSlab font-bold text-4xl">Vue regular grocery shop</h1>
      <TheNavigation />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheNavigation from './components/layout/TheNavigation.vue'
</script>
