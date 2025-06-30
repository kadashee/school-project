<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/entities/cart/model/use-cart-store';
import { BaseButton } from '@/shared/ui/base-button';
import type { Product } from '@/widgets/products/api/product';

const props = defineProps<{ product: Product }>();

const cart   = useCartStore();
const inCart = computed(() => cart.isInCart(props.product.id));

function onClick() {
  cart.toggle(props.product);
}
</script>

<template>
  <BaseButton
    :class="inCart ? 'bg-gray-700' : 'bg-black hover:bg-gray-900'"
    @click="onClick"
  >
    {{ inCart ? 'В корзине' : 'В корзину' }}
  </BaseButton>
</template>
