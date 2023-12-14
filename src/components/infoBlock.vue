<script setup lang="ts">
const props = defineProps<{
    title:string,
    description:string,
    imageUrl:string
}>()
</script>

<template>
    <div class="flex flex-col items-center text-center max-w-xs" >
        <img height="70" width="70" :src="props.imageUrl" alt="cart"/>
        <h2 class="mt-4 text-2xl font-medium">{{ props.title }}</h2>
        <p class="text-gray-400">{{ props.description }}</p>
    </div>
</template>



<style scoped>

</style>