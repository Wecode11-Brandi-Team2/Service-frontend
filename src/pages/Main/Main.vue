<template>
  <div>
    <Nav />
    <Footer />
  </div>
</template>

<script>
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

export default {
  name: 'Main',
  components: {
    Nav,
    Footer
  }
};
</script>

<style scoped lang="scss"></style>
