<template>
  <main class="Detail">
    <section class="detail-wrapper">
      <div class="product-info-wrapper">
        <SlideImageWrapper />
        <section class="purchase-info">
          <section class="purchase-basic-info">
            <div class="seller-name">
              <i class="fas fa-home" />
              <span>{{ purchaseInfo.sellerName }}</span>
              <div class="right-btn"></div>
            </div>
            <div class="product-name">{{ purchaseInfo.productName }}</div>
            <div class="price-container">
              <div class="price">{{ purchaseInfo.price }}</div>
              <span class="won">원</span>
            </div>
            <div class="quantity">{{ purchaseInfo.quantity }}개 구매중</div>
          </section>
          <section class="option-payment">
            <SelectColor option="컬러" />
            <SelectColor option="사이즈" />
            <div class="total-price-container">
              <div class="total-price-seat">총 상품 금액</div>
              <div class="total-price-wrapper">
                <div class="total-price">{{ purchaseInfo.totalPrice }}</div>
                <div class="total-price-won">원</div>
              </div>
            </div>
            <button class="buy-btn">바로 구매</button>
          </section>
        </section>
      </div>
      <section>
        <ul class="detail-info-tab-wrapper">
          <!-- 탭을 선택했을 때 식별하기 위해 v-for 사용할 것을 권장 -->
          <li>상품정보</li>
          <li>리뷰({{ detailInfoTab.review }})</li>
          <li>Q&A({{ detailInfoTab.Q_A }})</li>
          <li>주문정보</li>
        </ul>
        <section class="detail-info-container">
          <ProductInfo />
          <QA :QA="detailInfoTab.Q_A" />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import SelectColor from './SelectColor';
import ProductInfo from './ProductInfo';
import QA from './QA';
import SlideImageWrapper from './SlideImageWrapper';

export default {
  name: 'Detail',
  components: {
    SelectColor,
    ProductInfo,
    QA,
    SlideImageWrapper
  },
  data() {
    return {
      purchaseInfo: {
        sellerName: '알콜',
        productName: '네츄럴 시스루 단추 니트 (5color)_ 알콜',
        price: '16,100',
        quantity: 0,
        totalPrice: '0'
      },
      detailInfoTab: {
        review: 0,
        Q_A: 0
      },
      innerWidth: 0,
      singleWidth: 0
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.detail-wrapper {
  max-width: 1230px;
  padding: 70px 15px;
  margin: 0 auto;

  .product-info-wrapper {
    position: relative;
    @include setSize(100%, 740px);
    margin-bottom: 170px;

    .purchase-info {
      position: absolute;
      top: 0;
      right: 0;
      @include setSize(590px, 690px);

      .purchase-basic-info {
        width: 100%;

        .seller-name {
          font-size: 22px;
          margin-bottom: 8px;

          .right-btn {
            display: inline-block;
            margin-left: 10px;
            @include setSize(16px, 16px);
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
            background-size: 100%;
            background-repeat: no-repeat;
            transform: rotate(-90deg);
          }
        }

        .product-name {
          display: flex;
          align-items: center;
          @include setSize(100%, 40px);
          margin-top: 0px;
          margin-bottom: 18px;
          font-size: 28px;
          font-weight: 500;
        }

        .price-container {
          position: relative;
          @include setSize(100%, 50px);
          margin-bottom: 12px;

          .price {
            position: absolute;
            left: -7px;
            padding-top: 9px;
            font-size: 34px;
            font-weight: 800;
          }

          .won {
            position: absolute;
            top: 20px;
            left: 92px;
            font-size: 20px;
          }
        }

        .quantity {
          padding: 15px 0;
          border-bottom: 1px solid #808080;
        }
      }

      .option-payment {
        width: 100%;

        .total-price-container {
          position: relative;
          height: 45px;
          margin-top: 25px;

          .total-price-seat {
            display: inline-block;
            padding-top: 11px;
            font-size: 18px;
          }

          .total-price-wrapper {
            display: inline-flex;
            position: absolute;
            right: 0;
            color: #ff204b;

            .total-price {
              display: inline-block;
              padding-top: 3px;
              font-size: 30px;
              font-weight: 700;
            }

            .total-price-won {
              padding-top: 11px;
              font-size: 18px;
            }
          }
        }

        .buy-btn {
          width: calc((100% - 156px) / 2);
          margin-top: 30px;
          padding: 16px 4px;
          border: none;
          border-radius: 6px;
          background-color: #1e1e1e;
          color: #fff;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
  }

  .detail-info-tab-wrapper {
    position: sticky;
    top: 0;
    display: flex;
    height: 72px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    z-index: 5;

    li {
      @include setFlex(center, center, row);
      @include setSize(25%, 100%);
      padding: 17px 4px 22px;
      border-bottom: 4px solid #f2f2f2;
      color: #9a9a9e;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .detail-info-container {
    padding-top: 60px;
  }
}
</style>
