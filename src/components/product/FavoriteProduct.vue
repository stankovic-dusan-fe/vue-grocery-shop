<template>
  <div
    class="w-full bg-white h-auto flex flex-col flex-grow rounded-2xl px-4 py-6 shadow-custom select-none"
  >
    <div class="w-full h-auto flex justify-end"></div>
    <div class="w-[200px] h-[200px] self-center flex justify-center items-center">
      <img :src="`/images/${image}.png`" alt="product-img" class="w-[80%] h-[80%]" />
    </div>
    <div class="w-full flex flex-1 flex-col justify-between h-auto my-6">
      <h6 class="font-robotoSlab font-bold text-2xl text-[#262626]">{{ name }}</h6>
      <p class="font-robotoSlab font-normal text-sm text-[#787878]">{{ description }}</p>
      <h6 class="font-robotoSlab font-bold text-xl text-[#262626] mt-2">
        $ {{ price }}
        <span class="font-robotoSlab font-normal text-base">(per {{ unit }})</span>
      </h6>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product', 'name', 'image', 'description', 'price', 'unit'])
</script>
