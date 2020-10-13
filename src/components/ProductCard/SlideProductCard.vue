<template>
  <section
    class="slide-product-card"
    @mouseover="stopSliding"
    @mouseleave="slidingSlider"
    @dragstart="dragStart"
    @drag="draging"
    @mousemove="deleteGhostImg"
  >
    <button
      class="left-button"
      :class="[stopSignal ? 'twinking' : '']"
      @click="goLeft"
    >
      <i class="fas fa-angle-left"></i>
    </button>
    <div class="slider-container">
      <div
        class="slider-swiper"
        :style="{
          transform: `translateX(${-1 * picCount * onePhotoWidth}px)`,
          transitionDuration: '0ms',
          width: `${onePhotoWidth * (imageData.length + 2)}`,
          height: `${sliderHeight}`
        }"
      >
        <!--last copy -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :id="imageData[imageData.length - 1].id"
        >
          <router-link
            :to="`/event/${imageData[imageData.length - 1].id}`"
            class="slider-link"
          >
            <img
              :src="imageData[imageData.length - 1].banner_image"
              :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
            />
          </router-link>
        </div>
        <!--MainSlider -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :key="data.id"
          v-for="data of imageData"
          :id="data.id"
        >
          <router-link :to="`/event/${data.id}`" class="slider-link">
            <img
              :src="data.banner_image"
              :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
            />
          </router-link>
        </div>
        <!--firstcopy -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :id="[imageData[0].id]"
        >
          <router-link :to="`/event/${imageData[0].id}`" class="slider-link">
            <img
              :src="imageData[0].banner_image"
              :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
            />
          </router-link>
        </div>
      </div>
    </div>
    <button
      class="right-button"
      :class="[stopSignal ? 'twinking' : '']"
      @click="goRight"
    >
      <i class="fas fa-angle-right"></i>
    </button>
    <div class="dot-button-container">
      <span
        class="dot-button"
        :class="[
          Number(index) === picCount - 1 ? 'dot-button-active ' : 'dot-button'
        ]"
        :key="dot.id + 'dot'"
        v-for="(dot, index) of imageData"
        @click="goSlide(index)"
      ></span>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import URL from '../../assets/mock/URL';
export default {
  name: 'SildeProductCard',

  data() {
    return {
      sliderHeight: Math.ceil(document.documentElement.clientWidth / 3.92),
      onePhotoWidth: document.documentElement.clientWidth,
      imageData: [],
      picCount: 1,
      sliding: null,
      stopSignal: false,
      dragStartPoint: 0,
      dragSignal: false,
      diff: 0,
      dragClientX: 0,
      ghostImage: {
        src:
          'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
      }
    };
  },

  mounted() {
    window.addEventListener('resize', this.widthCheckFunction);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.widthCheckFunction);
    clearInterval(this.sliding);
  },
  created() {
    this.slidingSlider();
    this.getSlideData();
  },

  // watch() {
  //   this.dragEnd();
  // },
  methods: {
    deleteGhostImg(e) {
      let img = new Image();
      img.src = this.ghostImage.src;
      e.dataTransfer.setDragImage(img, 0, 0);
    },
    getSlideData() {
      axios
        .get(
          `${URL.PRODUCT_URL}/api/events?is_displayed=1&limit=14&offset=0`,
          {}
        )
        .then(res => (this.imageData = res.data.data));
    },
    dragStart(e) {
      this.deleteGhostImg(e);

      this.dragSignal = false;
      this.dragStartPoint = e.clientX;
    },

    draging(e) {
      this.deleteGhostImg(e);

      if (e.clientX != 0 && e.clientX <= this.onePhotoWidth) {
        this.diff =
          this.onePhotoWidth * this.picCount +
          1 * (this.dragStartPoint - e.clientX);

        let slideList = document.querySelector('.slider-swiper');
        slideList.style.transition = 'none';
        slideList.style.transform =
          'translate3d(-' + this.diff + 'px, 0px, 0px)';
        this.dragClientX = e.clientX;
        this.dragSignal = true;
      } else if (e.clientX == 0 && this.dragSignal === true) {
        this.dragEnd(e);
      }
    },

    dragEnd(e) {
      this.deleteGhostImg(e);

      if (this.dragSignal != true && e.clientX == 0) {
        return;
      }
      this.dragSignal = false;

      if (this.dragStartPoint - this.dragClientX >= this.onePhotoWidth / 3) {
        return this.goRight();
      } else if (
        this.dragClientX - this.dragStartPoint >=
        this.onePhotoWidth / 3
      ) {
        return this.goLeft();
      } else {
        let slideList = document.querySelector('.slider-swiper');
        slideList.style.transform =
          'translate3d(-' +
          this.onePhotoWidth * this.picCount +
          'px, 0px, 0px)';
        slideList.style.transition = 'all 0.3s ease-in-out';

        return this.picCount;
      }
    },

    stopSliding() {
      clearInterval(this.sliding);
      this.stopSignal = true;
    },

    slidingSlider() {
      this.sliding = setInterval(() => {
        this.goRight();
      }, 2000);
      this.stopSignal = false;
    },

    widthCheckFunction() {
      this.onePhotoWidth = document.documentElement.clientWidth;
      this.sliderHeight = Math.ceil(
        document.documentElement.clientWidth / 3.92
      );
    },

    goRight() {
      let slideList = document.querySelector('.slider-swiper');

      if (this.picCount === this.imageData.length) {
        console.log('sliderLength Check', this.imageData.length + 1);
        let Len = this.imageData.length + 1;
        let photoWidth = this.onePhotoWidth;
        setTimeout(function() {
          slideList.style.transform =
            'translate3d(-' + photoWidth * Len + 'px, 0px, 0px)';
        }, 0.01);

        setTimeout(function() {
          slideList.style.transition = 'none';
          slideList.style.transform =
            'translate3d(-' + photoWidth + 'px, 0px, 0px)';
        }, 600);

        this.picCount = 1;
      } else {
        slideList.style.transition = 'all 0.3s ease-in-out';
        this.picCount = this.picCount + 1;
      }
    },

    goLeft() {
      let slideList = document.querySelector('.slider-swiper');

      if (this.picCount === 1) {
        let lengthOfWrapper = this.imageData.length;
        let photoWidth = this.onePhotoWidth;
        setTimeout(function() {
          slideList.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 0.01);

        setTimeout(function() {
          slideList.style.transition = 'none';
          slideList.style.transform =
            'translate3d(-' + photoWidth * lengthOfWrapper + 'px, 0px, 0px)';
        }, 600);
        setTimeout(function() {
          slideList.style.transition = 'all 0.3s ease-in-out';
        }, 800);

        this.picCount = this.imageData.length;
      } else {
        slideList.style.transition = 'all 0.3s ease-in-out';
        this.picCount = this.picCount - 1;
      }
    },
    goSlide(id) {
      console.log('id', id);
      console.log('picCount', this.picCount);
      this.picCount = Number(id);
    }
  }
};
</script>

<style scoped lang="scss">
.slider-link {
  width: 100%;
}
.left-button {
  position: absolute;
  left: 0;
  top: 45%;
  width: 32px;
  height: 32px;
  z-index: 100;
  border: 0.2px solid #e7e7e7;
  border-radius: 100%;
  cursor: pointer;
  background-color: transparent;
  i {
    transition: all 0.5s ease-in-out;
    color: #e7e7e7;
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #ff204b !important;
    border: 0.2px solid #ff204b !important;
    i {
      color: #e7e7e7 !important;
    }
  }
}

.right-button {
  right: 0;
  position: absolute;
  top: 45%;
  width: 32px;
  height: 32px;
  z-index: 100;
  border: 0.2px solid #e7e7e7;
  border-radius: 100%;
  cursor: pointer;
  background-color: transparent;

  i {
    transition: all 0.5s ease-in-out;
    color: #e7e7e7;
  }
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #ff204b !important;
    border: 0.2px solid #ff204b !important;
    i {
      color: #e7e7e7 !important;
    }
  }
}
.dot-button-container {
  margin-top: 20px;
  bottom: 0;
  left: 50%;
  right: auto;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

  .dot-button {
    display: block;
    width: 8px;
    height: 8px;
    padding: 2px;
    margin: 5px;
    border-radius: 100%;
    content: '';
    background: #e7e7e7;
  }

  .dot-button-active {
    display: block;
    width: 8px;
    height: 8px;
    padding: 2px;
    margin: 5px;
    border-radius: 100%;
    content: '';
    background-color: #ff204b;
  }
}

.slide-product-card {
  overflow: hidden;
  position: relative;

  .slider-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    .slider-swiper {
      transition-duration: 0ms;
      display: flex;
      overflow: hidden;

      .slider-card {
        height: 100%;

        img {
          max-width: 100%;
          margin-top: 0;
          vertical-align: top;
          cursor: pointer;
          min-width: 1440px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}

.twinking {
  border: 0.2px solid #ff204b !important;

  i {
    color: #ff204b !important;
  }
}
</style>
