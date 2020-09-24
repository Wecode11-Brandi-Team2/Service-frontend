<template>
  <div
    @click="calcSlideWidth"
    class="Slide"
    :style="{ transform: 'translateX(' + calcSlideWidth(-560) + 'px)' }"
  >
    <div
      class="product-image"
      v-for="image in slideImage"
      :key="image.id"
      :style="{ backgroundImage: 'url(' + image.image_url + ')' }"
    />
  </div>
</template>

<script>
export default {
  props: ['selectedImage'],
  methods: {
    calcSlideWidth(width) {
      if (this.selectedImage === 1) return width * 0;
      if (this.selectedImage === 2) return width;
      if (this.selectedImage === 3) return width * 2;
      if (this.selectedImage === 4) return width * 3;
      if (this.selectedImage === 5) return width * 4;
    }
  },
  computed: {
    slideImage() {
      return this.$store.state.detailProductInfo.productInfo.image;
    }
  }
};
</script>

<style scoped lang="scss">
.Slide {
  display: flex;
  width: 100%;
  transition-duration: 300ms;

  .product-image {
    min-width: 100%;
    height: 620px;
    margin-bottom: 20px;
  }
}
</style>
