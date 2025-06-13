<template>
  <div class="bg-gray-100 rounded-3xl flex flex-col w-full px-4 pt-4 sm:flex-row sm:px-0 sm:pt-0">
    <div
      class="flex rounded-3xl relative sm:w-[250px]"
      :style="{ backgroundColor: brandbookIdToColorMapper[item.brandbook_style_id] }"
    >
      <img
        :src="getBrandbookIconUrl(item.brandbook_style_id)"
        alt="Иконка предмета"
        class="absolute top-0 right-0 z-1"
      />
      <img :src="item.teacher.photo" class="z-10" />
    </div>

    <div class="sm:pl-4 sm:w-[300px] md:w-[500px] lg:flex-1 lg:flex lg:flex-col lg:justify-between">
      <div>
        <div class="font-medium text-xl py-4">{{ item.title }}</div>

        <div class="flex gap-5">
          <div class="bg-white rounded-2xl py-1 px-3">
            {{ item.class_year_name }}
          </div>
          <div class="bg-white rounded-2xl py-1 px-3">
            {{ item.course_type_name }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-x-20 gap-y-3 text-xs py-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:py-10">
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
        <div>
          <span class="text-gray-600">Формат</span><br />
          {{ item.format }}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 sm:mx-auto sm:py-6 sm:flex-1 sm:px-4 md:mx-auto md:py-3 lg:w-[250px] lg:flex-none">
      <div class="text-2xl font-medium text-center">
        {{ item.monthly_price }} р./мес
      </div>

      <AddToCart :id="item.id" class="mt-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product, brandbookIdToColorMapper } from '../api/product.ts';
import { getBrandbookIconUrl } from '@/shared/lib/get-brandbook-icon-url.ts';
import { AddToCart } from '@/features/add-to-cart/ui';

defineProps<{ item: Product }>();
</script>
