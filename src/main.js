import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import Vuelidate from 'vuelidate';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueMoment from 'vue-moment';
const moment = require('moment');
require('moment/locale/uk');

import './assets/css/tailwind.css';

import './assets/styles/components.scss';
import './assets/styles/colors.scss';

library.add(faUserSecret);

Vue.use(VueMoment, {
  moment,
});

Vue.use(Vuelidate);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
