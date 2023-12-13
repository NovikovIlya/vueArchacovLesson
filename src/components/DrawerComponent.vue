<script setup lang="ts">
import DrawerHead from './DrawerHead.vue'
import DrawerList from './DrawerList.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 bbb70">
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <DrawerHead />
      <DrawerList />

      <div class="flex flex-col gap-5 mb-5 my-7">
        <div class="flex">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>129990</b>
        </div>

        <div class="flex">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>900</b>
        </div>

        <button
          class="disabled:bg-slate-400 bg-lime-500 w-full rounded-xl py-3 text-white cursor-pointer"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bbb70 {
  background-color: rgba(102, 204, 255, 0.5);
}
</style>
