<template>
  <div class="product-tab">
    <div class="search-header">
      <h2>
        검색결과
      </h2>
      <div class="arrange-standard-line">
        <div @click="ChangeSaleCheckActive">
          <!-- 세일 체크 버튼 -->
          <SaleCheckButton
            :saleCheckActive="saleCheckActive"
            style="border: none"
          />
        </div>
        <div>
          <!-- 최신순/판매순 셀렉트박스 -->
          <div @click="activeDropdown" class="arrange-standard">
            <span>{{ activeArrange }}</span>
            <div
              class="dropdown-icon"
              :class="{ 'dropdown-active': isArrangeDropdown }"
            ></div>
          </div>
          <div class="arrange-dropdown-root"></div>
          <ul v-if="isArrangeDropdown" class="arrange-dropdown-list-wrapper">
            <li
              v-for="list in arrangeDropdownList"
              :key="list.id"
              @click="arrange(list)"
            >
              {{ list.order }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="product-wrapper">
      <!-- 판매량순 start -->

      <ProductCard
        class="product-card"
        v-for="item in products"
        v-show="!isNew"
        :product="item"
        :key="item.id"
      />

      <!-- 판매량순 end -->

      <!-- 최신순 start -->

      <ProductCard
        class="product-card"
        v-for="(item, index) in newData"
        v-show="isNew"
        :product="item"
        :key="index"
      />

      <!-- 최신순 end -->
    </div>
    <div class="btn-wrapper" @click="getMoreData">
      <button class="more-btn">
        더보기
      </button>
    </div>
  </div>
</template>

<script>
import SaleCheckButton from '../../components/Button/SaleCheckButton';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import URL from '../../assets/mock/URL.js';

export default {
  name: 'ProductTab',

  props: [
    'products',
    'getMoreData',
    'fetchData',
    'ChangeSaleCheckActive',
    'saleCheckActive'
  ],

  data() {
    return {
      isNew: false,
      newData: [],
      activeArrange: '판매량순',
      isArrangeDropdown: false,
      arrangeDropdownList: [
        {
          id: 0,
          order: '판매량순'
        },
        {
          id: 1,
          order: '최신순'
        }
      ]
    };
  },
  components: {
    SaleCheckButton,
    ProductCard
  },

  methods: {
    activeDropdown() {
      this.isArrangeDropdown = !this.isArrangeDropdown;
      console.log(this.$route.query);
    },

    arrange(list) {
      this.isArrangeDropdown = !this.isArrangeDropdown;
      this.activeArrange = list.order;
      if (list.id === 0) this.isNew = false;
      if (list.id === 1) {
        console.log(this.$route.query.q);
        axios
          .get(
            `${URL.PRODUCT_URL}/api/products?select=1&q=&${this.$route.query.q}`
          )
          .then(res => {
            this.newData = res.data.products;
            // console.log('최신순 데이터에욥', this.newData);
            this.isNew = true;
          });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

* {
  box-sizing: border-box;
}

.product-tab {
  .search-header {
    padding-top: 30px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .results {
      color: #ff204b;
    }
    .sale::before {
      top: 50%;
      left: 0;
      content: '';
      position: absolute;
      width: 17px;
      height: 17px;
      margin-top: -8.5px;
      background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/icon_check_bg.png');
      background-repeat: no-repeat;
    }
  }
  .arrange-standard-line {
    @include setFlex(flex, null, null);
    justify-content: space-between;
    margin-bottom: 20px;

    .arrange-standard {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 130px;
      padding: 7px 10px;
      border: 1px solid #e1e1e1;
      line-height: 20px;
      font-size: 13px;

      .dropdown-icon {
        display: inline-block;
        @include setSize(16px, 16px);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: top 5px center;
      }

      .dropdown-active {
        display: inline-block;
        @include setSize(16px, 16px);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: top 5px center;
        transform: scaleY(-1);
      }
    }

    .arrange-dropdown-root {
      position: relative;
    }

    .arrange-dropdown-list-wrapper {
      position: absolute;
      width: 130px;
      border: 1px solid #c5c5c5;
      border-top: 0px;
      border-radius: 0 0 3px 3px;
      font-size: 13px;
      background-color: #fff;

      li {
        padding: 8px 10px;
        border-bottom: 1px solid #c5c5c5;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          color: #ff204b;
        }
      }
    }
  }
  .product-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    .more-btn {
      width: 250px;
      margin: 0 auto;
      padding: 10px 0;
      border: 1px solid #000;
      color: #000;
      background-color: white;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
