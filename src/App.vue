<template>
  <div class="nav">
    <Nav />
    <CategoryNav />
    <router-view :key="$route.fullPath" />
    <Footer />
    <Buttons />
    <!-- <Spinner v-show="!isLoading" /> -->
  </div>
</template>

<script>
import Nav from './components/Nav/Nav';
import CategoryNav from './components/Nav/CategoryNav';
import Footer from './components/Footer/Footer';
import Buttons from './components/Button/Buttons';
import axios from 'axios';
// import Spinner from './components/Spinner/Spinner';

export default {
  components: {
    CategoryNav,
    Nav,
    Footer,
    Buttons
    // Spinner
  },
  created() {
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
          this.setLoading(false);
          return Promise.reject(error);
        }
      );
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    setLoading(isLoading) {
      // console.log('thisisLOADING', isLoading);
      if (isLoading) {
        this.isLoading = true;
        // console.log('inIf', isLoading);
      }
      if (!isLoading) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
@import './styles/_reset.scss';
@import './styles/common.scss';
</style>
