<template>
  <section class="Slide-image-wrapper">
    <Slide :slideImage="slideImage" />
    <div class="slider-container">
      <div
        class="image-slide-tab"
        v-for="image in slideImage"
        :key="image.id"
        :style="{ backgroundImage: 'url(' + image.image + ')' }"
      ></div>
    </div>
  </section>
</template>

<script>
import Slide from './Slide';

export default {
  components: {
    Slide
  },
  data() {
    return {
      slideImage: [
        {
          id: 1,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862781_image1_L.jpg'
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image2_L.jpg'
        },
        {
          id: 3,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image3_L.jpg'
        },
        {
          id: 4,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862784_image4_L.jpg'
        },
        {
          id: 5,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862787_image5_L.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Slide-image-wrapper {
  width: 560px;

  .slider-container {
    @include setSize(100%, 85px);

    .image-slide-tab {
      display: inline-block;
      @include setSize(82px, 100%);
      margin-right: 13px;
      background-size: 100%;
    }
  }
}
</style>
