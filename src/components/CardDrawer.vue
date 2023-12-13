<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
  title: string
  price: number,
}>()
const emit = defineEmits(['onClickRemove'])
</script>

<template>
  <div class="flex items-center border border-slate-100 p-4  rounder-xl gap-4">
    <img class="w-16 h-16" :src="props.imageUrl" alt="carddrawer" />

    <div class="flex flex-col w-full">
      <p>{{ props.title }}</p>

      <div class="flex justify-between mt-2">
        <b>{{ props.price }}</b>
        <img @click="emit('onClickRemove')" class="opactity-40 hover:opacity-100 cursor-pointer" src="/close.svg" alt="s" />
      </div>
    </div>

  </div>
</template>

<style scoped></style>
