<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/entities/cart/model/use-cart-store';
import { BaseButton } from '@/shared/ui/base-button';

const props = defineProps<{ id: number }>();

const cart   = useCartStore();
const inCart = computed(() => cart.isInCart(props.id));

function onClick() {
  cart.toggle(props.id);
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
