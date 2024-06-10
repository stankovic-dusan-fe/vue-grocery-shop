<template>
  <div
    class="col-span-1 h-auto bg-[#F9FCFE] border border-[#54B1F4] rounded-2xl px-4 py-6 xl:col-span-3 md:fixed md:bottom-0 md:left-0 md:z-40 md:shadow-custom md:w-full md:rounded-b-none md:border-b-0"
    :class="showCart ? 'lg:block' : 'lg:hidden'"
  >
    <div class="flex justify-between items-center mb-6">
      <h4 class="font-robotoSlab font-bold text-[28px]">Your basket</h4>

      <WindowClose @click="showCart = false" class="text-[20px] hidden md:block" />
    </div>
    <div class="w-full">
      <div class="w-full flex mt-4" v-for="product in cart">
        <div class="w-1/2 h-full">
          <h6 class="font-robotoSlab font-bold text-xl">{{ product.name }}</h6>
          <p class="font-robotoSlab font-normal text-base">
            {{ product.price }} - {{ product.quantity }} {{ product.unit }}
          </p>
        </div>
        <div class="w-1/2 h-full flex justify-end">
          <h6 class="font-robotoSlab font-bold text-xl">
            $ {{ productTotalPrice(product.quantity, product.price) }}
          </h6>
        </div>
      </div>
    </div>
    <div class="w-full h-auto flex py-6">
      <div class="w-1/2 h-auto">
        <h6 class="font-robotoSlab font-bold text-2xl">Total</h6>
        <p class="font-robotoSlab font-normal text-base">Tax included</p>
      </div>
      <div class="w-1/2 flex justify-end">
        <h6 class="font-robotoSlab font-bold text-2xl">$ {{ cartTotal }}</h6>
      </div>
    </div>
    <div class="w-full h-auto flex justify-center items-center">
      <BaseButton
        text="To Checkout"
        icon="credit-card"
        button-custom="w-full bg-[#0092FB] text-white"
      />
    </div>
  </div>
  <CartButton :class="showCart ? 'lg:hidden' : 'lg:block'" @click="showCart = !showCart" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useProductsStore } from '@/stores/index'

import BaseButton from '@/components/ui/BaseButton.vue'
import CartButton from '@/components/cart/CartButton.vue'

import WindowClose from 'vue-material-design-icons/WindowClose.vue'

const cart = useProductsStore().cart
const cartTotal = ref('0.00')

const showCart = ref(false)

const productTotalPrice = (quantity, price) => {
  let total = quantity * price
  return total.toFixed(2)
}

const calculateCartTotal = () => {
  let total = 0
  for (const product of cart) {
    total += parseFloat(productTotalPrice(product.quantity, product.price))
  }
  return total.toFixed(2)
}

watch(cart, () => {
  cartTotal.value = calculateCartTotal()
})
</script>
