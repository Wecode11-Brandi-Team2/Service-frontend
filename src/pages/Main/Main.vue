<template>
  <div class="Main">
    <CategoryNav />
    <div class="advertise">
      <img
        src="http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg"
      />
    </div>
    <div class="productContents">
      <span class="collectionWord">당신을 위한 추천</span>
      <section class="productSection">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <BannerProduct />
      <section class="productSection">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <BannerProduct />
      <section class="productSection">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <ContentsPlusButton />
      <div class="buttonWrapper">
        <Buttons />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import BannerProduct from './components/BannerProduct';
import ContentsPlusButton from './components/ContentsPlusButton';
import CategoryNav from '../../components/Nav/CategoryNav';
import Buttons from '../../components/Button/Buttons';

export default {
  name: 'Main',
  props: {
    msg: String
  },

  components: {
    ProductCard,
    BannerProduct,
    ContentsPlusButton,
    CategoryNav,
    Buttons
  },

  data() {
    return {
      buttonActive: false,
      PRODUCT_SAMPLE: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
    };
  },
  created: function() {
    window.addEventListener('scroll', this.removeButton);
    // let timer;
    // window.addEventListener('scroll', e => {
    //   if (!timer) {
    //     timer = setTimeout(() => {
    //       timer = null;
    //       this.removeButton();
    //     }, 200);
    //   }
    // });
  },
  methods: {
    cateogoryActiveChange(event) {
      console.log(event.target.attributes.newkey.value);
      if (event.target.attributes.newkey.value === '쇼핑몰,마켓') {
        this.cateogoryActive = !this.cateogoryActive;
      }
    },

    removeButton() {
      let timer;
      const scrollY = window.scrollY;
      if ((scrollY <= 390) & !timer) {
        timer = setTimeout(() => {
          timer = null;
          return (this.buttonActive = !this.buttonActive);
        }, 200);
        // return (this.buttonActive = !this.buttonActive);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.buttondisplay {
  visibility: visible;
  transition: all 0.5s ease-in-out;
}

.hidden {
  visibility: hidden;
  max-height: 0;
}

.halfBanner {
  img {
    width: 100%;
  }
  padding: 0 0.5%;
  margin: 50px 0 80px;
}

.Main {
  background: white;
  margin-top: 200px;
}

.productSection {
  margin: 0 auto;
  padding: 0 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  #ProductCard {
    margin: 10px;
  }
}

.productContents {
  span {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 26px;
    padding-top: 40px;
    margin-bottom: 30px;
  }
}

.advertise {
  width: 100%;
  margin-bottom: 40px;

  img {
    width: 100%;
  }
}
</style>
