<template>
  <div class="Main">
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
import { mapActions } from 'vuex';
import URL from '../../../src/assets/mock/URL';
const serviceStore = 'serviceStore';

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  name: 'Main',
  props: {},

  components: {
    ProductCard,
    BannerProduct,
    ContentsPlusButton,
    SlideProductCard
  },

  data() {
    return {
      buttonActive: false,
      spinnerActivity: false,
      productData: [],
      offset: 0,
      buttonShow: false,
      msg: ''
    };
  },
  created: function() {
    let GETURL = `${URL.PRODUCT_URL}/api/products`;
    axios
      .get(`${GETURL}?offset=${this.offset}&limit=100`, {})
      .then(res => (this.productData = res.data.products))
      .then(users => {
        const i = randInt(users.length);
        this.msg = users[i];
      });
    // .then(this.updateSpinner({ spinner: true }));
    window.addEventListener('scroll', this.removeButton);
  },

  methods: {
    ...mapActions(serviceStore, ['updateSpinner']),

    getMoreData() {
      this.offset = this.offset + 100;
      console.log(this.offset);
      this.fetchData();
      if (this.productData.length >= 300) {
        return (this.buttonShow = true);
      }
    },

    fetchData() {
      let GETURL = `${URL.PRODUCT_URL}/api/products`;
      axios
        .get(`${GETURL}?offset=${this.offset}&limit=100`, {})
        .then(
          res => (this.productData = this.productData.concat(res.data.products))
        )
        .then(res =>
          res ? (this.spinnerActivity = true) : (this.spinnerActivity = false)
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
