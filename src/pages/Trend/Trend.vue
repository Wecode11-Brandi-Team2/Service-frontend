<template>
  <div>
    <SlideProductCard />
    <div class="comment-wrapper">
      <span class="comment">Brandi Pick</span>
      <div class="more-button">
        <router-link
          class="more-button-comment"
          to="/category/brand/total/total"
          >더보기</router-link
        >
        <svg class="direction" viewBox="0 0 10px 10px" role="presentation">
          <svg id="chevron-left" viewBox="0 0 10px 10px">
            <polygon
              class="st0"
              points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
            ></polygon>
          </svg>
        </svg>
      </div>
    </div>
    <section class="product-section">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
    <div class="plus-button-wrapper">
      <ContentsPlusButton />
    </div>
  </div>
</template>

<script>
import ContentsPlusButton from '../Main/components/ContentsPlusButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import SlideProductCard from '../../components/ProductCard/SlideProductCard';

export default {
  name: 'Trend',
  props: {
    msg: String
  },

  components: {
    ProductCard,
    ContentsPlusButton,
    SlideProductCard
  }
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.comment-wrapper {
  padding: 40px 0px 20px 0px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 4%;
  .comment {
    font-size: 26px;
    font-weight: bold;
  }
  .more-button {
    float: right;

    display: flex;
    a {
      font-size: 18px;
      color: #4a4a4a;
      padding-right: 5px;
    }
    .direction {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8.3;
      height: 14.1;
      margin-right: 5px;
    }
  }
}

.product-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 3%;
}
</style>
