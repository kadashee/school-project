<template>
  <div class="h-full w-full flex items-center">
    <div class="h-9/10 w-full mx-9 my-9 bg-white rounded-xl flex pb-10">
      <div class="text-5xl font-medium py-4 pl-4 pr-80 min-w-3x1 mb-4">
        FAQ
      </div>
      <div class="mr-20 ml-20 space-y-7">
        <AppFaqItem
          v-for="(item, index) in items"
          :key="index"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppFaqItem from './app-faq-item.vue';
import { ref } from 'vue';
import { faqItems } from '../model';

const items = ref(faqItems);


</script>
