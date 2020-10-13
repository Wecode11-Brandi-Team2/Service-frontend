<template>
  <section class="Slide-image-wrapper">
    <Slide :selectedImage="selectedImage" :apiDataImage="apiDataImage" />
    <div class="slider-container">
      <div
        class="image-slide-tab"
        :class="[idx === selectedImage ? 'active-tab' : '']"
        v-for="(image, idx) in apiDataImage"
        :key="idx"
        :style="{ backgroundImage: 'url(' + image.image_url + ')' }"
        @click="imageSlide(idx)"
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
      selectedImage: 0
    };
  },
  methods: {
    imageSlide(idx) {
      this.selectedImage = idx;
    }
  }
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
