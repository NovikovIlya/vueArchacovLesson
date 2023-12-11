<script setup lang="ts">
import Card from './CardComponent.vue'

defineProps<{
  items: any[]
}>()

const onClick = () => {}

const onClickFavorite = () => {}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :onClickFavorite="onClickFavorite"
      :onClickAdd="onClick"
      :isFavorite="true"
      :isAdded="true"
      :price="item.price"
      :title="item.title"
      :imageUrl="item.imageUrl"
    />
  </div>
</template>

<style scoped></style>
