<template>
  <div class="Main">
    <div class="advertise">
      <img
        src="http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg"
      />
    </div>
    <div class="product-contents">
      <span>당신을 위한 추천</span>
      <section class="product-section">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <BannerProduct />
      <section class="product-section">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <BannerProduct />
      <section class="product-section">
        <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
      </section>
      <ContentsPlusButton />
      <div class="buttonWrapper"></div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import BannerProduct from './components/BannerProduct';
import ContentsPlusButton from './components/ContentsPlusButton';

export default {
  name: 'Main',
  props: {
    msg: String
  },

  components: {
    ProductCard,
    BannerProduct,
    ContentsPlusButton
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
    this.getNavData();
  },
  methods: {
    cateogoryActiveChange(event) {
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
      }
    }
  }
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.Main {
  background: white;
  .advertise {
    width: 100%;
    margin-bottom: 40px;

    img {
      width: 100%;
    }
  }

  .product-contents {
    span {
      display: block;
      margin-bottom: 30px;
      padding-top: 40px;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    .product-section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 3%;
    }
  }
}
</style>
