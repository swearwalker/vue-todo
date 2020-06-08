import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import VueMoment from 'vue-moment';
const moment = require('moment');
require('moment/locale/uk');

import './assets/css/tailwind.css';

import './assets/styles/components.scss';
import './assets/styles/colors.scss';

Vue.use(VueMoment, {
  moment,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
