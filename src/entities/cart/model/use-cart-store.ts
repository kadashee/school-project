import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '@/widgets/products/api/product';

export const useCartStore = defineStore('cart', () => {
  // Основное состояние - просто массив ID.
  const items = ref<Product[]>([]);

  const isInCart = (id: number) => {
    return items.value.some((item) => item.id === id);
  }

  const toggle = (product: Product) => {
    const productId = product.id;
    const productInCart = items.value.find((item) => item.id === productId);

    if (productInCart) {
      items.value = items.value.filter((item) => item.id !== productId);
    } else {
      items.value.push(product);
    }

  };

  return { items, isInCart, toggle };
});


// 
