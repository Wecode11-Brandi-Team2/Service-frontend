<template>
  <div>
    <section class="product-section">
      <div class="time-deal-title">
        <span>브랜디 특가</span>
      </div>
      <ProductCard :key="PRODUCT" v-for="PRODUCT in PRODUCT_SAMPLE" />
    </section>
  </div>
</template>
<script>
import ProductCard from '../../components/ProductCard/ProductCard';
export default {
  name: 'TimeDeal',
  components: {
    ProductCard
  },
  data: function() {
    return {
      PRODUCT_SAMPLE: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ]
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
