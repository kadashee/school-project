<template>
  <AppHeader class="mb-4"/>
  <AppSwitcher />
  <AppBanner />
  <AppHeroBanner />
  <AppFAQ />
</template>

<script setup>
import { AppHeader } from '@/widgets/app-header';
import { AppBanner } from '@/widgets/app-banner';
import { AppHeroBanner } from '@/widgets/app-hero-banner';
import { AppFAQ } from '@/widgets/app-faq';
import { AppSwitcher } from '@/widgets/app-switcher';
</script>
