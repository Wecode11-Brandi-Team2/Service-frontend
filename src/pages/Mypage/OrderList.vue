<template>
  <div class="orderitem-wrapper">
    <div class="orderitem-titlebox">
      <h2>
        {{ createdAt }}<span class="divider"></span
        >{{ productInfo.order_detail_id }}
      </h2>
      <div class="detail-btn">
        <a class="btn-showdetail"
          >주문상세보기<img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-titleic-detailpage-moreaction@3x.png"
            class="order-arrow"
        /></a>
      </div>
    </div>
    <div class="delivery-wrapper">
      <div class="seller-title">판매자 배송 상품</div>
      <div class="ordered-item">
        <div class="shop-info">
          <div class="shop-name">
            <a>{{ productInfo.korean_name }}</a>
          </div>
          <div class="empty"></div>
          <div class="data">주문금액</div>
          <div class="data">진행상황</div>
        </div>
        <div class="order-info">
          <div class="image">
            <a class="item-image"> <img :src="productInfo.main_img"/></a>
          </div>
          <div class="orderinfo-box">
            <div class="item-name">
              <a>{{ productInfo.name }}</a>
            </div>
            <div class="order-data">{{ productInfo.option }}</div>
            <div class="order-data">{{ productInfo.units }} 개</div>
          </div>
          <div class="data1-wrapper">
            <div class="data1">{{ productInfo.price.toLocaleString() }} 원</div>
            <div class="data1">
              {{ getShipStatus() }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-btn-wrapper">
      <button
        @click="request"
        :class="[this.productInfo.order_status_id === 6 ? 'hidden' : '']"
      >
        {{ createButton() }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import URL from '@/assets/mock/URL';
const myPageStore = 'myPageStore';

export default {
  name: 'OrderList',
  props: ['productInfo'],
  data() {
    return {
      createdAt: 0,
      buttonTitle: ''
    };
  },

  created() {
    this.updateProducts({ product: this.productInfo });
    this.findDate(this.productInfo.created_at);
    this.createButton();
  },

  computed: {
    ...mapGetters(myPageStore, ['getProducts']),
    products() {
      return this.products;
    }
  },
  methods: {
    ...mapActions(myPageStore, ['updateProducts']),

    createButton() {
      let statusOfShip = this.productInfo.order_status_id;

      if (statusOfShip === 1 || statusOfShip === 2) {
        return (this.buttonTitle = '주문취소');
      }
      if (statusOfShip === 3 || statusOfShip === 4) {
        return (this.buttonTitle = '환불요청');
      }
      if (statusOfShip === 7) {
        return (this.buttonTitle = '환불요청취소');
      }
      if (statusOfShip === 5 || statusOfShip === 6 || statusOfShip === 8) {
        return (this.buttonTitle = '');
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
    },

    getShipStatus() {
      let statusOfShip = this.productInfo.order_status_id;

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
      if (statusOfShip === 5) {
        return '구매확정';
      }
      if (statusOfShip === 6) {
        return '주문취소완료';
      }
      if (statusOfShip === 7) {
        return '환불요청';
      }
      if (statusOfShip === 8) {
        return '환불완료';
      }
    },

    refresh() {
      window.location.reload();
    },

    request() {
      this.updateProducts({ product: { id: 11 } });

      if (this.buttonTitle === '환불요청') {
        let answer = confirm('선택하신 주문을 환불하시겠습니까?');

        if (answer) {
          let refundToLocal = JSON.stringify(this.productInfo);
          localStorage.setItem('refund_data', refundToLocal);
          this.$router.push('refund');
        }

        this.$store.commit('myPageStore/REFUND_ITEM', this.productInfo);
      }
      if (this.buttonTitle === '주문취소') {
        let answer = confirm('선택하신 주문을 취소하시겠습니까?');

        if (answer) {
          let cancelToLocal = JSON.stringify(this.productInfo);
          localStorage.setItem('cancel_data', cancelToLocal);
          this.$router.push('cancel');
        }
        this.$store.commit('myPageStore/CANCEL_ITEM', this.productInfo);
      }
      if (this.buttonTitle === '환불요청취소') {
        axios.post(
          `${URL.LOGIN_URL}/api/order/refundCancel`,
          { order_detail_id: this.productInfo.order_detail_id },
          {
            headers: {
              Authorization: localStorage.getItem('access_token')
            }
          }
        );
        let answer = confirm('환불 요청을 취소하시겠습니까?');
        answer ? this.$router.push('myPage') : '';
      }
      this.refresh();
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.hidden {
  display: none;
}

.orderitem-wrapper {
  margin: 0 70px;
  padding: 0 20px;

  .orderitem-titlebox {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    border-bottom: 3px solid #000;
    font-weight: bold;
    font-size: 26px;
    padding-bottom: 16px;

    .divider {
      border-right: solid 2px #000000;
      margin: 0 10px;
      padding-top: 19px;
      font-size: 0;
      line-height: 0;
    }
    .btn-showdetail {
      @include setFont(24px, #000000, bold);
      margin-top: 3px;
      text-decoration: none;
      cursor: pointer;

      .order-arrow {
        margin-left: 4px;
        margin-bottom: 7px;
        height: 27px;
        vertical-align: text-bottom;
        width: 10px;
        max-height: 20px;
        cursor: pointer;
      }
    }
  }
  .delivery-wrapper {
    border-bottom: 1px solid #e1e1e1;

    .seller-title {
      @include setFont(26px, null, bold);
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #000;
    }
    .ordered-item {
      .shop-info {
        display: flex;
        align-items: center;
        height: 64px;

        .shop-name {
          @include setFont(17px, #000000, bold);
          width: 126px;
          padding: 19px 10px;
          cursor: pointer;
          text-decoration: none;
        }
        .empty {
          width: 673px;
        }
        .data {
          @include setFont(16px, null, 400);
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
        height: 126px;

        .item-image {
          padding: 15px 10px;

          img {
            @include setSize(95px, 95px);
            margin-right: 10px;
            cursor: pointer;
          }
        }
        .orderinfo-box {
          width: 673px;
          padding: 10px;

          .item-name {
            @include setFont(1em, null, 400);
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
            font-weight: bold;
            width: 243px;
          }
        }
      }
    }
  }
  .order-btn-wrapper {
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid black;
    height: 60px;

    button {
      font-size: 14px;
      margin: 10px 5px 7px 0;
      padding: 10px 25px;
      height: 42px;
      overflow: hidden;
      text-align: center;
      color: #000;
      border: solid 1px #000;
      background: #fff;
      cursor: pointer;
    }
  }
}
</style>
