<template>
  <div>
    <div class="text-3xl py-5 font-medium">Цели</div>
    <div class="flex flex-column gap-2 max-w-lg flex-wrap">
      <GoalItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getGoals } from '../api';
import type { Goal } from '../api/goal.ts';
import GoalItem from './goal-item.vue';

const items = ref<Goal[]>([]);

onMounted(async () => {
  try {
    items.value = await getGoals(0, 5);
  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
