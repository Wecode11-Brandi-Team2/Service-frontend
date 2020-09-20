<template>
  <main class="Detail">
    <section class="detailWrapper">
      <div class="productInfoWrapper">
        <section class="productImageWrapper">
          <div class="productImage" />
          <div class="sliderContainer">
            <div
              class="imageSlideTab"
              v-for="image in slideImage"
              :key="image.id"
              :style="{ backgroundImage: 'url(' + image.image + ')' }"
            ></div>
          </div>
        </section>
        <section class="purchaseInfo">
          <section class="purchaseBasicInfo">
            <div class="sellerName">{{ purchaseInfo.sellerName }}</div>
            <div class="productName">{{ purchaseInfo.productName }}</div>
            <div class="priceContainer">
              <div class="price">{{ purchaseInfo.price }}</div>
              <span class="won">원</span>
            </div>
            <div class="quantity">{{ purchaseInfo.quantity }}개 구매중</div>
          </section>
          <section class="optionAndPayment">
            <SelectColor option="컬러" />
            <SelectColor option="사이즈" />
            <div class="totalPriceContainer">
              <div class="totalPriceSeat">총 상품 금액</div>
              <div class="totalPriceWrapper">
                <div class="totalPrice">{{ purchaseInfo.totalPrice }}</div>
                <div class="totalPriceWon">원</div>
              </div>
            </div>
            <button class="buyBtn">바로 구매</button>
          </section>
        </section>
      </div>
      <section>
        <ul class="detailInfoTabWrapper">
          <!-- 탭을 선택했을 때 식별하기 위해 v-for 사용할 것을 권장 -->
          <li>상품정보</li>
          <li>리뷰({{ detailInfoTab.review }})</li>
          <li>Q&A({{ detailInfoTab.Q_A }})</li>
          <li>주문정보</li>
        </ul>
        <section class="detailInfoContainer">
          <ProductInfo />
          <QA />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import SelectColor from './SelectColor';
import ProductInfo from './ProductInfo';
import QA from './QA';

export default {
  name: 'Detail',
  components: {
    SelectColor,
    ProductInfo,
    QA
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
      slideImage: [
        {
          id: 1,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862781_image1_L.jpg'
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image2_L.jpg'
        },
        {
          id: 3,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image3_L.jpg'
        },
        {
          id: 4,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862784_image4_L.jpg'
        },
        {
          id: 5,
          image:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862787_image5_L.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.detailWrapper {
  max-width: 1230px;
  padding: 70px 15px;
  margin: 0 auto;

  .productInfoWrapper {
    position: relative;
    @include setSize(100%, 740px);
    margin-bottom: 170px;

    .productImageWrapper {
      width: 560px;

      .productImage {
        @include setSize(100%, 620px);
        \margin-bottom: 20px;
        background-image: url('https://image.brandi.me/cproduct/2020/05/07/16132323_1588862781_image1_L.jpg');
      }

      .sliderContainer {
        @include setSize(100%, 85px);

        .imageSlideTab {
          display: inline-block;
          @include setSize(82px, 100%);
          margin-right: 13px;
          background-size: 100%;
        }
      }
    }

    .purchaseInfo {
      position: absolute;
      top: 0;
      right: 0;
      @include setSize(590px, 690px);

      .purchaseBasicInfo {
        width: 100%;

        .sellerName {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .productName {
          display: flex;
          align-items: center;
          @include setSize(100%, 40px);
          margin-top: 0px;
          margin-bottom: 18px;
          font-size: 28px;
          font-weight: 500;
        }

        .priceContainer {
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

      .optionAndPayment {
        width: 100%;

        .totalPriceContainer {
          position: relative;
          height: 45px;
          margin-top: 25px;

          .totalPriceSeat {
            display: inline-block;
            padding-top: 11px;
            font-size: 18px;
          }

          .totalPriceWrapper {
            display: inline-flex;
            position: absolute;
            right: 0;
            color: #ff204b;

            .totalPrice {
              display: inline-block;
              padding-top: 3px;
              font-size: 30px;
              font-weight: 700;
            }

            .totalPriceWon {
              padding-top: 11px;
              font-size: 18px;
            }
          }
        }

        .buyBtn {
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

  .detailInfoTabWrapper {
    position: sticky;
    top: 0;
    display: flex;
    height: 72px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;

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

  .detailInfoContainer {
    padding-top: 60px;
  }
}
</style>
