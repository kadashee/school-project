<template>
  <div class="bg-[#ccd9fc] rounded-md w-3xl h-24 p-2 flex gap-2 overflow-hidden font-medium text-2xl">
    <img
      :src="item.image"
      alt="goal logo"
    />
    <span class="items-center flex">{{ item.title }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Goal } from '../api/goal.ts';

interface Props {
  item: Goal;
}

defineProps<Props>();
</script>
