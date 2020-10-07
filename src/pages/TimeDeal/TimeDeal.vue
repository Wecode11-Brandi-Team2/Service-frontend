<template>
  <div>
    <section class="product-section">
      <div class="time-deal-title">
        <span>브랜디 특가</span>
      </div>
      <ProductCard
        :product="PRODUCT"
        :key="PRODUCT"
        v-for="PRODUCT in timeDealProduct"
      />
    </section>
  </div>
</template>
<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import URL from '../../../src/assets/mock/URL';

export default {
  name: 'TimeDeal',
  components: {
    ProductCard
  },
  created: function() {
    axios
      .get(
        `${URL.PRODUCT_URL}/api/products?main_category_id=4&is_promotion=1`,
        {}
      )
      .then(res => (this.timeDealProduct = res.data.products));
    window.addEventListener('click', this.checkfunction);
  },
  methods: {
    checkfunction() {
      console.log(this.timeDealProduct);
    }
  },
  data: function() {
    return {
      timeDealProduct: []
      // PRODUCT_SAMPLE: [
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {},
      //   {}
      // ]
    };
  }
};
</script>
<style scoped lang="scss">
.product-section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.time-deal-title {
  padding: 40px 0px 20px 0px;
  font-size: 26px;
  font-weight: 700;
  padding-left: 10px;
  width: 100%;
}
</style>
