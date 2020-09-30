<template>
  <section id="banner-product">
    <div>
      <img
        src="http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerProduct',
  props: {}
};
</script>

<style scoped lang="scss">
#banner-product {
  padding: 0 3%;
  margin: 50px 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 1200px;

    width: 100%;
  }
}
</style>
