<template>
  <div class="mypage-container">
    <MenuTab />
    <OrderList
      :productInfo="orderList"
      v-for="orderList in myPageData"
      :key="orderList.orderNumber"
    ></OrderList>
  </div>
</template>

<script>
import MenuTab from './MenuTab.vue';
import OrderList from './OrderList.vue';
import axios from 'axios';

export default {
  name: 'Mypage',
  components: { OrderList, MenuTab },
  data() {
    return {
      myPageData: [],
      token: ''
    };
  },
  created() {
    axios
      .get('http://10.251.1.113:5000/api/order/item', {
        headers: {
          Authorization: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        // console.log('res', res);
        this.myPageData = res.data.data;
        // console.log('너냐', this.myPageData);
      });

    console.log(this.data);

    // document.addEventListener('click', this.checkfucntion);
  }

  // methods: {
  //   checkfucntion() {
  //     console.log(this.data);
  //   }
  // }
};
</script>
