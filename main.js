import Vue from 'vue';
import App from './src/App';
import { router } from './src/router';
import store from './src/store';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#root');
