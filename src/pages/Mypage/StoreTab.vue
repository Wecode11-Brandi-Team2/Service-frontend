<template>
  <div class="store-tab">
    <div class="search-header">
      <h2>
        스토어 검색결과 (<span class="results">{{ sellers.count }}</span
        >건)
      </h2>
    </div>
    <div class="product-wrapper">
      <ul
        class="store-card"
        v-for="seller in sellers.seller_list"
        :key="seller.id"
      >
        <li class="store-image">
          <img :src="seller.image_url" />
        </li>
        <div class="txt-wrapper">
          <li class="store-title">{{ seller.korean_name }}</li>
        </div>
      </ul>
      <div class="span-wrapper">
        <span :class="[sellers.seller_list.length <= 1 ? 'hidden' : 'nope']"
          >검색된 스토어가 없습니다.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreTab',
  props: ['sellers']
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

* {
  box-sizing: border-box;
}
.store-tab {
  .search-header {
    padding-top: 50px;

    h2 {
      font-size: 15px;
      font-weight: normal;
      letter-spacing: 1;
      margin: 12px 0;
    }
    .results {
      color: #ff204b;
    }
    .sale::before {
      top: 50%;
      left: 0;
      content: '';
      position: absolute;
      width: 17px;
      height: 17px;
      margin-top: -8.5px;
      background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/icon_check_bg.png');
      background-repeat: no-repeat;
    }
  }
  .product-wrapper {
    display: flex;
    flex-wrap: wrap;

    .store-card {
      display: flex;
      align-items: center;
      height: 50px;
      width: 286px;
      margin: 12px 12px 12px 0;

      .store-image {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .store-title {
        padding: 0px 0px 0px 15px;
        color: #000;
        font-size: 16px;
      }
    }
    .span-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 50px 0;
      font-size: 17px;

      .nope {
        display: none;
      }
    }
  }
}
</style>
