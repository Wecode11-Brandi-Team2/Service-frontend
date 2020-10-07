<template>
  <section class="slide-product-card">
    <button class="left-button" @click="goLeft">
      <i class="fas fa-angle-left"></i>
    </button>
    <div class="slider-container">
      <div
        class="slider-swiper"
        :style="{
          transform: `translateX(${-1 * picCount * onePhotoWidth}px)`,
          transition: 'all 0.5s ease-in-out',
          width: `${onePhotoWidth * (imageData.length + 2)}`,
          height: `${sliderHeight}`
        }"
      >
        <!--last copy -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :id="14"
        >
          <img
            :src="imageData[imageData.length - 1].src"
            :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          />
        </div>
        <!--MainSlider -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :key="data.id"
          v-for="data of imageData"
          :id="data.id"
        >
          <img
            :src="data.src"
            :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          />
        </div>

        <!--firstcopy -->
        <div
          :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          class="slider-card"
          :id="1"
        >
          <img
            :src="imageData[0].src"
            :style="{ width: onePhotoWidth, height: `${sliderHeight}` }"
          />
        </div>
      </div>
    </div>
    <button class="right-button" @click="goRight">
      <i class="fas fa-angle-right"></i>
    </button>
    <div class="dot-button-container">
      <span
        class="dot-button"
        :class="[
          Number(dot.id) === picCount ? 'dot-button-active' : 'dot-button'
        ]"
        :key="dot.id + 'dot'"
        v-for="dot of imageData"
        @click="goSlide(dot.id)"
      ></span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'SildeProductCard',
  data() {
    return {
      sliderHeight: Math.ceil(document.documentElement.clientWidth / 3.92),
      onePhotoWidth: document.documentElement.clientWidth,
      imageData: [
        {
          id: '1',
          src:
            'https://image.brandi.me/home/banner/bannerImage_193302_1601517502.jpg'
        },
        {
          id: '2',
          src:
            'https://image.brandi.me/home/banner/bannerImage_193507_1601517624.jpg'
        },
        {
          id: '3',
          src:
            'https://image.brandi.me/home/banner/bannerImage_193059_1601348483.jpg'
        },
        {
          id: '4',
          src:
            'https://image.brandi.me/home/banner/bannerImage_1_1601344943.jpg'
        },
        {
          id: '5',
          src:
            'https://image.brandi.me/home/banner/bannerImage_193375_1601517602.jpg'
        },
        {
          id: '6',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '7',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '8',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '9',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '10',
          src:
            'http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg'
        },
        {
          id: '11',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '12',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '13',
          src:
            'http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg'
        },
        {
          id: '14',
          src:
            'https://image.brandi.me/home/banner/bannerImage_193375_1601517602.jpg'
        }
      ],
      picCount: 1
    };
  },

  mounted() {
    setInterval(() => this.goRight(), 4000);
    window.addEventListener('resize', this.checkFunction);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkFunction);
  },

  methods: {
    checkFunction() {
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
        slideList.style.transition = 'all 0.5s ease-in-out';
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
          slideList.style.transition = 'all 0.5s ease-in-out';
        }, 800);

        this.picCount = this.imageData.length;
      } else {
        slideList.style.transition = 'all 0.5s ease-in-out';
        this.picCount = this.picCount - 1;
      }
    },
    goSlide(id) {
      this.picCount = Number(id);
    }
  }
};
</script>
<style scoped lang="scss">
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
    background-color: #e7e7e7;
    i {
      color: black;
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
    background-color: #e7e7e7;
    i {
      color: black;
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
    background: #222;
  }
  .dot-button-active {
    display: block;
    width: 8px;
    height: 8px;
    padding: 2px;
    margin: 5px;
    border-radius: 100%;
    content: '';
    background-color: red;
  }
}

.slide-product-card {
  overflow: hidden;
  position: relative;
  .slider-container {
    margin: 0 auto;
    position: relative;
    overflow: auto;
    .slider-swiper {
      transition-duration: 0ms;
      display: flex;
      overflow: hidden;
      /* width: 23040px; */
      /* height: 368px; */
      .slider-card {
        /* width: 1440px; */
        height: 100%;
        img {
          max-width: 100%;
          margin-top: 0;
          vertical-align: top;
          cursor: pointer;
          min-width: 1440px;
        }
      }
    }
  }
}
</style>
