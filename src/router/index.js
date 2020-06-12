import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/Index.vue';
import CreateNote from '@/views/CreateNote.vue';
import Settings from '@/views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/create-note',
    name: 'create-note',
    component: CreateNote,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/edit-note/:id',
    name: 'edit-note',
    component: () => import('@/views/EditNote.vue'),
  },
  {
    path: '/view-note/:id',
    name: 'view-note',
    component: () => import('@/views/ViewNote.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

export default router;
