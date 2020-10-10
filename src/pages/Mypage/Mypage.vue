<template>
  <div class="mypage-container">
    <MenuTab />
    <div v-if="showData">
      <OrderList
        :productInfo="orderList"
        v-for="orderList in myPageData"
        :key="orderList.orderNumber"
      ></OrderList>
    </div>
    <div class="txt-wrapper">
      <div class="no-data" v-if="noData">주문한 상품이 없습니다.</div>
    </div>
  </div>
</template>

<script>
import MenuTab from './MenuTab.vue';
import OrderList from './OrderList.vue';
import axios from 'axios';
import URL from '../../assets/mock/URL.js';

export default {
  name: 'Mypage',
  components: { OrderList, MenuTab },
  data() {
    return {
      myPageData: [],
      token: '',
      noData: false,
      showData: true
    };
  },

  created() {
    axios
      .get(`${URL.PRODUCT_URL}/api/order/item`, {
        headers: {
          Authorization: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        this.myPageData = res.data.data;
        // console.log('data', this.myPageData);
        this.noData = false;
        this.showData = true;
      })
      .catch(error => {
        if (error.response.status === 400) {
          this.noData = true;
          this.showData = false;
        }
      });
    // console.log(this.data);
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.txt-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 0px;

  .noData {
    text-align: center;
  }
}
</style>
