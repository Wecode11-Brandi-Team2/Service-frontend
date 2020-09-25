<template>
  <div class="nav">
    <Nav />
    <CategoryNav />
    <router-view :key="$route.fullPath" />
    <Footer />
    <Buttons />
  </div>
</template>

<script>
import Nav from './components/Nav/Nav';
import CategoryNav from './components/Nav/CategoryNav';
import Footer from './components/Footer/Footer';
import Buttons from './components/Button/Buttons';

export default {
  components: { CategoryNav, Nav, Footer, Buttons }
};
</script>

<style>
@import './styles/_reset.scss';
@import './styles/common.scss';
</style>
