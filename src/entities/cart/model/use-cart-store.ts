import { defineStore } from 'pinia';


// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     ids: [] as number[],
//   }),
//
//   getters: {
//     isInCart: (state) => (id: number) => state.ids.includes(id),
//   },
//
//   actions: {
//     toggle(id: number) {
//       this.isInCart(id)
//         ? (this.ids = this.ids.filter((i) => i !== id))
//         : this.ids.push(id);
//     },
//   },
// });

export const useCartStore = defineStore('cart', () => {
  const ids = ref<number[]>([]);

  const isInCart = computed(() => (id: number) => ids.value.includes(id));

  const toggle = (id: number) => {
    if (isInCart.value(id)) {
      ids.value = ids.value.filter((i) => i !== id);
    } else {
      ids.value.push(id);
    }
  }
  
  return { ids, isInCart, toggle };
});


