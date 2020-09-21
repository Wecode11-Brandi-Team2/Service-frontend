<template>
  <div class="myPageContainer">
    <div class="TitleBox">
      <h1 class="title">마이페이지</h1>
    </div>
    <div class="orderFrame">
      <div class="iconBox">
        <ul class="iconListWrapper">
          <li class="iconList">
            <a
              class="on"
              href="https://web-staging.brandi.co.kr/mypage/orderList"
            >
              <img
                class="iconImg"
                src="https://web-staging.brandi.co.kr/static/20.7.2/images/ic-mypage-orderlist-s@3x.png"/><br />
              <span class="iconText">주문/배송조회</span>
              <img
                class="navArrow"
                src="https://web-staging.brandi.co.kr/static/2020.7.2/images/ico_my_arrow_gray.png"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mypage'
};
</script>

<style scoped lang="scss">
.myPageContainer {
  .titleBox {
    margin-top: 30px;
    padding: 40px 0px 20px 0px;
    .title {
      font-size: 30px;
      font-weight: normal;
      text-align: center;
      margin-bottom: 45px;
    }
  }
  .orderFrame {
    padding: 0px 20px;
    margin: 0 auto;
    .iconBox {
      padding: 50px 0;
      border: 1px solid #000000;
      overflow: hidden;
      background-color: #fafafa;
      background: #fcfcfc;
      .iconListWrapper {
        .iconList {
          width: 20%;
          text-align: center;
          border-right: 1px solid #000;
          .on {
            font-weight: 700;
            color: #000000;
            font-size: 1.1em;
            text-decoration: none;
            cursor: pointer;
            .iconImg {
              opacity: 1;
              width: 75px;
              cursor: pointer;
            }
            .iconText {
              line-height: 18px;
              vertical-align: top;
              font-size: 1.1em;
              font-weight: 700;
              color: #000000;
              cursor: pointer;
            }
            .navArrow {
              width: 12px;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
