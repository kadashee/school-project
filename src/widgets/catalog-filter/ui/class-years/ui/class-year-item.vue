<template>
<div class="bg-blue-300 rounded-md min-w-28 items-center flex flex-col justify-center py-1 text-center">
  <div v-html="icon" class="icon-container w-[70px] h-[68px] items-center flex justify-center"></div>
  <span class="font-medium">{{ item.title }}</span>
</div>
</template>

<script setup lang="ts">
import type { ClassYear } from '../api/class-year.ts'

interface Props {
  item: ClassYear,
  icon: string,
}

defineProps<Props>();

</script>
