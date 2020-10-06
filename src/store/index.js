import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import detailProductInfo from './modules/detailProductInfo';
import serviceStore from './modules/serviceStore';
import myPageStore from './modules/myPageStore';

const store = new Vuex.Store({
  modules: {
    detailProductInfo,
    serviceStore,
    myPageStore
  }
});

export default store;
