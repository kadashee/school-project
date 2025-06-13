<template>
  <AppHeader class="mb-4" />
  <MainSwitcher />
  <AppBanner />
  <AppHeroBanner />
  <Faqs />
</template>

<script setup lang="ts">
import { AppHeader } from '@/widgets/app-header';
import { AppBanner } from '@/widgets/app-banner';
import { AppHeroBanner } from '@/widgets/app-hero-banner';
import { Faqs } from '@/widgets/main-faq';
import { MainSwitcher } from '@/widgets/main-switcher';
</script>
