<template>
  <div>
    <div class="text-3xl py-5 font-medium">
      Цели
    </div>
    <div class="flex flex-column gap-2 max-w-lg flex-wrap">
      <ClassGoalItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getClassGoals } from "../api";
import type { ClassGoals } from "../api/class-goals.ts";
import ClassGoalItem from "./class-goal-item.vue";

const items = ref<ClassGoals[]>([]);

onMounted(async () => {
  try {
    items.value = await getClassGoals(0, 5);

  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
