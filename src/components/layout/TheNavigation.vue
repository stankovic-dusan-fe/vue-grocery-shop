<template>
  <div class="w-full h-auto flex justify-start items-center my-8 sm:my-4">
    <RouterLink
      v-for="(link, index) in navLinks"
      :key="index"
      class="p-4 font-roboto font-bold text-sm text-[#848484] sm:text-base"
      :to="link.route"
    >
      {{ link.label }}
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navLinks = ref([
  { label: 'All Products', route: '/' },
  { label: 'My Favorites', route: '/favorites' }
  // { label: 'My Previous Shoppings', route: '/previous' }
])
</script>
