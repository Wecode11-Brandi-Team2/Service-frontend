<!-- 주문취소 페이지 -->
<template>
  <div class="refund">
    <div class="page-title">
      <h1>주문취소</h1>
    </div>
    <div class="page-frame">
      <h2 class="order-detail-info">
        <div>
          {{ createdAt }}<span class="divider">I</span
          >{{ cancelItemInfo.orderNumber }}
        </div>
        <a class="order-detail-button"
          >주문상세보기<img
            class="arrow-btn"
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ico_my_arrow_bk.png"
            alt="arrow"
        /></a>
      </h2>
      <div class="ordered-item">
        <div class="shop-info">
          <div class="shop-name">
            <a>{{ cancelItemInfo.sellerName }}</a>
          </div>
          <div class="empty"></div>
          <div class="data">주문금액</div>
          <div class="data">진행상황</div>
        </div>
        <div class="order-info">
          <div class="image">
            <a class="item-image"> <img :src="cancelItemInfo.itemImage"/></a>
          </div>
          <div class="orderinfo-box">
            <div class="item-name">
              <a>{{ cancelItemInfo.itemName }}</a>
            </div>
            <div class="order-data">{{ cancelItemInfo.amount }} 개</div>
          </div>
          <div class="data1-wrapper">
            <div class="data1">{{ cancelItemInfo.price }} 원</div>
            <div class="data1">{{ getShipStatus() }}</div>
          </div>
        </div>
      </div>
      <h2 class="refund-info">주문 취소 정보</h2>
      <div class="refund-info-box">
        <div class="refund-info-title">총 주문취소금액</div>
        <div class="amount">{{ cancelItemInfo.price }}원</div>
      </div>
      <div class="btn-wrapper">
        <button @click="requestCancel" class="refund-btn">
          주문취소하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import URL from '../../../src/assets/mock/URL.js';

const myPageStore = 'myPageStore';
export default {
  name: 'Cancel',
  props: ['productInfo'],
  computed: {
    ...mapGetters(myPageStore, ['getProducts']),
    products() {
      return this.products;
    }
  },
  created() {
    this.cancelItemInfo = this.$store.state.myPageStore.cancelItemData;
  },

  data() {
    return {
      cancelItemInfo: {},
      productsData: {},
      selected: '선택하신 주문을 취소하시겠습니까?',
      createdAt: 0
    };
  },

  methods: {
    fetchData() {
      axios
        .post(
          `${URL.LOGIN_URL}/api/order/cancel`,
          { order_detail_id: this.cancelItemInfo.orderNumber },
          {
            headers: {
              Authorization: localStorage.getItem('access_token')
            }
          }
        )
        .then(res => console.log(res));
    },

    requestCancel() {
      let answer = confirm('선택하신 주문을 취소하시겠습니까?');
      if (this.selected === '선택하신 주문을 취소하시겠습니까?') {
        if (answer === true) {
          alert('주문 취소가 완료되었습니다.');
          this.$router.push('/mypage');
        }
      }
      this.fetchData();
    },

    getShipStatus() {
      let statusOfShip = this.cancelItemInfo.status;
      if (statusOfShip === 1) {
        return '결제완료';
      }
      if (statusOfShip === 2) {
        return '상품준비';
      }
      if (statusOfShip === 3) {
        return '배송중';
      }
      if (statusOfShip === 4) {
        return '배송완료';
      }
    },

    findDate(date) {
      const fulldate = date;
      const convert = new Date(fulldate);
      const year = convert.getFullYear();
      const month = convert.getMonth() + 1;
      let day = convert.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      this.createdAt = `${year}.${month}.${day}`;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.refund {
  .page-title {
    padding-top: 40px;

    h1 {
      margin-top: 30px;
      font-size: 30px;
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .page-frame {
    padding: 0px 20px;
    margin: 0 70px;

    .ordered-item {
      .shop-info {
        display: flex;
        align-items: center;
        height: 64px;

        .shop-name {
          width: 126px;
          padding: 19px 10px;
          color: #000000;
          cursor: pointer;
          text-decoration: none;
          font-size: 17px;
          font-weight: bold;
        }
        .empty {
          width: 673px;
        }
        .data {
          font-weight: 400;
          font-size: 16px;
          letter-spacing: 0.7;
          text-align: center;
          width: 252px;
          padding: 19px 10px;
        }
      }
      .order-info {
        display: flex;
        align-items: center;
        border-top: 1px solid #e1e1e1;
        border-bottom: 1px solid black;

        height: 126px;

        .item-image {
          padding: 15px 10px;

          img {
            width: 95px;
            height: 95px;
            margin-right: 10px;
            cursor: pointer;
          }
        }
        .orderinfo-box {
          width: 673px;
          padding: 10px;

          .item-name {
            font-weight: 400;
            font-size: 1em;
            margin-bottom: 4px;
          }
          .order-data {
            color: #9e9e9e;
            font-weight: 300;
            font-size: 17px;
            margin-top: 10px;
          }
        }
        .data1-wrapper {
          display: flex;
          text-align: center;

          .data1 {
            font-size: 20px;
            font-weight: normal;
            width: 243px;
          }
        }
      }
    }
    h2 {
      display: flex;
      justify-content: space-between;
      margin-top: 70px;
      padding-bottom: 18px;
      font-weight: 300;
      font-size: 27px;
      border-bottom: 1px solid #000;
      font-family: 'Spoqa Han Sans', Sans-serif;

      .order-detail-button {
        color: #000000;
        font-size: 1em;
        font-weight: bold;
        cursor: pointer;
      }
      .arrow-btn {
        width: 13px;
        height: 27px;
        vertical-align: middle;
        margin: 0 0 6px 4px;
      }
      .divider {
        font-size: 26px;
        margin: 0 8px;
      }
    }
    .refund-info {
      padding-bottom: 15px;
      font-weight: 300;
      font-size: 2em;
      border-bottom: 1px solid #000;
      margin-top: 50px;
      font-weight: 300;
      font-size: 27px;
      font-family: 'Spoqa Han Sans', Sans-serif;
    }
    .refund-info-box {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      border-bottom: 1px solid #000;
      overflow: hidden;
      font-size: 1.2em;
      margin-bottom: 50px;

      .refund-info-title {
        text-align: left;
        font-size: 26px;
        font-weight: bold;
        width: 590px;
        height: 38px;
        padding: 10px 20px;
      }
      .amount {
        color: #ff204b;
        font-size: 26px;
        text-align: right;
        font-weight: bold;
        width: 390px;
        height: 38px;
        padding: 10px 20px;
      }
    }
    .btn-wrapper {
      display: flex;
      justify-content: center;

      .refund-btn {
        background: #000000;
        color: #ffffff;
        text-align: center;
        border: 1px solid #000000;
        width: 170px;
        height: 50px;
        border-radius: 4px;
        font-size: 17px;
        line-height: 46px;
        cursor: pointer;
      }
    }
  }
}
</style>
