<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/HeaderComponent.vue'
import Drawer from './components/DrawerComponent.vue'


//Список товаров
const cart = ref([])
const drawerOpen = ref(false)
const orderId = ref(null)

const isCreatingOrder = ref(false)

const CartButtonDisabled = computed(() => {
  //@ts-ignore
  return isCreatingOrder.value || cart.value.length === 0
})

const totalPrice = computed(() => {
  return cart.value?.reduce((acc: number, item: any) => {
    return acc + item.price
  }, 0)
})

const vatPrice = computed(() => {
  return Math.round((totalPrice.value * 5) / 100)
})

const addToCart = (item: any) => {
  //@ts-ignore
  cart.value.push(item)
  console.log(item)
  item.isAdded = true
}

const removeFromCart = (item: any) => {
  //@ts-ignore
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    const { data } = await axios.post('https://829335bb705b4ce1.mokky.dev/orders', {
      items: cart.value,
      totalPrice: totalPrice.value
    })
    cart.value = []
    orderId.value = data.id
    return data
  } catch (error) {
    console.log(error)
  } finally {
    isCreatingOrder.value = false
  }
}

const closeDrawer = () => {
  drawerOpen.value = false
  orderId.value = null
}

const openDrawer = () => {
  drawerOpen.value = true
}


provide('cartActions', {
  addToCart,
  removeFromCart,
  cart,
  closeDrawer,
  openDrawer
})


watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)
</script>

<template>
  <Drawer
    v-if="drawerOpen"
    :orderId="orderId"
    :totalPrice="totalPrice"
    :vat="vatPrice"
    @createOrder="createOrder"
    :CartButtonDisabled="CartButtonDisabled"
  />
  <div class="bg-white w-4/5 m-auto roundex-xl shadow-xl mt-14">
    <Header :totalPrice="totalPrice" @openDrawer="openDrawer" />
    <router-view />
  </div>
</template>

<style scoped></style>
 