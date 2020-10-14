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
      console.log('Hello', JSON.parse(JSON.stringify(this.apiData.images)));
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
          image:
            this.apiData.images.length < 1
              ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD////FxcWWlpYvLy+QkJD7+/v19fXAwMDg4ODx8fGysrLZ2dmrq6vu7u78/PzR0dGjo6Nvb2+8vLyCgoJHR0dpaWmKioqamppZWVlgYGB5eXnl5eWvr68pKSkfHx9QUFBBQUEzMzM6OjoREREbGxtFRUV9fX0MDAwkJCR3hx+tAAAKqklEQVR4nOWd6XqyOhSFwVlExVlxKFX72d7/DR5xTEJGssLgWX/ro3kLSfaUHc93rU4Q9vbN+Tb+Ph6+zr/e7/nrcPyOt/P1vhcGHee/7zn87nE4WCUHT65WshqEDgfhinAcDqdfCjZSf9Nh381InBCG68QA7q3N2sXDRBMGs2kuuqemvS54RFDC0XBhhXdXMhwhB4Uj7ELwHpAD3BqLIoxiGN5dywg0Mghhd2KyburqMBkjBgcgDO3WFpkugC3EmjBKnPGl2lhvIJaEjZNTvlQLywlpRVgAX6p/VowWhBFud1BpYzEfcxOO0NuDXNOgaMJVoXyp1oUSzgrnS9UojLC7KQXwaufkseVyEA5L4ks1K4AwKG4F5Sk2foymhINS+VKZzkZDQncmqL7mDgn7P2XT3XQ08pBNCMtcYmj13BBW4Q19auWAMDiWTUUp0faOdQn7ZSOx+tM1VDUJG2UDcaTpG+sRTsqm4UpvvdEiLN6R0NMERbgtm0SoJoawWFfXTBq7hpqwyoA6iErCagNqIKoIq2TI8KWaiwrCednj15BiRZUTVnWboLXPT1gdZ0IuacRYRlhFU40vWcBYQlg5Y1siSWpcTBiUPWoTtfIQtsoetZFic8Lqb4S0hEF/EWE1/SWZRFFGAWFY9nhzSBCB4xN2yx5tHp1MCMtKvdiJb4RzCes3Ce/iTkUe4a7skeYWL8TIIyym/sCFpnqE67LHaSHOe5olrO87mkqH8F/Zg7TSVk1YfgrUTplIOEvYKXuEtsp4GSxhdaO/uhrKCetoj7LqSgnLLbTAaC4jrE9kRqadhFB1wKUeWooJ675TPNUXEp7LHhpIGxHhpzxCetsnCT/lEdKRN4KwnKJRN9pxCatVMGOnKY/Q4V7Yms5X7Wb7svlz9xuMRhzCxM1PxXty7e6Ek2KiXM0soRPHd8mLDY1niYvfYpQldJDtnQurJPtL/K8xetVLPwnxfuFUehg0dG3jL1hC9G7/o6w624N/kdVz+j8JwdGZi4rvqq7bx/iMgD8IwevMQAPQdx1QoAmb0O/WPmvmNH3QoAihW7HBoUiXiFOSEBqeMTr1iX15aHUIQmRlkEkdve80m94jCIFHsdsciv7+sji1vpM5r/mFuzzQ9E0IrJz5zhCM2uTfW0P24NII9+Os3oTA+b5jxt/JWoPsU3a32kQvQtzWy9Z88L1qZi1y5pi2n4Q4m/SXARSZ87RFEMF+n9HpSdiDfSVTByn2IOhn7cxl7D4IcY4TDSgzyqiyV2cPcfYghEW66YJk+WZO+cYuGoekmt8Jccs15fGq7CTSfXS1nB7uhLBpuCABlbWNZN2Esz0xuBG21R/UEzW31BXUpH3jyrBp3AgT1NfRCRGlyBQR7L/MqHkjhH0dCajz6hMnCF0Fa+OUEObeJyShTjCNeKudFUikhLCFhioNVH762G5Qp0C70dxFZqh7JYQVeZFFEKqtYsVa6DdF+DBqdCWEfSvZs0KexxKf49mhA9PDKyHMsifjT7IXQ34UC9zZZ+V7uDlO2mFii+3EfT9J4RwBL014ezhzgiQU7m+8IAer7jdsTF7L93B2vQ6hZmMSYKi44+HeCQ1C7ZZduCBj4OFO4KkJlVPwLdgeFnq4UKmS0KjpGmpcDe8C+iY1oWFzINCuMfNw24+CULoNdobZfCom9DDxcCuznHDBAjTI8P91RV+yLzEmTt32cFknOSGzyow2Hhn8vq2dUyYcDnEa594v4mtukhIyZ5IGTLXyw3RkEo8IZwOZhZUS0o9nzpw0e/modJE2og4NmduSEdLeRPp/peJy762BDhUDFhukIS8j7LA89PtIfJIK+AMqRBL7r3hJQkiVZvQ8dm+k7CoqbWM/KmTaR0JIjjrwMsknakX5Iv9i7xAjm+hJCMlBx17M7O6MDUpOxWqd/xATki9plLHeMh4q+Q8AjKuI/ZCM4GRrbTL5WfIhWkeRfj1cCE9MKO3kmLVczsRfrZ27s4dLbAkJv1goUjwPnFiIrCfin4drfyEk3GSwFATEa2odRjoW4VtImlXx/QfyX2I7qkUR/qE4ACx4B3+Ij9iuEzHQ9hYSCvs4CaNgxGdsbZKthwujCwlFLarFATVi8bWt05h7uLidkJBfT9uXrAAEoe0sWnu4cmshIa9581j67hDdH2yf4aCQiHCmy3hXUXxBfNQ2w98rJKrPbIiRanUjs8m2owqLycwkL2M6aGiEeptAwsBRdi1jbG57UW/fjvUie4R1bh1S7Hi4rmVa2TUdkRu+bRzj6Hu4wkAYIWkD2SYd4ishLDUDIyQ7Bdm6Pu0rIezEE4qQNPKsnafZlRAWCgERUgkO6xcsvBKObb/kKRAhVUdkPahbXRsqN4MhpAKN1jPodCNERfYhhHSgyjqqv70RojL5CEI6VGyfmRncCFFLjT3hlO4oB1gh+jdClN1mS3hiQ6kA59y/1+on9t+Uyo5wmgkVA7ye+EEIql0hCdd/LW2dksuac+oU0WF08iAETcR8F78JhShu7z8IQZXeWEJElPOWHrgRYopooYSQIOf2RYgxvpGEmP9570WIiWTgCDugA5HdFyGmowKMEBUcuwfA7oSQk1WajRSUgkXhBwQh5DXV6YWh1gyXlO4ShJiTwNJ2LXrqAUu8H1HaByHEv0jEI9fSrgk9NTOjCDFN2P/lv3o5aLTRTRvHFCGqIvf70jRWe7tMHDQBe57gfBJ+Rl9PUhFD+EEtBe969RN+Ebpso1KGhhnCWl0ro6FxhhB3Sq8Sepsfb8JqlQHaasch/Ig+0E8RDUwJwk/aMEIu4Yd0gk5FZndIQujhzVIVCQg/5iFSCTrjRgh1UCQkrPENM6To8h2a0Fmzn0LVlxDW9CorWsxFLAxhva/RuSuQEtbkblWZ2JZxLCGsbqEsZQ4GZO4Kqnvv+UyeLnvfU1L2GK2UvZcsS+iwF2UByhTr8u5dq+vdgKk4RfO8u/Pqey8Z70ZZHmF939PsOyq4w7Iu93Gz0r7DEhYBL1j85BefsJb3yx24KP/b+4DrOBVFfcQ/5l5uYXMY8d3q9bo6SHxOVUxYq5urW7ybgFWEyE7tziUpIZAQ1igILruOQUZYmwVVWqskJXTW/BYr9m5VE0IXt0DBJT4qrkNYg21R3ixUTVh5I1zSzkCTsOLZbyWgBmGlr3lWvaJ6hBVebhSLjDZhZQPh8m3ChLCi4Te9omQ9wkrmTjVvztIkrJ4ZfgjUgzYi9ANcMyKENmJ3KS9htcwbnabZ5oQVcjVMDj6YEPp9XB29jU66U9Cc0B9XwYRTG2oWhO7vR1XL9GiOKaE/KjczteQlX7CE5Ro4htdH5iT0R0lJfNkUtiNC/P3IWjprX1ELIORd3OhaOp4SkND3d8UWiF1yHxvLTej7UXGVjLHBvRFAwqtPVYw1nhjdMAwl9P2Ge0Y7PmvCKyPwTCRHsSUfgNDJTVtPzS3mH5DQ97vYw58PHYV9T40EIbyqgd48ttav50MoQt8PJrgZuZlpBymUwhFetYNAbgaAQ+FvQQmvGg2s1p3zpWHsHimEJkwVtfMdg4sn+c+Ci+WC8KpOOFmarK+t7d4FXSpHhDd1wv18oTpL1dq0Z6hlkyuXhHd1RlFv2Jxv4+/j4ev86/2evw7HxfKyWg96YYCedVn9B0QZfnBpzwFwAAAAAElFTkSuQmCC'
              : this.apiData.images[0].image_url,
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
