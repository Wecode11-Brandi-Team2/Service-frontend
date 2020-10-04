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
import TimeDeal from '../pages/TimeDeal/TimeDeal';
import Information from '../pages/Login/Information';
import Complete from '../pages/Login/Complete';
import GoogleInformation from '../pages/Login/GoogleInformation';
import QnA from '../pages/Mypage/Q&A';
import Refund from '../pages/Mypage/Refund';
import RefundResult from '../pages/Mypage/RefundResult';
import Shop from '../pages/Shop/Shop.vue';
import Search from '../pages/Mypage/Search';

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
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
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
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/complete',
      name: 'Complete',
      component: Complete
    },
    {
      path: '/timedeal',
      name: 'TimeDeal',
      component: TimeDeal
    },
    {
      path: '/googleinformation',
      name: 'GoogleInformation',
      component: GoogleInformation
    },
    {
      path: '/qna',
      name: 'qna',
      component: QnA
    },
    {
      path: '/refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/refundResult',
      name: 'RefundResult',
      component: RefundResult
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
});
