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
        <div class="caret-black bg-[#f2f2f2] rounded-md min-w-40 w-dvh h-16 mt-3 items-center flex overflow-hidden text-xl gap-4 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <g>
              <circle cx="24" cy="24" r="24" fill="green"/>
              <circle cx="24" cy="18" r="12" fill="#e0e0e0"/>
              <rect x="14" y="28" width="20" height="20" rx="8" fill="#e0e0e0"/>
              <circle cx="20" cy="16" r="1.5" fill="#555"/>
              <circle cx="28" cy="16" r="1.5" fill="#555"/>
              <path d="M20 22 Q24 24 28 22" stroke="#555" stroke-width="1" fill="none"/>
              <path d="M12 14 Q24 5 36 14" stroke="#333" stroke-width="5" fill="none"/>
            </g>
          </svg>
          <span>Артур Левиев</span>
        </div>
        <div class="caret-black bg-[#f2f2f2] rounded-md min-w-40 w-dvh h-16 mt-3 items-center flex overflow-hidden text-xl gap-4 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
            <g>
              <circle cx="24" cy="24" r="24" fill="yellow"/>
              <circle cx="24" cy="18" r="12" fill="#e0e0e0"/>
              <rect x="14" y="28" width="20" height="20" rx="8" fill="#e0e0e0"/>
              <circle cx="20" cy="16" r="1.5" fill="#555"/>
              <circle cx="28" cy="16" r="1.5" fill="#555"/>
              <path d="M20 22 Q24 24 28 22" stroke="#555" stroke-width="1" fill="none"/>
              <path d="M12 10 Q24 2 36 10" stroke="#333" stroke-width="4" fill="none"/>
              <path d="M12 18 Q12 28 16 34" stroke="#333" stroke-width="3" fill="none"/>
              <path d="M36 18 Q36 28 32 34" stroke="#333" stroke-width="3" fill="none"/>
            </g>
          </svg>
          <span>Анжелика Ковальски</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
