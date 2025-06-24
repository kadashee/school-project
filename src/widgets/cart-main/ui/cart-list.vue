<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '@/entities/cart';
import { fetchProducts, type Product } from '@/widgets/products/api';
import CartItem from './cart-item.vue';

const cartStore = useCartStore();

// 1. Создаем локальное хранилище для ВСЕХ курсов
const allProducts = ref<Product[]>([]);
const isLoading = ref(true);

// 2. При монтировании компонента один раз загружаем все курсы
onMounted(async () => {
  try {
    allProducts.value = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    isLoading.value = false;
  }
});

// 3. Создаем вычисляемое свойство - это и есть наша корзина!
// Оно будет РЕАКТИВНО фильтровать все курсы,
// оставляя только те, чьи ID есть в нашем хранилище.
const cartProducts = computed(() => {
  // Возвращаем пустой массив, пока все продукты не загружены
  if (!allProducts.value.length) {
    return [];
  }
  // Фильтруем...
  return allProducts.value.filter(product => cartStore.ids.includes(product.id));
});
</script>

<template>
  <div class="flex-grow">
    <div v-if="isLoading" class="pt-10 text-center">
      <p class="text-gray-500 text-lg">Загрузка...</p>
    </div>
    <div v-else-if="cartProducts.length === 0" class="pt-10 text-center">
      <p class="text-gray-500 text-lg">Ваша корзина пуста.</p>
    </div>
    <div v-else class="flex flex-col gap-y-6">
      <CartItem
        v-for="item in cartProducts"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>
