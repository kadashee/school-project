<template>
  <AppHeader class="mb-4" />
  <BaseContainer class="flex">
    <CartMain />
    <div>
      <CartCheckout />
      <CartOrder class="hidden" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header';
import { BaseContainer } from '@/shared/ui/base-container';
import { ref } from 'vue';
import { CartCheckout } from '@/widgets/cart-checkout';
import { CartMain } from '@/widgets/cart-main';
import { CartOrder } from '@/widgets/cart-order';

const isFilterOpen = ref(false);
</script>
