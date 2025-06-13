<template>
  <div class="h-60 flex rounded-3xl mx-6">
    <div class="h-60 flex w-75 bg-orange-400 rounded-3xl relative">
      <img
        src="https://umschool.net/_ipx/w_320&f_webp&q_75/https://storage.yandexcloud.net/net.umschool/media/seo/teacher_profile_details/photos/%25D0%2590%25D0%25BB%25D0%25B5%25D0%25BA%25D1%2581%25D0%25B0%25D0%25BD%25D0%25B4%25D1%2580_%25D0%2594%25D0%25BE%25D0%25BB%25D0%25B3%25D0%25B8%25D1%2585_7tsnzHm.png"
        alt="man photo"
      />
    </div>
    <div class="px-5">
      <div class="font-medium text-xl pt-4 max-w-5xl relative">
        {{ item.title }}
        <svg
          class="absolute -top-0 -right-8"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="24"
          height="24"
          view-box="0 0 24 24"
        >
          <defs>
            <symbol
              fill="none"
              viewBox="0 0 24 24"
              id="cross"
            >
              <path
                d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z"
                fill="currentColor"
              ></path>
            </symbol>
          </defs>
          <g>
            <path
              d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
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
          {{ item.lessons_duration }}
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
import { type Product, brandbookIdToColorMapper } from '@/widgets/products/api/product.ts';
import { getBrandbookIconUrl } from '@/shared/lib/get-brandbook-icon-url.ts';
import { AddToCart } from '@/features/add-to-cart/ui';

defineProps<{ item: Product }>();
</script>
