<template>
  <section class="Slide-image-wrapper">
    <Slide :selectedImage="selectedImage" :apiData="apiData" />
    <div class="slider-container">
      <div
        class="image-slide-tab"
        :class="[image.id === selectedImage ? 'active-tab' : '']"
        v-for="image in apiData"
        :key="image.id"
        :style="{ backgroundImage: 'url(' + image.image_url + ')' }"
        @click="imageSlide(image)"
      ></div>
    </div>
  </section>
</template>

<script>
import Slide from './Slide';
import axios from 'axios';

export default {
  components: {
    Slide
  },
  data() {
    return {
      selectedImage: 1,
      apiData: []
    };
  },
  created() {
    let URL = `http://10.251.1.153:5000/api/products/product/${this.$route.params.id}`;
    axios.get(URL).then(
      res =>
        // console.log(res.data.image)
        (this.apiData = res.data.image)
    );
    //
    // 1. created 에서 백엔드와 통신
    // this.getDetailInfo();
  },
  methods: {
    imageSlide(image) {
      this.selectedImage = image.id;
    }
  },
  computed: {
    ProductInfoImage() {
      return this.$store.state.detailProductInfo.productInfo.image;
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
