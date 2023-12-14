<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

const favorites = ref([])

onMounted(async()=>{
    try {
        const {data} = await axios.get('https://829335bb705b4ce1.mokky.dev/favorites')
        favorites.value = data
    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div>

    </div>
</template>



<style scoped>

</style>