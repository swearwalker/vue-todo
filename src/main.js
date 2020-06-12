import Vue from 'vue';
import App from '@/App.vue';
// import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import Toast from 'vue-toastification';

import Vuelidate from 'vuelidate';

import VueMoment from 'vue-moment';
import Moment from 'moment';
import 'moment/locale/uk';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'vue-toastification/dist/index.css';

import './assets/styles/fonts.scss';
import './assets/styles/components.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(Toast, {
  position: 'bottom-right',
  newestOnTop: true,
  maxToasts: 5,
  showCloseButtonOnHover: true,
  timeout: 5000,
  transition: 'Vue-Toastification__bounce',
});

Vue.use(Vuelidate);

Vue.use(VueMoment, {
  Moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
