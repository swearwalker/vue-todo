import Vue from 'vue';
import Vuex from 'vuex';

import { db } from '@/config/db';

Vue.use(Vuex);

console.info(localStorage.getItem('storageType'))

export default new Vuex.Store({
  state: {
    notes: [],
    note: {},
    storageType: localStorage.getItem('storageType'),
  },
  mutations: {
    changeStorageType(state, type) {
      localStorage.setItem('storageType', type)
      state.storageType = type;
    },
    setNotes(state, data) {
      state.notes = data;
    },
    setNote(state, data) {
      state.note = data;
    },
    createComment(state, comment) {
      state.note.comments.push(comment)
    },
  },
  actions: {
    async getNotes({ commit }) {
      try {
        const response = await db.collection('notes').get()
        const list = response.docs.map(item => ({
          ...item.data(),
          id: item.id
        }))
        commit('setNotes', list);
      } catch (e) {
        console.info(e)
      }
    },
    async getNote({ commit }, id) {
      try {
        const response = await db.collection('notes').doc(id).get()
        const note = {
          ...response.data(),
          id: response.id
        }
        commit('setNote', note);
        console.info('nice')
      } catch (e) {
        console.info(e)
      }
    },
    async deleteNote({ commit }, id) {
      try {
        await db.collection('notes').doc(id).delete()
        console.info('nice')
      } catch (e) {
        console.info(e)
      }
    },
    async createNote({ commit }, note) {
      try {
        await db.collection('notes').doc().set(note)
        console.info('nice')
      } catch (e) {
        console.info(e)
      }
    },
    async updateNote({ state, commit }, note) {
      try {
        await db.collection('notes').doc(state.note.id).update(note)
        console.info('nice')
      } catch (e) {
        console.info(e)
      }
    },
    async createComment({ state, commit }, comment) {
      try {
        await db.collection('notes').doc(state.note.id).update({
          comments: state.note.comments.concat(comment)
        })
        commit('createComment', comment)
        console.info('nice')
      } catch (e) {
        console.info(e)
      }
    },
  },
  modules: {},
});
