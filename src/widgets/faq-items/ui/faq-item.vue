<template>
  <div class="border-t border-gray-300 relative">
    <div class="mb-6 text-2xl font-medium mt-6">
      {{ item.question }}
    </div>
    <button
      class="text-gray-400 hover:text-gray-600 text-xl w-10 h-10 rounded-full border border-gray font-bold transition absolute right-[-50px] top-6"
      @click="toggle"
    >
      {{ isOpened? 'x' : '+'}}
    </button>
    <div
      v-if="isOpened"
      class="text-sm"
      v-html="item.answer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FaqItem } from '../api/faq-item.ts';
interface Props {
  item: FaqItem,
}

defineProps<Props>();

const isOpened = ref(false);

const toggle = () => {
  isOpened.value = !isOpened.value;
}
</script>
