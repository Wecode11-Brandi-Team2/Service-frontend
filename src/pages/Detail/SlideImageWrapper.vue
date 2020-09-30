<template>
  <section class="Slide-image-wrapper">
    <Slide :selectedImage="selectedImage" :apiDataImage="apiDataImage" />
    <div class="slider-container">
      <div
        class="image-slide-tab"
        :class="[image.id === selectedImage ? 'active-tab' : '']"
        v-for="image in apiDataImage"
        :key="image.id"
        :style="{ backgroundImage: 'url(' + image.image_url + ')' }"
        @click="imageSlide(image)"
      ></div>
    </div>
  </section>
</template>

<script>
import Slide from './Slide';

export default {
  props: ['apiDataImage'],
  components: {
    Slide
  },
  data() {
    return {
      selectedImage: 1,
      apiData: []
    };
  },
  methods: {
    imageSlide(image) {
      this.selectedImage = image.id;
    }
  }
  // computed: {
  //   ProductInfoImage() {
  //     return this.$store.state.detailProductInfo.productInfo.image;
  //   }
  // }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Slide-image-wrapper {
  width: 560px;
  overflow: hidden;

  .slider-container {
    @include setSize(100%, 85px);

    .image-slide-tab {
      display: inline-block;
      @include setSize(82px, 100%);
      margin-right: 13px;
      background-size: 100%;
      opacity: 0.6;
    }

    .active-tab {
      opacity: 1;
    }
  }
}
</style>
