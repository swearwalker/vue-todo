import Vue from 'vue';
import VueRouter from 'vue-router';

import index from '@/views/index';
import create from '@/views/create';
import settings from '@/views/settings';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/create',
    name: 'create',
    component: create,
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/edit'),
  },
  {
    path: '/view/:id',
    name: 'view',
    component: () => import('../views/view'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
