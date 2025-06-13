import { createApp } from 'vue';
import './app/assets/css/main.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/app/router';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
