<template>
  <div class="product-tab">
    <div class="search-header">
      <h2>
        검색결과 <span class="results">{{ value.toLocaleString() }}</span
        >건
      </h2>

      <div class="arrange-standard-line">
        <div @click="ChangeSaleCheckActive">
          <SaleCheckButton
            :saleCheckActive="saleCheckActive"
            style="border: none"
          />
        </div>
        <div>
          <div @click="arrange()" class="arrange-standard">
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
      <ul class="product-card" v-for="item in shopItem" :key="item.id">
        <li class="product-img">
          <img :src="item.productImg" alt="product-image" />
        </li>
        <li class="seller">{{ item.seller }}</li>
        <li class="title">{{ item.title }}</li>
        <li class="price">{{ item.price }}</li>
        <li class="count">{{ item.count }}</li>
      </ul>
    </div>
    <div class="btn-wrapper">
      <button class="more-btn">
        더보기
      </button>
    </div>
  </div>
</template>

<script>
import SaleCheckButton from '../../components/Button/SaleCheckButton';

export default {
  name: 'ProductTab',
  data() {
    return {
      saleCheckActive: false,
      value: 18394,
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
      ],
      shopItem: [
        {
          id: 0,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '셀러',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 1,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/10/17238594_1591751342_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 2,
          productImg:
            'https://image.brandi.me/cproduct/2020/07/17/18290308_1594969526_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 3,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 4,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 5,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 6,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        },
        {
          id: 7,
          productImg:
            'https://image.brandi.me/cproduct/2020/06/11/17324705_1591884631_image1_M.jpg',
          seller: '바이영',
          title: '단추 브이넥',
          price: '13,700',
          count: '4,782 구매중'
        }
      ]
    };
  },
  components: {
    SaleCheckButton
  },
  methods: {
    arrange(list) {
      this.isArrangeDropdown = !this.isArrangeDropdown;
      this.activeArrange = list.order;
    },
    ChangeSaleCheckActive() {
      this.saleCheckActive = !this.saleCheckActive;
      this.promotion === 0 ? (this.promotion = 1) : (this.promotion = 0);
      console.log('PromoValue', this.promotion);
      this.fetchData();
    },
    fetchData() {
      // axios
      //   .get(
      //     `http://10.251.1.153:5000/api/products?offset=${this.offset}&limit=100`,
      //     {}
      //   )
      //   .then(
      //     res => (this.productData = this.productData.concat(res.data.products))
      //   );
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
    flex-wrap: wrap;

    .product-card {
      margin-left: 0px;
      width: 20%;
      padding: 0 0.5% 30px 0.5%;
      box-sizing: border-box;
      overflow: hidden;
      height: auto;
      margin: 0;
      cursor: pointer;

      .product-img img {
        width: 100%;
      }
      .seller {
        margin-top: 8px;
        letter-spacing: 0;
        padding: 0;
        font-size: 16px;
        color: #4a4a4a;
      }
      .title {
        height: 25px;
        padding: 0;
        font-size: 16px;
        font-weight: 500;
        padding-top: 5px;
      }
      .price {
        line-height: 25px;
        padding: 0;
        font-size: 21px;
        font-weight: 800;
      }
      .count {
        margin-top: 10px;
        font-size: 14px;
        color: #757575;
        padding: 0;
      }
    }
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
