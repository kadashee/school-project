<template>
  <div class="bg-gray-100 h-60 flex rounded-3xl mx-6">
    <div
      class="h-60 flex w-75 rounded-3xl relative bg-brandbook data-brandbook-id={{ item.brandbook_styid }}"
    >
    <img :src="item.teacher.photo">
  </div>
  <div class="px-5">
    <div class="font-medium text-xl pt-4 max-w-5xl">
      {{ item.title }}
    </div>
    <div class="flex gap-5 py-5">
      <div class="bg-white rounded-2xl py-1 px-3">
        {{ item.class_year_name }}
      </div>
      <div class="bg-white rounded-2xl py-1 px-3">
        {{ item.course_type_name }}
      </div>
    </div>
    <div class="flex gap-10 text-xs pt-10 leading-5">
      <div>
        <span class="text-gray-600">Старт</span><br>
        {{ item.start_date }}
      </div>
      <div>
        <span class="text-gray-600">Кол-во занятий</span><br>
        {{ item.lessons_amount }}
      </div>
      <div>
        <span class="text-gray-600">Продолжительность</span><br>
        {{ item.duration }}
      </div>
      <div>
        <span class="text-gray-600">Формат</span><br>
        {{ item.format }}
      </div>
    </div>
  </div>
  <div class="ml-auto pt-3 flex flex-col gap-3">
    <div class="text-2xl font-medium">
      {{ item.monthly_price }} р./мес
    </div>
    <div class="mt-auto border border-black text-center px-20 py-3 rounded-md">
      <button> <a href="#">В корзине</a></button>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import type { Product } from '../api/product.ts';

interface Props {
  item: Product;
}

defineProps<Props>();
</script>


