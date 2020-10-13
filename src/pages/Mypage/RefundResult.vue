<template>
  <div class="refund-result">
    <div class="page-title">
      <h1>환불요청완료</h1>
    </div>
    <div class="page-frame">
      <div class="check-image">
        <img
          src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ico_order_success.jpg"
        />
      </div>
      <h1 class="refund-request">환불이 정상적으로 요청되었습니다.</h1>
      <div class="refund-detail">
        <div class="wrapper">
          <div class="request-info">환불요청일</div>
          <div class="request-data">{{ getToday() }}</div>
        </div>
        <div class="wrapper">
          <div class="request-info">환불사유</div>
          <div class="request-data">{{ refundData.refundReason }}</div>
        </div>
        <div class="wrapper">
          <div class="estimated">환불예정금액</div>
          <div class="amount">
            {{ refundData.totalPayment.toLocaleString() }}원
          </div>
        </div>
      </div>
      <div class="information-box">
        <div class="info-box-title">안내사항</div>
        <div class="info-description">
          계좌 환급으로 주문 취소가 이루어질 경우 24시간 이내 처리를 원칙으로
          하며, 영업일 기준 최대 3일까지 소요될 수 있습니다. 또한 카드 취소 혹은
          휴대폰 결제의 경우 카드사 혹은 통신사 사정에 따라 3~7일이 추가로
          소요될 수 있습니다.
        </div>
      </div>
      <div class="btn-wrapper">
        <button @click="moveToMypage">주문/배송조회로 이동</button>
      </div>
    </div>
  </div>
</template>

<script>
import Refund from './Refund';
export default {
  name: 'RefundResult',
  component: { Refund },
  data() {
    return {
      refundData: {}
    };
  },

  beforeDestroy() {
    localStorage.removeItem('refund_result_data');
  },

  methods: {
    getRefundData() {
      this.refundData = JSON.parse(localStorage.getItem('refund_result_data'));
    },

    moveToMypage() {
      this.$router.push('/mypage');
    },

    getToday() {
      const date = new Date();
      return (
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      );
    }
  },

  created() {
    this.getRefundData();
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.refund-result {
  .page-title {
    padding-top: 40px;

    h1 {
      @include setFont(30px, null, normal);
      text-align: center;
      margin: 19px 15px;
    }
  }
  .page-frame {
    padding: 0 20px;
    margin: 0 70px;

    .check-image {
      @include setFlex(center, null, null);

      img {
        @include setSize(146px, 146px);
      }
    }
    .refund-request {
      @include setFont(32px, null, 400);
      text-align: center;
      margin: 40px 0 80px;
    }
    .refund-detail {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding: 20px 0;

      .wrapper {
        @include setFlex(space-between, null, null);
        padding: 10px 20px;

        .request-info {
          @include setSize(590px, 23px);
          text-align: left;
          padding: 10px 0;
        }
        .request-data {
          @include setSize(590px, 23px);
          text-align: right;
          padding: 10px 0;
        }
        .estimated {
          @include setFont(26px, null, bold);
          padding: 10px 0;
        }
        .amount {
          @include setFont(26px, null, bold);
          color: #ff204b;
          padding: 10px 0;
        }
      }
    }
  }
  .information-box {
    padding: 30px;
    border: 1px solid #ccc;
    line-height: 200%;
    margin: 50px 0 30px;

    .info-box-title {
      @include setFont(18px, null, bold);
      margin-bottom: 8px;
    }

    .info-description {
      line-height: 200%;
      font-size: 14px;
    }
  }
  .btn-wrapper {
    @include setFlex(center, null, null);

    button {
      @include setFont(17px, #ffffff, null);
      @include setSize(250px, 50px);
      cursor: pointer;
      background: #000000;
      text-align: center;
      border: 1px solid #000000;
      padding: 0;
      border-radius: 4px;
      line-height: 46px;
    }
  }
}
</style>
