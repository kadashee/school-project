<template>
  <div class="h-full w-full flex items-center">
    <div class="h-9/10 w-full mx-9 my-9 bg-white rounded-xl flex pb-10">
      <div class="text-5xl font-medium py-4 pl-4 pr-80 min-w-3x1 mb-4">
        FAQ
      </div>
      <div class="mr-20 ml-20 space-y-7">
        <FaqItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FaqItem from './faq-item.vue';
import { onMounted, ref } from 'vue';
import { getFaq } from "../api";
import type { Faq } from "../api/faq.ts";

const items = ref<Faq[]>([]);

onMounted(async () => {
  try {
    items.value = await getFaq(0, 15);

  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});


</script>
