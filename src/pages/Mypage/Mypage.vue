<template>
  <div class="mypage-container">
    <div class="title-box">
      <h1 class="title">마이페이지</h1>
    </div>
    <div class="order-frame">
      <div class="icon-box">
        <ul class="icon-listwrapper">
          <li
            v-for="(icon, idx) in icons"
            v-bind:key="icon.icontext"
            class="icon-list"
            @click="selectItem(idx)"
          >
            <a class="on">
              <img
                class="icon-img"
                :class="{ 'active-item': idx === activeItem }"
                :mouseover="changeTextColor"
                :src="icon.iconimage"/>
              <br />
              <div class="textarrow-wrapper">
                <span
                  class="icon-text"
                  :class="{ 'active-font': idx === activeItem }"
                  >{{ icon.icontext }}</span
                >
                <img
                  class="nav-arrow"
                  src="https://web-staging.brandi.co.kr/static/2020.7.2/images/ico_my_arrow_gray.png"
                /></div
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <OrderList
      v-for="orderList in productInfo"
      :key="orderList.orderNumber"
      :productInfo="orderList"
    />
  </div>
</template>

<script>
import OrderList from './OrderList.vue';

export default {
  name: 'Mypage',
  components: { OrderList },
  data() {
    return {
      fontColor: 'black',
      activeItem: 0,
      productInfo: [
        {
          date: '2020.09.23',
          orderNumber: 2020092300004000,
          company: '밀리',
          image:
            'https://image.brandi.me/cproduct/2020/04/28/15899675_1588044782_image1_L.jpg',
          productName: '윈드 아노락 세트',
          option: '아이보리',
          amount: 2,
          price: 59040,
          status: '배송중'
        },
        {
          date: '2020.10.23',
          orderNumber: 2020092300005500,
          company: '블리즈',
          image:
            'https://image.brandi.me/cproduct/2020/04/28/15899675_1588053187_image3_L.jpg',
          productName: '후드',
          option: '블랙',
          amount: 1,
          price: 29000,
          status: '배송완료'
        }
      ],

      icons: [
        {
          id: 1,
          iconlinkto: 'https://web-staging.brandi.co.kr/mypage/orderList',
          iconimage:
            'https://web-staging.brandi.co.kr/static/20.7.2/images/ic-mypage-orderlist-s@3x.png',
          icontext: '주문/배송조회'
        },
        {
          id: 2,
          iconlinkto: 'https://web-staging.brandi.co.kr/mypage/point',
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-my-point-s@3x.png',
          icontext: '포인트'
        },
        {
          id: 3,
          iconlinkto: 'https://web-staging.brandi.co.kr/mypage/coupon',
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-mypage-coupon-s@3x.png',
          icontext: '쿠폰'
        },
        {
          id: 4,
          iconlinkto: 'https://web-staging.brandi.co.kr/mypage/qna',
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-mypage-qna-s@3x.png',
          icontext: 'Q & A'
        },
        {
          id: 5,
          iconlinkto: 'https://web-staging.brandi.co.kr/mypage/faq',
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-myshopping-faq-s@3x.png',
          icontext: 'FAQ'
        }
      ]
    };
  },
  methods: {
    selectItem(idx) {
      this.activeItem = idx;
    }
  }
};
</script>

<style scoped lang="scss">
.mypage-container {
  .title-box {
    margin-top: 30px;
    padding: 40px 0px 20px 0px;

    .title {
      font-size: 30px;
      font-weight: normal;
      text-align: center;
      margin-bottom: 45px;
    }
  }
  .order-frame {
    padding: 0px 20px;
    margin: 0 70px;

    .icon-box {
      padding: 50px 0;
      border: 1px solid #000000;
      overflow: hidden;
      background-color: #fafafa;
      background: #fcfcfc;

      .icon-listwrapper {
        display: flex;

        .icon-list {
          width: 20%;
          text-align: center;
          border-right: 1px solid #000;
          &:last-child {
            border-right: 0px;
          }
          .on {
            font-weight: 700;
            color: #000000;
            font-size: 1.1em;
            text-decoration: none;
            cursor: pointer;

            .icon-img {
              opacity: 0.4;
              width: 75px;
              margin-bottom: 8px;
              cursor: pointer;
            }

            .active-item {
              opacity: 1;
              width: 75px;
              margin-bottom: 8px;
              cursor: pointer;
            }

            .textarrow-wrapper {
              display: flex;
              justify-content: center;

              .icon-text {
                margin-right: 4px;
                line-height: 18px;
                vertical-align: top;
                font-size: 17px;
                font-weight: normal;
                color: #7d7d7d;
                cursor: pointer;
              }

              .active-font {
                margin-right: 4px;
                line-height: 18px;
                vertical-align: top;
                font-size: 17px;
                font-weight: bolder;
                color: black;
                cursor: pointer;
              }

              .nav-arrow {
                width: 12px;
                opacity: 1;
              }
            }
          }
          a:hover .textarrow-wrapper .icon-text {
            color: red;
          }
        }
      }
    }
  }
}
</style>
