import Vue from 'vue';
import Vuex from 'vuex';

import { db } from '@/config/db';

Vue.use(Vuex);

console.info(localStorage.getItem('storageType'));

export default new Vuex.Store({
  state: {
    notes: [],
    note: {
      comments: [],
    },
    storageType: localStorage.getItem('storageType') || 'firebase',
  },
  mutations: {
    changeStorageType(state, type) {
      localStorage.setItem('storageType', type);
      state.storageType = type;
    },
    setNotes(state, data) {
      state.notes = data;
    },
    setNote(state, data) {
      state.note = data;
    },
    createComment(state, comment) {
      state.note.comments.push(comment);
    },
  },
  actions: {
    async getNotes({ state, commit }) {
      try {
        if (localStorage.getItem('storageType') === 'firebase') {
          const response = await db.collection('notes').get();
          const list = response.docs.map(item => ({
            ...item.data(),
            id: item.id,
          }));
          commit('setNotes', list);
        } else {
          const notes = localStorage.getItem('notes');
          commit('setNotes', JSON.parse(notes));
        }
      } catch (e) {
        console.info(e);
      }
    },
    async getNote({ state, commit }, id) {
      try {
        if (state.storageType === 'firebase') {
          const response = await db
            .collection('notes')
            .doc(id)
            .get();
          const note = {
            ...response.data(),
            id: response.id,
          };
          commit('setNote', note);
        } else if (state.storageType === 'localStorage') {
          let note = {};
          JSON.parse(localStorage.getItem('notes')).filter(item => {
            if (item.id === id) {
              note = item;
            }
          });
          commit('setNote', note);
        }
      } catch (e) {
        console.info(e);
      }
    },
    async deleteNote({ state, commit }, id) {
      try {
        if (localStorage.getItem('storageType') === 'firebase') {
          await db
            .collection('notes')
            .doc(id)
            .delete();
        } else {
          if (localStorage.getItem('notes')) {
            let indexById = null;
            let lsNotes = JSON.parse(localStorage.getItem('notes'));
            lsNotes.find((item, index) => {
              if (item.id === id) {
                indexById = index;
              }
            });
            lsNotes.splice(indexById, 1);
            localStorage.setItem('notes', JSON.stringify(lsNotes));
          }
        }
      } catch (e) {
        console.info(e);
      }
    },
    async createNote({ commit }, note) {
      try {
        if (localStorage.getItem('storageType') === 'firebase') {
          await db
            .collection('notes')
            .doc()
            .set(note);
        } else {
          const notes = [];
          if (localStorage.getItem('notes')) {
            JSON.parse(localStorage.getItem('notes')).forEach(item => {
              notes.push(item);
            });
          }
          note.id = `f${(+new Date()).toString(16)}`;
          notes.push(note);
          localStorage.setItem('notes', JSON.stringify(notes));
        }
      } catch (e) {
        console.info(e);
      }
    },
    async updateNote({ state, commit }, note) {
      try {
        if (localStorage.getItem('storageType') === 'firebase') {
          await db
            .collection('notes')
            .doc(state.note.id)
            .update(note);
        } else {
          let indexById = null;
          const lsNotes = JSON.parse(localStorage.getItem('notes'));
          lsNotes.find((item, index) => {
            if (item.id === state.note.id) {
              indexById = index;
            }
          });
          lsNotes[indexById].name = note.name;
          lsNotes[indexById].content = note.content;
          localStorage.setItem('notes', JSON.stringify(lsNotes));
        }
      } catch (e) {
        console.info(e);
      }
    },
    async createComment({ state, commit }, comment) {
      try {
        if (localStorage.getItem('storageType') === 'firebase') {
          await db
            .collection('notes')
            .doc(state.note.id)
            .update({
              comments: state.note.comments.concat(comment),
            });
        } else {
          let indexById = null;
          const lsNotes = JSON.parse(localStorage.getItem('notes'));
          lsNotes.find((item, index) => {
            if (item.id === state.note.id) {
              indexById = index;
            }
          });
          lsNotes[indexById].comments.push(comment);
          localStorage.setItem('notes', JSON.stringify(lsNotes));
        }
        commit('createComment', comment);
      } catch (e) {
        console.info(e);
      }
    },
  },
  modules: {},
});
