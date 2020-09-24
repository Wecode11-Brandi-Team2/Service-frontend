import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import serviceStore from './modules/serviceStore';

const store = new Vuex.Store({
  modules: {
    serviceStore
  }
});

export default store;
