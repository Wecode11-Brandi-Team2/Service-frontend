<template>
  <div class="mypage-container">
    <MenuTab />
    <OrderList
      v-for="orderList in productInfo"
      :key="orderList.orderNumber"
      :productInfo="orderList"
    />
  </div>
</template>

<script>
import MenuTab from './MenuTab.vue';
import OrderList from './OrderList.vue';

export default {
  name: 'Mypage',
  components: { OrderList, MenuTab },
  data() {
    return {
      productInfo: [
        {
          date: '2020.09.23',
          orderNumber: 2020092300004000,
          company: '밀리',
          image:
            'https://image.brandi.me/cproduct/2020/04/28/15899675_1588044782_image1_L.jpg',
          productName: '윈드 아노락 세트',
          option: '아이보리',
          amount: 2,
          price: 59040,
          status: '배송중'
        },
        {
          date: '2020.10.23',
          orderNumber: 2020092300005500,
          company: '블리즈',
          image:
            'https://image.brandi.me/cproduct/2020/04/28/15899675_1588053187_image3_L.jpg',
          productName: '후드',
          option: '블랙',
          amount: 1,
          price: 29000,
          status: '배송완료'
        }
      ]
    };
  }
};
</script>
