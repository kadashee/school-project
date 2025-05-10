<template>
  <div class="text-3xl py-5 font-medium">
    Классы
  </div>
  <div class="flex gap-2 max-w-lg flex-wrap">
        <ClassYearItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          :icon="classIcons[index]"
        />
    </div>
</template>

<script setup lang="ts">
import ClassYearItem from './class-year-item.vue';
import { onMounted, ref } from 'vue';
import { getClassYears } from "../api";
import type { ClassYears } from "../api/class-years.ts";
import { classIcons } from './class-icons.ts';

const items = ref<ClassYears[]>([]);

onMounted(async () => {
  try {
    items.value = await getClassYears(0, 15);


  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});


</script>
