import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import adminStore from './modules/adminStore';

const store = new Vuex.Store({
  modules: {
    adminStore
  }
});

export default store;
