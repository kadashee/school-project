<template>
  <Menu
    as="div"
    class="relative"
  >
    <div
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
    >
      <MenuButton
        as="div"
        class="flex cursor-pointer"
        >Другие направления
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class=""
        >
          <polyline points="6 9 12 15 18 9"></polyline></svg
      ></MenuButton>
      <MenuItems
        v-if="isOpen"
        class="flex flex-col absolute top-10 left-0 border border-gray-300 z-99"
      >
        <MenuItem
          v-slot="{ active }"
          class="px-7 py-2"
        >
          <a
            :class="{ 'bg-blue-500': active }"
            href="/account-settings"
          >
            Средняя школа
          </a>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="px-7 py-2"
        >
          <a
            :class="{ 'bg-blue-500': active }"
            href="/account-settings"
          >
            Олимпиады
          </a>
        </MenuItem>
        <MenuItem
          v-slot="{ active }"
          class="px-7 py-2"
        >
          <a
            :class="{ 'bg-blue-500': active }"
            href="/account-settings"
          >
            Репетиторы
          </a>
        </MenuItem>
      </MenuItems>
    </div>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ref } from 'vue';

const isOpen = ref(false);
</script>
