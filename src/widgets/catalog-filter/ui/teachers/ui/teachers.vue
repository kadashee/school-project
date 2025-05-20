<template>
  <div>
    <div class="text-3xl py-5 font-medium">
      Преподаватели
    </div>
    <div class="flex flex-column gap-2 max-w-lg flex-wrap">
      <div class="relative">
        <input class="caret-black bg-[#f2f2f2] rounded-md min-w-40 w-dvh h-10 items-center flex overflow-hidden font-medium text-2xl gap-9 px-10" type="text">
        <svg class="absolute top-2 left-2" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" view-box="0 0 24 24"><defs><symbol fill="none" viewBox="0 0 24 24" id="search"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.674 3.673a1 1 0 1 1-1.415 1.415l-3.673-3.674ZM4 11a7 7 0 1 1 12.051 4.846 1.008 1.008 0 0 0-.205.205A7 7 0 0 1 4 11Z" fill="currentColor"></path></symbol></defs><g><path fill-rule="evenodd" clip-rule="evenodd" d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.674 3.673a1 1 0 1 1-1.415 1.415l-3.673-3.674ZM4 11a7 7 0 1 1 12.051 4.846 1.008 1.008 0 0 0-.205.205A7 7 0 0 1 4 11Z" fill="currentColor"></path></g></svg>
      </div>
      <div>
        <TeacherItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TeacherItem from './teacher-item.vue';
import { onMounted, ref } from 'vue';
import { getTeachers } from "../api";
import type { Teacher } from "../api/teacher.ts";

const items = ref<Teacher[]>([]);

onMounted(async () => {
  try {
    items.value = await getTeachers(0, 5);

  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
