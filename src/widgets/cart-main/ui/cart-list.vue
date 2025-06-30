<script setup lang="ts">
import { useCartStore } from '@/entities/cart';
import CartItem from './cart-item.vue';
import type { Product } from '@/entities/product';

const cartStore = useCartStore();
</script>

<template>
  <div class="flex-grow">
    <div v-if="cartStore.items.length === 0" class="pt-10 text-center">
      <p class="text-gray-500 text-lg">Ваша корзина пуста.</p>
    </div>
    <div v-else class="flex flex-col gap-y-6">
      <CartItem
        v-for="item in cartStore.items"
        :key="item.id"
        :item="(item as Product)"
      />
    </div>
  </div>
</template>
