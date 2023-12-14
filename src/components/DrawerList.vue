<script setup lang="ts">
import CardDrawer from './CardDrawer.vue'
import { inject } from 'vue'
//@ts-ignore
const { cart, removeFromCart } = inject('cartActions')
</script>

<template>
  <div  class="flex flex-col gap-5" v-auto-animate>
    <CardDrawer
      v-for="item in cart"
      :key="item.id"

      :title="item.title"
      :price="item.price"
      :imageUrl="item.imageUrl"

      @onClickRemove="removeFromCart(item)"
    />
  </div>
</template>

<style scoped></style>
