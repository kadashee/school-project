<template>
  <AppHeader class="mb-4" />
  <BaseContainer class="flex">
    <CartMain />
      <CartCheckout />
      <CartOrder class="hidden" />
  </BaseContainer>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header';
import { BaseContainer } from '@/shared/ui/base-container';
import { ref, onMounted } from 'vue';
import { CartCheckout } from '@/widgets/cart-checkout';
import { CartMain } from '@/widgets/cart-main';
import { CartOrder } from '@/widgets/cart-order';

</script>

