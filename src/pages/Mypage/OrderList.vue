<template>
  <div class="orderitem-wrapper">
    <div class="orderitem-titlebox">
      <h2>
        {{ productInfo.date }}<span class="divider"></span
        >{{ productInfo.orderNumber }}
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
            <a>{{ productInfo.company }}</a>
          </div>
          <div class="empty"></div>
          <div class="data">주문금액</div>
          <div class="data">진행상황</div>
        </div>
        <div class="order-info">
          <div class="image">
            <a class="item-image"> <img :src="productInfo.image"/></a>
          </div>
          <div class="orderinfo-box">
            <div class="item-name">
              <a>{{ productInfo.productName }}</a>
            </div>
            <div class="order-data">{{ productInfo.option }}</div>
            <div class="order-data">{{ productInfo.amount }} 개</div>
          </div>
          <div class="data1-wrapper">
            <div class="data1">{{ productInfo.price }} 원</div>
            <div class="data1">{{ productInfo.status }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button class="cancel-btn">주문취소</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productInfo']
};
</script>

<style scoped lang="scss">
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
      font-size: 24px;
      margin-top: 3px;
      text-decoration: none;
      color: #000000;
      font-weight: bold;
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
    border-bottom: 1px solid #000;

    .seller-title {
      font-weight: bold;
      font-size: 26px;
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
            font-weight: bold;
            width: 243px;
          }
        }
      }
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;

    .cancel-btn {
      margin-top: 30px;
      background: #000000;
      padding: 19px 0;
      font-size: 20px;
      width: 45%;
      display: inline-block;
      color: #ffffff;
      cursor: pointer;
      font-weight: lighter;
      text-align: center;
      letter-spacing: 1;
    }
  }
}
</style>
