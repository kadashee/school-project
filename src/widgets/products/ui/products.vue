<template>
<div
  v-if="items.length"
  class="space-y-4"
>
  <ProductItem
    v-for="(item, index) in items"
    :key="index"
    :item="item"
  />
</div>
</template>

<script setup lang="ts">
import ProductItem from './product-item.vue';
import {onMounted, ref} from "vue";
import { fetchProducts } from "../api";
import type { Product } from "../api/product.ts";

const items = ref<Product[]>([]);

onMounted(async () => {
  try {
    items.value = await fetchProducts(0, 5);

  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
