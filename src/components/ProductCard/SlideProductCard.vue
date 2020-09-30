<template>
  <section class="slide-product-card">
    <button class="left-button" @click="goLeft">left</button>
    <div class="slider-container">
      <div
        class="slider-swiper"
        :style="{
          transform: `translateX(${-1 * (picCount - 1) * 1440}px)`
        }"
      >
        <div class="slider-card" :key="data.id" v-for="data of imageData">
          <img :src="data.src" />
        </div>
      </div>
    </div>
    <button class="right-button" @click="goRight">right</button>
    <div class="dot-button-container">
      <span
        class="dot-button"
        :class="[Number(dot.id) === picCount ? 'dot-active' : '']"
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
      imageData: [
        {
          id: '1',
          src:
            'http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg'
        },
        {
          id: '2',
          src:
            'http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg'
        },
        {
          id: '3',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        },
        {
          id: '4',
          src:
            'http://image.brandi.me/home/banner/bannerImage_159860_1593396179.jpg'
        },
        {
          id: '5',
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
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
          src: 'http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg'
        }
      ],
      picCount: 1
    };
  },
  watch() {
    this.goRight();
  },

  methods: {
    goRight() {
      let slideList = document.querySelector('.slider-swiper');
      // const slideContents = document.querySelectorAll('.slider-card');

      let firstChild = slideList.firstElementChild;
      let LastChild = slideList.lastElementChild;
      let clonedFirst = firstChild.cloneNode(true);
      let clonedLast = LastChild.cloneNode(true);

      slideList.appendChild(clonedFirst);
      slideList.insertBefore(clonedLast, slideList.firstElementChild);
      if (this.picCount === this.imageData.length) {
        setTimeout(function() {
          slideList.style.transform =
            'translate3d(-' + (1440 * 14 + 1) + 'px, 0px, 0px)';
        }, 0.01);

        setTimeout(function() {
          slideList.style.transition = 'none';
          slideList.style.transform = 'translate3d(0px, 0px, 0px)';
        }, 600);

        this.picCount = 1;
      } else {
        slideList.style.transition = 'all 0.5s ease-in-out';
        this.picCount = this.picCount + 1;
      }
    },

    goLeft() {
      let slideList = document.querySelector('.slider-swiper');

      let firstChild = slideList.firstElementChild;
      let LastChild = slideList.lastElementChild;
      let clonedFirst = firstChild.cloneNode(true);
      let clonedLast = LastChild.cloneNode(true);

      if (this.picCount === 1) {
        this.picCount = this.imageData.length;
        slideList.appendChild(clonedLast);
        slideList.insertBefore(clonedFirst, slideList.firstElementChild);
        setTimeout(function() {
          slideList.style.transform = 'translate3d(' + 1440 + 'px, 0px, 0px)';
        }, 0.01);

        setTimeout(function() {
          slideList.style.transition = 'none';
          slideList.style.transform = 'translate3d(-18720px, 0px,0px)';
        }, 500);

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
  top: 50%;
  width: 32px;
  height: 32px;
  z-index: 100;
  border: 1px solid black;
  border-radius: 100%;
  cursor: pointer;
}
.right-button {
  right: 0;
  position: absolute;
  top: 50%;
  width: 32px;
  height: 32px;
  z-index: 100;
  border: 1px solid black;
  border-radius: 100%;
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
    border: 1px solid black;
    content: '';
  }
}
.dot-active {
  background-color: red;
}

.slide-product-card {
  overflow: hidden;
  position: relative;
  .slider-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .slider-swiper {
      display: flex;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      /* min-width: 100%;
      max-width: 100%; */
      width: 21600px;
      /* transition-duration: 0ms; */
      /* transform: translate3d(-2880px, 0px, 0px); */
      height: 368px;
      .slider-card {
        width: 1440px;
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
