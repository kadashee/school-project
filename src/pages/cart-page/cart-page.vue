<template>
  <AppHeader class="mb-4" />
  <BaseContainer class="flex">
    <CartMain
      v-if="item"
      :item="item"
    />
    <div>
      <CartCheckout />
      <CartOrder class="hidden" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header';
import { BaseContainer } from '@/shared/ui/base-container';
import { ref, onMounted } from 'vue';
import { CartCheckout } from '@/widgets/cart-checkout';
import { CartMain } from '@/widgets/cart-main';
import { CartOrder } from '@/widgets/cart-order';
import { fetchProducts } from '@/widgets/products/api';
import type { Product } from '@/widgets/products/api/product.ts';

const isFilterOpen = ref(false);
const item = ref<Product | null>(null);

onMounted(async () => {
  try {
    const products = await fetchProducts(0, 1);
    item.value = products[0];
  } catch (error) {
    console.error('Ошибка при загрузке продукта:', error);
  }
});
</script>
