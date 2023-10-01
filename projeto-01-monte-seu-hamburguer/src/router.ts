import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/pedidos', name: 'Pedidos', component: () => import('./views/Pedidos.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./views/Page404.vue') }, // página não encontrada
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
