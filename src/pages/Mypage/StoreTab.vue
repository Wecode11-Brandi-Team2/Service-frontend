<template>
  <div class="store-tab">
    <div class="search-header">
      <h2>
        스토어 검색결과 (<span class="results">{{ value }}</span
        >건)
      </h2>
    </div>
    <div class="product-wrapper">
      <ul class="store-card" v-for="store in storeItem" :key="store.id">
        <li class="store-image">
          <img :src="store.storeImg" />
        </li>
        <div class="txt-wrapper">
          <li class="store-title">{{ store.title }}</li>
          <li class="store-tag">#{{ store.tag }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreTab',
  data() {
    return {
      value: 2,
      storeItem: [
        {
          id: 0,
          storeImg:
            'https://image.brandi.me/seller/summermarket_profile_1581389098.png',
          title: '여름',
          tag: '캐주얼'
        },
        {
          id: 1,
          storeImg:
            'https://image.brandi.me/seller/summermarket_profile_1581389098.png',
          title: '여름마켓',
          tag: '심플베이직'
        }
      ]
    };
  },
  components: {},
  methods: {}
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
      .store-tag {
        padding-top: 0px;
        padding: 5px 0px 0px 15px;
        color: #8d8d8d;
        font-size: 13px;
      }
    }
  }
}
</style>
