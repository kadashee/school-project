<template>
  <div
    class="rounded-md min-w-28 w-36 h-24 flex flex-col justify-end relative p-2 overflow-hidden font-medium bg-no-repeat bg-center
      bg-contain"
    :style="{ backgroundImage: `url(${item.logo})` }"
  >
    <span class="text-center">{{ item.title }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ClassType } from '../api/class-type.ts';

interface Props {
  item: ClassType;
}

defineProps<Props>();
</script>
