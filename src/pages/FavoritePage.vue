<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';

import CardList from '@/components/CardList.vue';

const favorites = ref([])

onMounted(async()=>{
    try {
        const {data} = await axios.get('https://829335bb705b4ce1.mokky.dev/favorites?_relations=items')
        favorites.value = data.map((obj:any)=>obj.item)
    } catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div>
        <CardList :items="favorites"/>
    </div>
</template>



<style scoped>

</style>