<template>
<div v-if="courses">
  <ProductItem
  v-for="(course, index) in courses"
  :key="index"
  :title="course.title"
  />
</div>
</template>

<script setup lang="ts">
import ProductItem from './product-item.vue';
import {onMounted, ref} from "vue";
import { fetchCourses } from "../api";

const courses = ref<{ title: string } | null>(null);

onMounted(async () => {
  try {
    courses.value = await fetchCourses(0, 1);

  } catch (error) {
    console.error('Ошибка при загрузке курса:', error);
  }
});
</script>
