<template>
  <div
    class="caret-black bg-[#f2f2f2] rounded-md min-w-40 w-dvh h-16 mt-3 items-center flex overflow-hidden text-xl gap-4 px-4"
  >
    <img
      class="w-12 h-12 rounded-full"
      :src="item.avatar"
    />
    <span>{{ item.full_name }}</span>
  </div>
</template>
<script setup lang="ts">
import type { Teacher } from '../api/teacher.ts';

interface Props {
  item: Teacher;
}

defineProps<Props>();
</script>
