<template>
  <main>
    <div class="shop-frame">
      <ul class="classification">
        <li
          :class="{ 'active-tab': idx === activeTab }"
          @click="setActiveTab(idx)"
          v-for="(part, idx) in classification"
          :key="part.id"
        >
          {{ part.name }}
        </li>
      </ul>
      <div class="arrange-standard-line">
        <div>
          <div @click="arrange()" class="arrange-standard">
            <span>{{ activeArrange }}</span>
            <div
              class="dropdown-icon"
              :class="{ 'dropdown-active': isArrangeDropdown }"
            ></div>
          </div>
          <div class="arrange-dropdown-root"></div>
          <ul v-if="isArrangeDropdown" class="arrange-dropdown-list-wrapper">
            <li
              v-for="list in arrangeDropdownList"
              :key="list.id"
              @click="arrange(list)"
            >
              {{ list.order }}
            </li>
          </ul>
        </div>
      </div>
      <div class="store-list-container">
        <StoreList
          :storeList="list"
          v-for="list in storeLists"
          :key="list.id"
        />
      </div>
      <div class="more-pagination-container">
        <button class="more-btn">더보기</button>
      </div>
    </div>
  </main>
</template>

<script>
import StoreList from './StoreList';

export default {
  components: {
    StoreList
  },
  data() {
    return {
      classification: [
        {
          id: 0,
          name: '쇼핑몰 · 마켓'
        },
        {
          id: 1,
          name: '브랜드'
        },
        {
          id: 2,
          name: '뷰티'
        }
      ],
      arrangeDropdownList: [
        {
          id: 0,
          order: '추천순'
        },
        {
          id: 1,
          order: '인기순'
        },
        {
          id: 2,
          order: '최신순'
        }
      ],
      storeLists: [
        {
          id: 1,
          image:
            'https://image.brandi.me/seller/room302_profile_1522297392_S.jpg',
          seller_name: '302호',
          tag_first: '20대초반',
          tag_second: '심플베이직',
          tag_third: '마켓',
          like_amount: '43.4k'
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/seller/rhgodls24_profile_1580649925_S.jpg',
          seller_name: '로그인',
          tag_first: '20대초반',
          tag_second: '페미닌',
          tag_third: '쇼핑몰',
          like_amount: '9.6k'
        },
        {
          id: 3,
          image:
            'https://image.brandi.me/seller/withhuilin_profile_1544338235_S.jpg',
          seller_name: '위드후이린',
          tag_first: '20대초반',
          tag_second: '러블리',
          tag_third: '마켓',
          like_amount: '5.2k'
        },
        {
          id: 4,
          image:
            'https://image.brandi.me/seller/sora0406_profile_1515997878_S.jpeg',
          seller_name: '어썸',
          tag_first: '20대초반',
          tag_second: '심플베이직',
          tag_third: '마켓',
          like_amount: '266.7k'
        },
        {
          id: 5,
          image:
            'https://image.brandi.me/sellerTest/bress_profile_1599110981_S.jpg',
          seller_name: '브레스',
          tag_first: '10대',
          tag_second: '러블리',
          tag_third: '쇼핑몰',
          like_amount: '324'
        },
        {
          id: 6,
          image:
            'https://image.brandi.me/seller/spellonyou01_profile_1582273095_S.jpg',
          seller_name: '프렌치오브',
          tag_first: '20대초반',
          tag_second: '심플베이직',
          tag_third: '쇼핑몰',
          like_amount: '7.2k'
        }
      ],
      activeTab: 0,
      activeArrange: '추천순',
      isArrangeDropdown: false
    };
  },
  methods: {
    setActiveTab(idx) {
      this.activeTab = idx;
    },
    arrange(list) {
      this.isArrangeDropdown = !this.isArrangeDropdown;
      this.activeArrange = list.order;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.shop-frame {
  width: 100%;
  max-width: 1300px;
  padding: 0 30px;
  margin: 0 auto;

  .classification {
    display: flex;
    height: 60px;
    margin: 20px 0;

    .active-tab {
      border-bottom: 3px solid #ff204b;
    }

    li {
      display: inline-block;
      width: 33.33%;
      border-bottom: 1px solid #efefef;
      text-align: center;
      line-height: 60px;
    }
  }

  .arrange-standard-line {
    @include setFlex(flex-end, null, null);
    margin-bottom: 10px;

    .arrange-standard {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 130px;
      padding: 7px 10px;
      border: 1px solid #e1e1e1;
      line-height: 20px;
      font-size: 13px;

      .dropdown-icon {
        display: inline-block;
        @include setSize(16px, 16px);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: top 5px center;
      }

      .dropdown-active {
        display: inline-block;
        @include setSize(16px, 16px);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
        background-size: 70%;
        background-repeat: no-repeat;
        background-position: top 5px center;
        transform: scaleY(-1);
      }
    }

    .arrange-dropdown-root {
      position: relative;
    }

    .arrange-dropdown-list-wrapper {
      position: absolute;
      width: 130px;
      border: 1px solid #c5c5c5;
      border-top: 0px;
      border-radius: 0 0 3px 3px;
      font-size: 13px;
      background-color: #fff;

      li {
        padding: 8px 10px;
        border-bottom: 1px solid #c5c5c5;

        &:last-child {
          border-bottom: none;
        }

        &:hover {
          color: #ff204b;
        }
      }
    }
  }

  .store-list-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .more-pagination-container {
    padding: 20px 0;

    .more-btn {
      display: block;
      width: 250px;
      margin: 0 auto;
      padding: 10px 0;
      border: 1px solid #000;
      background-color: #fff;
      font-size: 14px;
      line-height: 20px;
      text-align: center;

      &:hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #000;
        transition-duration: 0.5s;
      }
    }
  }
}
</style>
