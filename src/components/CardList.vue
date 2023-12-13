<script setup lang="ts">

import Card from './CardComponent.vue'

defineProps<{
  items: any
}>()
const emit = defineEmits(['addToFavorite'])


const onClick = ()=>{
  console.log('Добавить')
 
}

</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="items.id"
      :onClickFavorite="()=>emit('addToFavorite',item)"
      :onClickAdd="onClick"
      :isFavorite="item.isFavorite"
      :isAdded="true"
      :price="item.price"
      :title="item.title"
      :imageUrl="item.imageUrl"
      
    />
  </div>
</template>

<style scoped></style>
