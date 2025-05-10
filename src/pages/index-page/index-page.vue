<template>
  <AppHeader class="mb-4"/>
  <AppSwitcher />
  <AppBanner />
  <AppHeroBanner />
  <FaqItems />
</template>

<script setup>
import { AppHeader } from '@/widgets/app-header';
import { AppBanner } from '@/widgets/app-banner';
import { AppHeroBanner } from '@/widgets/app-hero-banner';
import { FaqItems } from '@/widgets/faq-items';
import { AppSwitcher } from '@/widgets/app-switcher';
</script>
