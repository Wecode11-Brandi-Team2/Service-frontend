import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main/Main';
import Detail from '../pages/Detail/Detail';
import Login from '../pages/Login/Login';
import Mypage from '../pages/Mypage/Mypage';
import SignUp from '../pages/Login/SignUp';
import Agreement from '../pages/Login/Agreement.vue';
import Category from '../pages/Category/Category';
import CategoryNav from '../components/Nav/CategoryNav';
import Order from '../pages/Order/Order.vue';
import Trend from '../pages/Trend/Trend';
import Brand from '../pages/Brand/Brand';
import Beauty from '../pages/Beauty/Beauty';

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
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement,
      props: true
    },
    {
      path: '/category/:specification/:title/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/category/:specification/:title/:id',
      name: 'CategoryNav',
      component: CategoryNav,
      props: true
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/trend',
      name: 'Trend',
      component: Trend
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    },
    {
      path: '/beauty',
      name: 'Beauty',
      component: Beauty
    }
  ]
});
