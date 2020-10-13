<template>
  <main class="Detail">
    <section class="detail-wrapper">
      <div class="product-info-wrapper">
        <SlideImageWrapper :apiDataImage="apiData.images" />
        <section class="purchase-info">
          <section class="purchase-basic-info">
            <div class="seller-name">
              <a class="seller-page" :href="apiData.site_url">
                <i class="fas fa-home" />
                <span>{{ apiData.korean_name }}</span>
                <div class="right-btn"></div>
              </a>
            </div>
            <div class="product-name">{{ apiData.name }}</div>
            <div class="price-container">
              <div class="price-wrapper">
                <div class="price">{{ productPrice }}</div>
                <span class="won">원</span>
              </div>
            </div>
            <div class="quantity">{{ apiData.sales_amount }}개 구매중</div>
          </section>
          <section class="option-payment">
            <SelectColor
              :apiDataColor="apiData.colors"
              @color-select="colorSelect"
            />
            <SelectSize
              :apiDataSize="apiData.sizes"
              @size-select="sizeSelect"
            />
            <SelectedOptions
              @update-price="setOptionPrice"
              @option-price="getOptionPrice"
              @update-purchase-quantity="updatePurchaseQuantity"
              :apiDataPrice="apiData.price"
              v-for="(option, idx) in userSelections"
              :key="idx"
              :option="option"
            />
            <div class="total-price-container">
              <div class="total-price-seat">총 상품 금액</div>
              <div class="total-price-wrapper">
                <div class="total-price">
                  {{ !isOptionSelected ? 0 : totalPrice.toLocaleString() }}
                </div>
                <div class="total-price-won">원</div>
              </div>
            </div>
            <button @click="purchaseOrder" class="buy-btn">바로 구매</button>
          </section>
        </section>
      </div>
      <section>
        <ul class="detail-info-tab-wrapper">
          <li
            @click="goToPart(tab)"
            :class="[activeTab === tab.id ? 'activeTab' : '']"
            v-for="tab in detailInfoTab"
            :key="tab.id"
          >
            {{ tab.id === 3 ? tab.tab + ' (' + seeMyWrote() + ')' : tab.tab }}
          </li>
        </ul>
        <section class="detail-info-container">
          <div class="v-html" v-html="detailDescription" />
          <!--
          <ProductInfomation />
          -->
          <QA
            @qna-length="calQnaLen"
            @myqna-length="calMyQnaLen"
            @my-wrote-active="myWroteIsActive"
          />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import SelectColor from './SelectColor';
import SelectSize from './SelectSize';
// import ProductInfomation from './ProductInfomation';
import QA from './QA';
import SlideImageWrapper from './SlideImageWrapper';
import SelectedOptions from './SelectedOptions';
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  components: {
    // ProductInfomation,
    SelectColor,
    SelectSize,
    QA,
    SlideImageWrapper,
    SelectedOptions
  },
  props: ['id'],
  data() {
    return {
      // apiData: [],
      // detailDescription: '',
      // productPrice: 0,
      detailInfoTab: [
        {
          id: 1,
          tab: '상품정보'
        },
        {
          id: 2,
          tab: '리뷰'
        },
        {
          id: 3,
          tab: 'Q&A'
        },
        {
          id: 4,
          tab: '주문정보'
        }
      ],
      activeTab: 1,
      totalPrice: 0,
      // savedQnaLocation: 0,
      qnaLength: 0,
      myQnaLength: 0,
      myWroteActive: false,
      purchaseQuantity: 1,
      isColorSelected: false,
      isSizeSelected: false
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.getData(this.$route.params.id);
    window.addEventListener('scroll', this.senseScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.senseScroll);
  },
  methods: {
    getData(paramsId) {
      this.$store.dispatch('GET_DATA', paramsId);
    },
    colorSelect(select) {
      this.isColorSelected = select;
    },
    sizeSelect(select) {
      this.isSizeSelected = select;
    },
    updatePurchaseQuantity(quantity) {
      this.purchaseQuantity = quantity;
    },
    purchaseOrder() {
      if (!this.isColorSelected) {
        alert('[컬러]를 선택하세요.');
        return;
      }
      if (!this.isSizeSelected) {
        alert('[사이즈]를 선택하세요.');
        return;
      }
      if (this.isColorSelected && this.isSizeSelected) {
        let itemOption = {
          product_id: this.apiData.p_id,
          image: this.apiData.images[0].image_url,
          seller_name: this.apiData.korean_name,
          product_name: this.apiData.name,
          total_price: this.totalPrice,
          total_amount: this.purchaseQuantity
        };
        this.$store.commit('PURCHASE_ORDER', itemOption);
        this.$router.push('/order');
      }
    },
    seeMyWrote() {
      if (this.myWroteActive) return this.myQnaLength;
      if (!this.myWroteActive) return this.qnaLength;
    },
    myWroteIsActive(isActive) {
      this.myWroteActive = isActive;
    },
    calQnaLen(length) {
      this.qnaLength = length;
    },
    calMyQnaLen(length) {
      this.myQnaLength = length;
    },
    senseScroll() {
      if (window.scrollY < 48100) {
        this.activeTab = 1;
      } else {
        this.activeTab = 3;
      }
    },
    getOptionPrice(price) {
      this.totalPrice = price;
    },
    setOptionPrice(price) {
      this.totalPrice = price;
    },
    goToPart(tab) {
      this.activeTab = tab.id;

      const productInfoLocation = document.querySelector(
        '.detail-info-container'
      ).offsetTop;
      const tabHeight = document.querySelector('.detail-info-tab-wrapper')
        .offsetHeight;

      if (this.activeTab === 1) {
        window.scrollTo({
          top: productInfoLocation - tabHeight,
          behavior: 'smooth'
        });
      }
      if (this.activeTab === 3) {
        window.scrollTo({
          top: 48100,
          behavior: 'smooth'
        });
      }
    }
  },
  computed: {
    ...mapState({
      apiData: state => state.detailProductInfo.detailData,
      detailDescription: state => state.detailProductInfo.detailDescription,
      productPrice: state => state.detailProductInfo.productPrice
    }),
    userSelections() {
      return this.$store.state.detailProductInfo.userSelection;
    },
    isOptionSelected() {
      return this.$store.state.detailProductInfo.isOptionSelected;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.v-html {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

          .seller-page {
            color: #000;
            text-decoration: none;

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

          .price-wrapper {
            display: flex;
            position: absolute;
            left: -7px;
            padding-top: 9px;

            .price {
              @include setFont(34px, null, 800);
            }

            .won {
              padding-top: 12px;
              font-size: 20px;
            }
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
          cursor: pointer;
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

    .activeTab {
      @include setFlex(center, center, row);
      @include setSize(25%, 100%);
      padding: 17px 4px 22px;
      border-bottom: 4px solid #1e1e1e;
      color: #1e1e1e;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .detail-info-container {
    padding-top: 60px;
  }
}
</style>
