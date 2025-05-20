<template>
  <div class="flex mt-5 justify-between mx-5">
    <div>
      <img class="relative" src="https://umschool.net/images/app/logotype.svg">
    </div>
    <div class="flex gap-6 font-medium relative items-center ml-25">
      <div class="flex items-center">
        <RouterLink :to="{ name: 'courses' }"> Курсы </RouterLink>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-0.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <a href="#"> ЕГЭ </a>
      <a href="#"> ОГЭ </a>
      <div class="relative group">
        <div class="flex items-center">
          <OpeningsList />
        </div>
      </div>
      <a href="#"> О нас </a>
    </div>
    <div class="relative items-center gap-5 flex">
      <a class="font-medium text-lg" href="#"> +7 (800) 300-63-24 </a>
      <div class="border-2 rounded-md inline-block px-12 py-2">
        <a class="font-medium" href="#">Войти </a>
      </div>
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" view-box="0 0 24 24"><defs><symbol fill="none" viewBox="0 0 24 24" id="bag"><path d="M2 3.762C2 3.34 2.341 3 2.762 3h2.995c.366 0 .68.26.749.619l.63 3.303h12.102a.762.762 0 0 1 .75.898l-1.199 6.582v.005c-.101.528-.377 1.01-.788 1.357-.41.346-.929.535-1.466.526H9.27a2.217 2.217 0 0 1-1.466-.526 2.345 2.345 0 0 1-.787-1.356L5.765 7.859c-.259-1.098-.426-2.227-.638-3.336H2.762A.762.762 0 0 1 2 3.762ZM8.754 17.904c-.868 0-1.51.726-1.51 1.546 0 .82.642 1.546 1.51 1.546.867 0 1.51-.726 1.51-1.546 0-.82-.643-1.546-1.51-1.546ZM16.99 17.904c-.866 0-1.51.726-1.51 1.546 0 .82.643 1.546 1.51 1.546.868 0 1.511-.726 1.511-1.546 0-.82-.643-1.546-1.51-1.546Z" fill="currentColor"></path></symbol></defs><g><path d="M2 3.762C2 3.34 2.341 3 2.762 3h2.995c.366 0 .68.26.749.619l.63 3.303h12.102a.762.762 0 0 1 .75.898l-1.199 6.582v.005c-.101.528-.377 1.01-.788 1.357-.41.346-.929.535-1.466.526H9.27a2.217 2.217 0 0 1-1.466-.526 2.345 2.345 0 0 1-.787-1.356L5.765 7.859c-.259-1.098-.426-2.227-.638-3.336H2.762A.762.762 0 0 1 2 3.762ZM8.754 17.904c-.868 0-1.51.726-1.51 1.546 0 .82.642 1.546 1.51 1.546.867 0 1.51-.726 1.51-1.546 0-.82-.643-1.546-1.51-1.546ZM16.99 17.904c-.866 0-1.51.726-1.51 1.546 0 .82.643 1.546 1.51 1.546.868 0 1.511-.726 1.511-1.546 0-.82-.643-1.546-1.51-1.546Z" fill="currentColor"></path></g></svg>
    </div>

  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { OpeningsList } from "@/widgets/openings-list";
</script>
