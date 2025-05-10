<template>

  <Dialog :open="isOpen" @close="isOpen = false">
    <DialogPanel class="fixed top-0 right-0 h-full w-40vw bg-white overflow-y-auto p-4">

      <button @click="isOpen = !isOpen" class="absolute top-4 right-4 text-xl font-bold">
        &times;
      </button>

      <ClassYearItems />
      <ClassTypeItems />
      <ClassGoalItems />
      <TeacherItems />
      <FilterButtons />
    </DialogPanel>


  </Dialog>
</template>

<script setup lang="ts">
import { ClassYearItems } from './class-years';
import { ClassTypeItems } from './class-types';
import { ClassGoalItems } from './class-goals';
import { TeacherItems } from './class-teachers';
import { FilterButtons } from './filter-buttons';
import { defineModel } from 'vue';
import {
  Dialog,
  DialogPanel
} from '@headlessui/vue'

const isOpen = defineModel<boolean>({ required: true })

</script>
