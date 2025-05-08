import { createRouter, createWebHistory } from 'vue-router';
import { IndexPage } from '@/pages/index-page';
import { CoursesPage } from '@/pages/courses-page';

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage,
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
