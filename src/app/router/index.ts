import { createRouter, createWebHistory } from 'vue-router';
import { IndexPage } from '@/pages/index-page';
import { CoursesPage } from '@/pages/courses-page';
import { CartPage } from '@/pages/cart-page';

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
