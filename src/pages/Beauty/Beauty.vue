<template>
  <div>
    <SlideProductCard />
    <div class="comment-wrapper">
      <span class="comment">베스트</span>
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
      <div
        :index="index"
        :key="PRODUCT"
        class="numbering-wrapper"
        v-for="(PRODUCT, index) in beautyProduct['best_items']"
      >
        <span class="ranking-number">{{ index + 1 }}</span>
        <ProductCard :product="PRODUCT" />
      </div>
      <div class="line" />
    </section>
    <!-- JMW 특가 -->
    <section class="newitem-special-price">
      <div class="comment-wrapper">
        <span class="comment">JMW 특가&증정 최대 62% 할인</span>
      </div>
      <section class="product-section">
        <div
          :index="index"
          :key="PRODUCT"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in beautyProduct['brand_items']"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>

    <!-- 추천스토어 -->

    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">추천스토어</span>
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
        <div
          :index="index"
          :key="PRODUCT"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in beautyProduct['brand_items']"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>

    <section
      class="recommend-seller"
      :key="PRODUCT + 'lala' + index"
      v-for="(PRODUCT, index) in beautyProduct['category_items']"
    >
      <div class="comment-wrapper">
        <span class="comment">{{ PRODUCT['category_name'] }}</span>
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
        <div
          :index="index"
          :key="Data"
          class="numbering-wrapper"
          v-for="(Data, index) in PRODUCT['product']"
        >
          <ProductCard :product="Data" />
        </div>
        <div class="line" />
      </section>
    </section>

    <!--추천상품-->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">추천상품</span>
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
        <div
          :index="index"
          :key="PRODUCT"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in beautyProduct['recommended_items']"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
      </section>
    </section>

    <!-- <div class="plus-button-wrapper">
      <ContentsPlusButton />
    </div> -->
  </div>
</template>

<script>
// import ContentsPlusButton from '../Main/components/ContentsPlusButton';
import ProductCard from '../../components/ProductCard/ProductCard';
import SlideProductCard from '../../components/ProductCard/SlideProductCard';
import axios from 'axios';
import URL from '../../../src/assets/mock/URL';

export default {
  name: 'Beauty',
  props: {
    msg: String
  },
  data() {
    return {
      beautyProduct: [],
      PRODUCT_SAMPLE: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  created: function() {
    axios
      .get(`${URL.PRODUCT_URL}/api/products?main_category_id=6`, {})
      .then(res => (this.beautyProduct = res.data));
    // .then(res => console.log(res.data));

    document.addEventListener('click', this.CheckITem);
  },
  methods: {
    CheckITem() {
      console.log('category', this.beautyProduct['category_items']);
    }
  },
  components: {
    ProductCard,
    // ContentsPlusButton,
    SlideProductCard
  }
};
</script>
<style scoped lang="scss">
.line {
  height: 1px;
  width: 100%;
  max-width: 1300px;
  margin: 50px 1% 50px 1%;
  padding: 0 4%;
  background-color: #dfdfdf;
}

a {
  text-decoration: none;
}

.numbering-wrapper {
  padding: 1%;
  width: 20%;
  &:hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.05);
  }
  .ranking-number {
    position: absolute;
    margin-left: 2px;
    margin-top: 2px;
    text-align: center;
    font-size: 1.2em;
    background-color: black;
    color: white;
    width: 30px;
    height: 30px;
    color: #ffffff;
    text-align: center;
    line-height: 34px;
  }
  .main-product {
    width: 100%;
    height: 100%;
    &:hover {
      transition: none;
      transform: none;
    }
  }
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
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 3%;
}
</style>
