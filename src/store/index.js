import Vue from 'vue';
import Vuex from 'vuex';

import notes from '@/store/notes';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    storageType: localStorage.getItem('type') || 'firebase',
  },
  mutations: {
    changeStorageType(state, data) {
      localStorage.setItem('type', data);
      state.storageType = data;
    },
  },
  actions: {},
  modules: {
    notes,
  },
});
