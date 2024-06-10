<template>
  <div class="grid grid-cols-4 gap-8 xl:grid-cols-1">
    <div class="col-span-3">
      <div class="grid grid-cols-3 gap-8 lg:grid-cols-2 md:grid-cols-1">
        <Product
          v-for="product in products"
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
    </div>
    <Cart />
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index'

import Product from '@/components/product/Product.vue'
import Cart from '@/components/cart/Cart.vue'

const products = useProductsStore().products
</script>
