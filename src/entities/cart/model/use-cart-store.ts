import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // Основное состояние - просто массив ID.
  const ids = ref<number[]>([]);

  const isInCart = (id: number) => ids.value.includes(id);

  const toggle = (id: number) => {
    if (isInCart(id)) {
      ids.value = ids.value.filter((i) => i !== id);
    } else {
      ids.value.push(id);
    }
  };

  return { ids, isInCart, toggle };
});
