<script setup lang="ts">
import CardList from '../components/CardList.vue'
import axios from 'axios'
//@ts-ignore
import debounce from 'lodash.debounce'
import { type paramsType } from '../types/index'
import { inject, onMounted, ref, watch } from 'vue';
//@ts-ignore
const {cart,addToCart,removeFromCart} = inject('cartActions')

const items = ref<any>([])

const filters = ref({
  sortBy: 'title',
  searchQuery: ''
})

const addToFavorite = async (item: any) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }
      item.isFavorite = true
      const { data } = await axios.post('https://829335bb705b4ce1.mokky.dev/favorites', obj)
      console.log('data', data)
      item.favoriteId = data.id
    } else {
      //Удаление
      item.isFavorite = false
      await axios.delete(`https://829335bb705b4ce1.mokky.dev/favorites/${item.favoriteId}`)
      item.FavoriteID = null
    }
  } catch (error) {
    console.log(error)
  }
}

const onChangeSelect = (event: any) => {
  filters.value.sortBy = event.target.value
}

const onChangeInput = debounce((event: any) => {
  filters.value.searchQuery = event.target.value
}, 500)

const onClickAddPlus = (item: any) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const fetchItems = async () => {
  try {
    const params: paramsType = {
      sortBy: filters.value.sortBy
    }
    if (filters.value.searchQuery) {
      params.title = `*${filters.value.searchQuery}*`
    }
    const { data } = await axios.get('https://829335bb705b4ce1.mokky.dev/items', {
      params: params
    })
    items.value = data.map((obj: any) => ({
      ...obj,
      FavoriteID: null,
      isFavorite: false,
      isAdded: false
    }))
  } catch (error) {
    console.log(error)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://829335bb705b4ce1.mokky.dev/favorites')
    items.value = items.value.map((item: any) => {
      const favorite = favorites.find((favorite: any) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}
watch(cart, () => {
  items.value = items.value.map((item: any) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems, { deep: true })

onMounted(async () => {
  const localStorageItem = localStorage.getItem('cart')
  cart.value = localStorageItem ? JSON.parse(localStorageItem) : []

  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item: any) => ({
    ...item,
    //@ts-ignore
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})
</script>


<template>
    <div class="p-10">
      <div class="flex justify-between items-center mb-10">
        <h2 class="self-baseline text-3xl font-bold">Все кроссовки</h2>

        <div class="flex gap-4">
          <select @change="onChangeSelect" class="py-2 px-3 border rounded-md">
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>

          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" alt="image" />
            <input
              @input="onChangeInput"
              class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>

      <CardList :items="items" @addToFavorite="addToFavorite" @addToCart="onClickAddPlus" />
    </div>
</template>


<style scoped>

</style>