<template>
<div class="flex gap-10 text-medium px-8 py-8">
<a href="#" class="rounded-full py-2 px-4 border border-black flex items-center gap-1" @click="isOpen = true">
  Классы
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><defs><symbol fill="none" viewBox="0 0 24 24" id="chevron-down"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></symbol></defs><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></g></svg>
</a>
<a href="#" class="rounded-full py-2 px-4 border border-black flex items-center gap-1" @click="isOpen = true">
  Предметы
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><defs><symbol fill="none" viewBox="0 0 24 24" id="chevron-down"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></symbol></defs><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></g></svg>
</a>
<a href="#" class="rounded-full py-2 px-4 border border-black flex items-center gap-1" @click="isOpen = true">
  Цели
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><defs><symbol fill="none" viewBox="0 0 24 24" id="chevron-down"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></symbol></defs><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></g></svg>
</a>
<a href="#" class="rounded-full py-2 px-4 border border-black flex items-center gap-1" @click="isOpen = true">
  Преподаватели
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><defs><symbol fill="none" viewBox="0 0 24 24" id="chevron-down"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></symbol></defs><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19.717 7.795c.38.392.377 1.025-.006 1.414l-6.806 6.916a1.246 1.246 0 0 1-1.784.001L4.29 9.21a1.018 1.018 0 0 1-.008-1.414.959.959 0 0 1 1.38-.009l6.35 6.43 6.325-6.428a.959.959 0 0 1 1.38.006Z" fill="currentColor"></path></g></svg>
</a>

</div>
</template>
<script setup lang="ts">

import {defineModel} from "vue";

const isOpen = defineModel<boolean>({ required: true })
</script>
