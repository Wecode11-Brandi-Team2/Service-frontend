import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main/Main';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login/Login';
import Mypage from '../pages/Mypage/Mypage';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    }
  ]
});
