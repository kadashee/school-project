<template>
  <div class="h-60 flex rounded-3xl mx-6">
    <div class="h-60 flex w-75 bg-orange-400 rounded-3xl relative">
      <img
        :src="item.teacher.photo"
        alt="Фото преподавателя"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="px-5">
      <div class="font-medium text-xl pt-4 max-w-5xl relative">
        {{ item.title }}
        <button @click="cartStore.toggle(item.id)" class="absolute -top-0 -right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="flex gap-5 py-5">
        <div class="bg-gray-200 rounded-2xl py-1 px-3">{{ item.class_year_name }}</div>
        <div class="bg-gray-200 rounded-2xl py-1 px-3">{{ item.course_type_name }}</div>
      </div>
      <div class="flex gap-10 justify-between text-xs py-3 leading-5 border-y border-gray-200">
        <div>
          <span class="text-gray-600">Старт</span><br />
          {{ item.start_date }}
        </div>
        <div>
          <span class="text-gray-600">Кол-во занятий</span><br />
          {{ item.lessons_amount }}
        </div>
        <div>
          <span class="text-gray-600">Продолжительность</span><br />
          {{ item.duration }}
        </div>
      </div>
      <div class="flex justify-between mt-4">
        <div>
          Оплата:
          <div class="border rounded-4xl px-4 py-2 mt-4">{{ item.monthly_price }}</div>
        </div>
        <div>
          Выбери тариф
          <div class="border border-black px-8 py-2 mt-4 rounded-sm">{{ item.format }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/entities/cart';
import type { CartItem } from '@/entities/cart';

const cartStore = useCartStore();
defineProps<{ item: Product }>();
</script>
