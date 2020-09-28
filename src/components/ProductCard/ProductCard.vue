<template>
  <div class="main-product">
    <router-link :to="`/detail/${product.id}`">
      <img alt="productImage" :src="product.image" />
    </router-link>
    <ul>
      <li>
        <span class="brand">{{ product.seller_name || '브랜디' }}</span>
      </li>
      <li>
        <a href="">
          <span class="productname">{{ product.name || 23232 }} </span>
        </a>
      </li>
      <li>
        <span :class="[product.discount_rate === 0 ? 'hidden' : 'discount']">
          {{ product.discount_rate || 2222 }}%</span
        >
        <span class="price"
          >{{ product.price.toLocaleString('en') || 2222 }}원</span
        >
        <span
          :class="[product.discount_rate === 0 ? 'hidden' : 'discountPrice']"
          >{{ product.discount_price.toLocaleString('en') || 2222 }}원</span
        >
      </li>
      <li>
        <span class="count"
          >{{ product.sales_amount.toLocaleString('en') || 2222 }}개 구매
          중</span
        >
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainProduct',
  props: ['product'],
  data() {
    return {};
  },
  created() {},

  method: {}
};
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}

a {
  text-decoration: none;
  color: black;
  &:active,
  :visited {
    color: black;
  }
}
.main-product {
  &:hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.05);
  }
  padding: 1%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-height: 254px;
    width: 100%;
  }
  ul {
    max-width: 235px;
    width: 100%;
  }
  li {
    .brand {
      font-size: 15px;
    }
    .productname {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
    .discount {
      font-size: 20px;
      font-weight: 600;
      color: #ff204b;
    }
    .price {
      font-size: 20px;
      font-weight: 600;
    }
    .discountPrice {
      color: #757575;
      font-size: 15px;
      text-decoration: line-through;
    }
    .count {
      font-size: 13px;
      color: #757575;
    }
    margin: 5px 0;
    span {
      margin: 0 5px;
    }
  }
}
</style>
