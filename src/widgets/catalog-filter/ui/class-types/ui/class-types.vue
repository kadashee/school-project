<template>
  <div class="text-3xl py-5 font-medium">Предметы</div>
  <div class="flex gap-2 max-w-lg flex-wrap">
    <ClassTypeItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import ClassTypeItem from './class-type-item.vue';
import { onMounted, ref } from 'vue';
import { getClassTypes } from '../api';
import type { ClassType } from '../api/class-type.ts';

const items = ref<ClassType[]>([]);

onMounted(async () => {
  try {
    items.value = await getClassTypes(0, 15);
  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
