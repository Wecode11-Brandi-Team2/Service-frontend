<template>
  <div class="refund">
    <div class="page-title">
      <h1>환불요청</h1>
    </div>
    <div class="page-frame">
      <h2 class="order-detail-info">
        <div>
          {{ createdAt }}<span class="divider">I</span
          >{{ refundItemInfo.order_detail_id }}
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
            <a>{{ refundItemInfo.korean_name }}</a>
          </div>
          <div class="empty"></div>
          <div class="data">주문금액</div>
          <div class="data">진행상황</div>
        </div>
        <div class="order-info">
          <div class="image">
            <a class="item-image"> <img :src="refundItemInfo.main_img"/></a>
          </div>
          <div class="orderinfo-box">
            <div class="item-name">
              <a>{{ refundItemInfo.name }}</a>
            </div>
            <!-- <div class="order-data">{{ cancelItemInfo.itemInfo }}</div> -->
            <div class="order-data">{{ refundItemInfo.units }} 개</div>
          </div>
          <div class="data1-wrapper">
            <div class="data1">
              {{ refundItemInfo.price.toLocaleString() }} 원
            </div>
            <div class="data1">{{ getShipStatus() }}</div>
          </div>
        </div>
      </div>
      <h2>환불사유</h2>
      <div class="refund-data-box">
        <div class="select-reason">
          <div class="reason">사유</div>
          <div class="select">
            <select v-model="selected" @change="changeOption($event)">
              <option selected>사유를 선택하세요.</option>
              <option
                v-for="option in options"
                :key="option.id"
                :value="option.text"
                :name="option.id"
                >{{ option.text }}</option
              >
            </select>
          </div>
        </div>
        <div class="select-reason">
          <div class="reason">환불사유</div>
          <div class="textarea-wrapper">
            <textarea
              class="text-area"
              placeholder="(선택) 세부 내용을 입력하세요."
            ></textarea>
          </div>
        </div>
      </div>
      <h2 class="refund-info">환불정보</h2>
      <div class="refund-info-box">
        <div class="refund-info-title">총 환불예정금액</div>
        <div class="amount">
          {{ refundItemInfo.total_payment.toLocaleString() }}원
        </div>
      </div>
      <div class="btn-wrapper">
        <button @click="requestRefund" class="refund-btn">
          환불요청하기
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
  name: 'Refund',
  props: ['productInfo'],
  computed: {
    ...mapGetters(myPageStore, ['getProducts']),
    products() {
      return this.products;
    }
    // ...mapState({
    //   refundItemInfo: state => state.myPageStore.refundItemData
    // })
    // refundItemInfo() {
    //   return this.$store.state.myPageStore.refundItemData;
    // }
  },
  created() {
    // this.refundItemInfo = this.$store.state.myPageStore.refundItemData;
    let refundData = JSON.parse(localStorage.getItem('refund_data'));
    this.refundItemInfo = refundData;
    this.convertDate(this.refundItemInfo.created_at);
  },

  beforeDestroy() {
    localStorage.removeItem('refund_data');
  },

  data() {
    return {
      optionSelected: '',
      createdAt: 0,
      refundItemInfo: {},
      productsData: {},
      selected: '사유를 선택하세요.',
      options: [
        { id: 1, text: '단순변심', value: 'option1' },
        { id: 2, text: '상품불량', value: 'option2' },
        { id: 3, text: '오배송', value: 'option3' },
        { id: 4, text: '교환요청', value: 'option4' },
        { id: 5, text: '일부상품누락', value: 'option5' },
        { id: 6, text: '기타', value: 'option6' }
      ],
      refundReason: '',
      refundReasonId: 0
    };
  },

  methods: {
    fetchData() {
      axios
        .post(
          `${URL.LOGIN_URL}/api/order/refund`,
          {
            order_detail_id: this.refundItemInfo.order_detail_id,
            refund_reason_id: this.refundReasonId
          },
          {
            headers: {
              Authorization: localStorage.getItem('access_token')
            }
          }
        )
        .then(res => console.log(res));
    },

    changeOption($event) {
      const options = event.target.options;
      this.refundReasonId = options.selectedIndex;
      // this.options.text = event.target.value;
      this.refundReason = $event.target.value;
    },

    convertDate(date) {
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

    requestRefund() {
      // console.log('나는 환불사유야!!', this.refundReason);
      // console.log('나는 총 가격이야!!!', this.refundItemInfo.total_payment);

      let refundRequestData = {
        refundReason: this.refundReason,
        totalPayment: this.refundItemInfo.total_payment
      };

      // console.log('잘 담겼나', refundRequestData);

      if (this.selected === '사유를 선택하세요.') {
        alert('환불사유를 선택해주세요.');
      }
      if (this.selected !== '사유를 선택하세요.') {
        let answer = confirm('해당 상품을 환불요청하시겠습니까?');
        if (answer === true) {
          localStorage.setItem(
            'refund_result_data',
            JSON.stringify(refundRequestData)
          );

          this.$router.push('/refundResult');
        }
      }
      this.fetchData();
    },

    getShipStatus() {
      let statusOfShip = this.refundItemInfo.order_status_id;
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
    .select-reason {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #bdbdbd;

      .reason {
        display: flex;
        align-items: center;
        width: 252px;
        height: 70px;
        padding: 10px 15px;
        font-weight: 700;
      }
      .select {
        width: 978px;
      }
      .select > select {
        padding: 13px;
        background: #f5f5f5;
        color: #8d8d8d;
        border: none;
        font-size: 0.9em;
        margin: 3px 0px;
        outline: none;
      }
      .textarea-wrapper {
        padding: 10px 0;
        display: flex;
        align-items: center;
        background: white;
        color: #8d8d8d;
        border: none;
        font-size: 0.9em;
        margin: 3px 0px;
        height: 124px;

        .text-area {
          padding: 13px;
          border: none;
          background-color: #f5f5f5;
          width: 952px;
          height: 100px;
          resize: none;
          outline: none;
        }
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
