<template>
  <AppHeader class="mb-4"/>
  <BaseContainer>
    <CoursesCatalogHeader />
    <CoursesCatalogFilter v-model="isFilterOpen"/>
    <ProductItems />
    <CatalogFilter v-model="isFilterOpen" />
  </BaseContainer>
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header';
import { CoursesCatalogHeader } from '@/widgets/courses-catalog-header';
import { CoursesCatalogFilter } from '@/widgets/courses-catalog-filter';
import { ProductItems } from '@/widgets/product-items';
import { BaseContainer } from '@/shared/ui/base-container';
import { CatalogFilter } from '@/widgets/catalog-filter/ui';
import { ref } from 'vue';

const isFilterOpen = ref(false);

</script>
