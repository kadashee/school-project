<template>

  <Dialog :open="isOpen" @close="isOpen = false">
    <DialogPanel class="fixed top-0 right-0 h-full w-40vw bg-white overflow-y-auto p-4">

      <button @click="isOpen = !isOpen" class="absolute top-4 right-4 text-xl font-bold">
        &times;
      </button>

      <FilterClasses />
      <FilterSubject />
      <FilterGoals />
      <FilterTeachers />
      <FilterButtons />
    </DialogPanel>


  </Dialog>
</template>

<script setup lang="ts">
import { FilterClasses } from './filter-classes';
import { FilterSubject } from './filter-subject';
import { FilterGoals } from './filter-goals';
import { FilterTeachers } from './filter-teachers';
import { FilterButtons } from './filter-buttons';
import { defineModel } from 'vue';
import {
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const isOpen = defineModel<boolean>({ required: true })

</script>
