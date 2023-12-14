<script setup lang="ts">
import Card from './CardComponent.vue'

defineProps<{
  items: any
}>()
const emit = defineEmits(['addToFavorite', 'addToCart'])


</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="items.id"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :price="item.price"
      :title="item.title"
      :imageUrl="item.imageUrl"
    />
  </div>
</template>

<style scoped></style>
