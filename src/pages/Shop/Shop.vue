<template>
  <main>
    <div class="shop-frame">
      <ul class="classification">
        <li
          :class="{ 'active-tab': part.id === activeTab }"
          @click="setActiveTab(part.id)"
          v-for="part in classification"
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
          v-for="(list, index) in storeLists"
          :key="list.id"
          :index="index"
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
import axios from 'axios';
import URL from '../../../src/assets/mock/URL';

export default {
  components: {
    StoreList
  },
  data() {
    return {
      classification: [
        {
          id: 4,
          name: '쇼핑몰 · 마켓'
        },
        {
          id: 5,
          name: '브랜드'
        },
        {
          id: 6,
          name: '뷰티'
        }
      ],
      arrangeDropdownList: [
        {
          id: 0,
          order: '최신순'
        },
        {
          id: 1,
          order: '판매량'
        }
      ],
      storeLists: [],
      activeTab: 4,
      activeArrange: '추천순',
      isArrangeDropdown: false,
      select: 0
    };
  },
  methods: {
    setActiveTab(idx) {
      this.activeTab = idx;
      this.doFetch();
    },
    checkfunction() {
      console.log(this.storeLists);
    },
    arrange(list) {
      this.isArrangeDropdown = !this.isArrangeDropdown;
      this.activeArrange = list.order;
      this.select = list.id;
      this.doFetch();
    },
    doFetch() {
      axios
        .get(
          `${URL.PRODUCT_URL}/api/products/seller?main_category_id=${this.activeTab}&select=${this.select}`,
          {}
        )
        .then(res => (this.storeLists = res.data));
      console.log('doFetch');
    }
  },

  created: function() {
    this.doFetch();
    window.addEventListener('click', this.checkfunction);
  },
  mounted() {
    console.log('HELLO', this.storeLists);
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
