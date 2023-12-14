<script setup lang="ts">
const props = defineProps<{
  totalPrice:number
}>()
const emit = defineEmits(['openDrawer'])
</script>

<template>
    <header class="flex justify-between border-b border-slate-300 px-8 py-8">
      <RouterLink to="/">
        <div class="flex items-center">
        <img src="/logo.png" alt="logo" class="w-10 mr-10 gap-4" />
        <div class='x2'>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-500">Магазин лучших кросовок</p>
        </div>
      </div>
      </RouterLink>

      <ul class="flex items-center gap-10">
        <li @click="emit('openDrawer')" class=" cursor-pointer  gap-3 text-gray-400 hover:text-black">
          <img src="/cart.svg" alt="cart" />
          <b>{{ props.totalPrice }}</b>
        </li>
        <RouterLink to="/favorite">
          <li class="cursor-pointer">
          <img src="/heart.svg" alt="cart" />
          <span>Закладки</span>
        </li>
        </RouterLink>
        <li class="cursor-pointer">
          <img src="/profile.svg" alt="cart" />
          <span>Профиль</span>
        </li>
      </ul>
    </header >
</template>



<style scoped>

</style>