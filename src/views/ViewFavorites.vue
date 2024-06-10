<template>
  <p
    class="w-full font-robotoSlab font-normal text-xl text-[#787878]"
    v-if="favoriteProducts.length === 0"
  >
    There are no products in your favorites
  </p>
  <div class="grid grid-cols-4 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
    <FavoriteProduct
      v-for="product in favoriteProducts"
      :key="product.id"
      :product="product"
      :name="product.name"
      :description="product.description"
      :image="product.image"
      :price="product.price"
      :unit="product.unit"
      :favorite="product.favorite"
    />
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index'

import FavoriteProduct from '@/components/product/FavoriteProduct.vue'

const favoriteProducts = useProductsStore().getFavoritesProducts

console.log(favoriteProducts)
</script>
