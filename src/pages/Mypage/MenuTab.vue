<template>
  <div class="menu-tab">
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
  </div>
</template>

<script>
export default {
  name: 'MenuTab',
  data() {
    return {
      activeItem: 0,
      icons: [
        {
          id: 1,
          iconimage:
            'https://web-staging.brandi.co.kr/static/20.7.2/images/ic-mypage-orderlist-s@3x.png',
          icontext: '주문/배송조회'
        },
        {
          id: 2,
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-my-point-s@3x.png',
          icontext: '포인트'
        },
        {
          id: 3,
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-mypage-coupon-s@3x.png',
          icontext: '쿠폰'
        },
        {
          id: 4,
          iconimage:
            'https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-mypage-qna-s@3x.png',
          icontext: 'Q & A'
        },
        {
          id: 5,
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
      if (this.activeItem === 3) {
        this.$router.push('/qna');
      } else if (this.activeItem === 0) {
        this.$router.push('/myPage');
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.menu-tab {
  .title-box {
    margin-top: 30px;
    padding: 40px 0px 20px 0px;

    .title {
      @include setFont(30px, null, normal);
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
            @include setFont(1.1em, #000000, 700);
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
              @include setFlex(center, null, null);

              .icon-text {
                @include setFont(17px, #7d7d7d, normal);
                margin-right: 4px;
                line-height: 18px;
                vertical-align: top;
                cursor: pointer;
              }

              .active-font {
                @include setFont(17px, black, bolder);
                margin-right: 4px;
                line-height: 18px;
                vertical-align: top;
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
