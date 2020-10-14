<template>
  <div class="mypage-container">
    <MenuTab />
    <div v-if="showData">
      <!-- 배송 상품 정보-->
      <OrderList
        :productInfo="orderList"
        v-for="orderList in myPageData"
        :key="orderList.orderNumber"
      ></OrderList>
    </div>
    <!-- 주문한 상품이 없을 경우 -->
    <div class="txt-wrapper">
      <div class="no-data" v-if="noData">주문한 상품이 없습니다.</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import URL from '../../assets/mock/URL.js';
import MenuTab from './MenuTab.vue';
import OrderList from './OrderList.vue';

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
        this.noData = false;
        this.showData = true;
        console.log(res.data.data);
        this.showNoProduct(res.data.data);
      });
    // .catch(error => {
    //   if (error.response.status === 400) {
    //     this.noData = true;
    //     this.showData = false;
    //   }
    // });
  },
  methods: {
    showNoProduct(data) {
      if (data === undefined) {
        this.noData = true;
        this.showData = false;
      }
    }
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
