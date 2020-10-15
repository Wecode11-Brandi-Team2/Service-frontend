<template>
  <div class="nav">
    <Nav />
    <CategoryNav />
    <router-view :key="$route.fullPath" />
    <Footer />
    <Buttons />
    <Spinner v-show="!isLoading" />
  </div>
</template>

<script>
import Nav from './components/Nav/Nav';
import CategoryNav from './components/Nav/CategoryNav';
import Footer from './components/Footer/Footer';
import Buttons from './components/Button/Buttons';
import axios from 'axios';
import Spinner from './components/Spinner/Spinner';

export default {
  components: {
    CategoryNav,
    Nav,
    Footer,
    Buttons,
    Spinner
  },
  created() {
    this.removeData();
    axios.interceptors.request.use(
      config => {
        this.setLoading(false);
        return config;
      },
      error => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    ),
      axios.interceptors.response.use(
        response => {
          this.setLoading(true);
          return response;
        },
        error => {
          //발표위한 임의 401 및 500 에러 처리
          if (error.response.status === 401) {
            this.setLoading(true);
            return Promise.reject(error);
          }
          if (error.response.status === 500) {
            this.setLoading(true);
            return Promise.reject(error);
          }
          this.setLoading(false);
          return Promise.reject(error);
        }
      );
    // //for category Nav Data save in LocalStorage
    // localStorage.getItem('userMsg') &&
    //   this.$store.replaceState(
    //     Object.assign(
    //       this.$store.state,
    //       JSON.parse(localStorage.getItem('userMsg'))
    //     )
    //   );

    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('userMsg', JSON.stringify(this.$store.state));
    // });
  },
  updated() {
    this.removeData();
  },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    setLoading(isLoading) {
      if (isLoading) {
        this.isLoading = true;
      }
      if (!isLoading) {
        this.isLoading = false;
      }
    },
    removeData() {
      let detailPath = this.$route.path.includes('detail');
      let orderPath = this.$route.path.includes('order');

      if (!(detailPath || orderPath)) {
        localStorage.removeItem('selected_option');
        localStorage.removeItem('detail_data');
      }
    }
  }
};
</script>

<style>
@import './styles/_reset.scss';
@import './styles/common.scss';
</style>
