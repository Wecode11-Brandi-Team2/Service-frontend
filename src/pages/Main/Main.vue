<template>
  <div class="Main">
    <!-- <div class="advertise">
      <img
        src="http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg"
      />
    </div> -->

    <SlideProductCard />

    <div class="product-contents">
      <span>당신을 위한 추천</span>
      <section class="product-section">
        <ProductCard
          :product="product"
          :key="product"
          v-for="product of productData.slice(0, 26)"
        />
      </section>
      <BannerProduct />
      <section class="product-section">
        <ProductCard
          :product="product"
          :key="product"
          v-for="product of productData.slice(27, 52)"
        />
      </section>
      <BannerProduct />
      <section class="product-section">
        <ProductCard
          :product="product"
          :key="product"
          v-for="product of productData.slice(53, -2)"
        />
      </section>
      <div
        class="buttonWrapper"
        :class="[buttonShow ? 'hidden' : '']"
        @click="getMoreData"
      >
        <ContentsPlusButton />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import BannerProduct from './components/BannerProduct';
import ContentsPlusButton from './components/ContentsPlusButton';
import SlideProductCard from '../../components/ProductCard/SlideProductCard';
import axios from 'axios';

export default {
  name: 'Main',
  props: {
    msg: String
  },

  components: {
    ProductCard,
    BannerProduct,
    ContentsPlusButton,
    SlideProductCard
  },

  data() {
    return {
      buttonActive: false,
      // PRODUCT_SAMPLE: [
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {}
      // ]
      productData: [],
      offset: 0,
      buttonShow: false
    };
  },
  created: function() {
    axios
      .get(
        `http://10.251.1.153:5000/api/products?offset=${this.offset}&limit=100`,
        {}
      )
      .then(res => (this.productData = res.data.products));
    window.addEventListener('scroll', this.removeButton);
  },

  methods: {
    getMoreData() {
      this.offset = this.offset + 101;
      console.log(this.offset);
      this.fetchData();
      if (this.productData.length >= 300) {
        return (this.buttonShow = true);
      }
    },

    fetchData() {
      axios
        .get(
          `http://10.251.1.153:5000/api/products?offset=${this.offset}&limit=100`,
          {}
        )
        .then(
          res => (this.productData = this.productData.concat(res.data.products))
        );
    },

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

.hidden {
  display: none;
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
