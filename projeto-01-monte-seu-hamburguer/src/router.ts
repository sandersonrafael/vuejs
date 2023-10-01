import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Page404 from './views/Page404.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/:pathMatch(.*)*', component: Page404 }, // página não encontrada
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
