<script setup lang="ts">
defineProps<{
  imageUrl: string
  title: string
  price: number
  isFavorite: boolean
  isAdded: boolean
  onClickAdd: () => void
  onClickFavorite: () => void
}>()
</script>

<template>
  <div
    class="bg-white relative border border-slate-100 rounded-2xl cursor-pointer hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      @click="onClickFavorite"
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="like 1"
      class="absolute top-2 left-2"
    />
    <img class="w-90% h-60% " :src="imageUrl" alt="Sneaker" />
    <p class="fz">{{ title }}</p>

    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <span>{{ price }}</span>
      </div>

      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" />
    </div>
  </div>
</template>

<style scoped>
.fz{
  font-size: 15px;
}
</style>
