<template>
  <div class="search">
    <ul class="tab-wrapper">
      <li
        v-for="(menutab, idx) in menutabs"
        :key="menutab.id"
        class="search-menutab"
        :class="{ 'active-search-menutab': idx === activeTab }"
        @click="setActiveTab(idx)"
      >
        {{ menutab.name }}
      </li>
    </ul>
    <div v-if="activeTab === 0"><ProductTab /></div>
    <div v-else><StoreTab /></div>
  </div>
</template>

<script>
import ProductTab from './ProductTab';
import StoreTab from './StoreTab';

export default {
  data() {
    return {
      activeTab: 0,
      menutabs: [
        {
          id: 0,
          name: '상품'
        },
        {
          id: 1,
          name: '스토어'
        }
      ]
    };
  },
  components: {
    ProductTab,
    StoreTab
  },
  methods: {
    setActiveTab(idx) {
      this.activeTab = idx;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

* {
  box-sizing: border-box;
}

.search {
  margin: 0 106px;

  .tab-wrapper {
    display: flex;
    line-height: 60px;
    font-size: 15px;
    border-bottom: 1px solid #e1e1e1;
    overflow: hidden;

    .search-menutab {
      margin-top: 20px;
      border-bottom: 2px 2px solid #fff;
      color: black;
      width: 50%;
      text-align: center;
      cursor: pointer;
    }
    .active-search-menutab {
      margin-top: 20px;
      border-bottom: 2px solid #ff204b;
      color: black;
      width: 50%;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
