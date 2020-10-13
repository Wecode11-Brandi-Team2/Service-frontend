<template>
  <div class="search">
    <ul class="tab-wrapper">
      <li
        class="search-menutab"
        v-for="(menutab, idx) in menutabs"
        :key="menutab.id"
        :class="{ 'active-search-menutab': idx === activeTab }"
        @click="setActiveTab(idx)"
      >
        {{ menutab.name }}
      </li>
    </ul>
    <div v-if="activeTab === 0">
      <!-- 상품 탭 -->
      <ProductTab
        :products="products"
        :getMoreData="getMoreData"
        :ChangeSaleCheckActive="ChangeSaleCheckActive"
        :saleCheckActive="saleCheckActive"
      />
    </div>
    <div v-else>
      <!-- 스토어 탭 -->
      <StoreTab :sellers="sellers" />
    </div>
  </div>
</template>

<script>
import ProductTab from './ProductTab';
import StoreTab from './StoreTab';
import axios from 'axios';
import URL from '../../assets/mock/URL.js';

export default {
  created() {
    axios
      .get(`${URL.PRODUCT_URL}/api/products?q=${this.queryString}`)
      .then(res => {
        this.products = res.data.products;
        this.sellers = res.data.sellers;
        // console.log('판매량순 데이터', this.products);
      });
  },

  data() {
    return {
      saleCheckActive: false,
      promotion: 0,
      products: [],
      sellers: {},
      queryString: this.$route.query.q,
      activeTab: 0,
      offset: 0,
      menutabs: [
        {
          id: 0,
          name: '상품'
        },
        {
          id: 1,
          name: '스토어'
        }
      ]
    };
  },

  components: {
    ProductTab,
    StoreTab
  },

  methods: {
    ChangeSaleCheckActive() {
      this.saleCheckActive = !this.saleCheckActive;
      this.promotion === 0 ? (this.promotion = 1) : (this.promotion = 0);
      // console.log('PromoValue', this.promotion);
      this.saleFetch();
    },

    setActiveTab(idx) {
      this.activeTab = idx;
    },

    makingURL() {
      let makeURL = `${URL.PRODUCT_URL}/api/products?q=${
        this.queryString
      }&offset=${Number(this.offset)}&limit=${100}`;

      if (this.promotion === 0) {
        return makeURL;
      } else if (this.promotion === 1) {
        return `${makeURL}&is_promotion=${this.promotion}`;
      }
    },

    saleFetch() {
      let madeURL = this.makingURL();
      axios
        .get(`${madeURL}`, {})
        .then(res => (this.products = res.data.products));
      // console.log(madeURL);
    },

    fetchData() {
      axios
        .get(
          `${URL.PRODUCT_URL}/api/products?q=${
            this.queryString
          }&offset=${Number(this.offset)}&limit=${100}`,
          {}
        )
        .then(res => (this.products = this.products.concat(res.data.products)));
    },

    getMoreData() {
      this.offset = this.offset + 100;
      // console.log(this.offset);
      this.fetchData();
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

* {
  box-sizing: border-box;
}

.search {
  margin: 0 106px;

  .tab-wrapper {
    display: flex;
    line-height: 60px;
    font-size: 15px;
    border-bottom: 1px solid #e1e1e1;
    overflow: hidden;

    .search-menutab {
      margin-top: 20px;
      border-bottom: 2px 2px solid #fff;
      color: black;
      width: 50%;
      text-align: center;
      cursor: pointer;
    }

    .active-search-menutab {
      margin-top: 20px;
      border-bottom: 2px solid #ff204b;
      color: black;
      width: 50%;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
