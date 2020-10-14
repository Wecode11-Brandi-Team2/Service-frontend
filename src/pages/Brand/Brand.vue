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
        <svg class="direction" role="presentation">
          <svg id="chevron-left" viewBox="0 0 8.3 14.1">
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
        :key="PRODUCT.id + 'key'"
        class="numbering-wrapper"
        v-for="(PRODUCT, index) in brandProduct['best_items']"
      >
        <span class="ranking-number">{{ index + 1 }}</span>
        <ProductCard :product="PRODUCT" />
      </div>
      <div class="line" />
    </section>
    <!-- 신상단독특가 -->
    <section class="newitem-special-price">
      <div class="comment-wrapper">
        <span class="comment">포이어 신상 단독 특가!! 최대 30% ~</span>
      </div>
      <section class="product-section">
        <div
          :index="index"
          :key="PRODUCT.id + 'key'"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in brandProduct['best_items']"
        >
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
          <svg class="direction" role="presentation">
            <svg id="chevron-left" viewBox="0 0 8.3 14.1">
              <polygon
                class="st0"
                points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
              ></polygon>
            </svg>
          </svg>
        </div>
      </div>
      <!--베스트 상품 -->
      <section class="product-section">
        <div
          :index="index"
          :key="PRODUCT.id + 'forkey'"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in brandProduct['best_items']"
        >
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!--카테고리별 아이템 -->
    <section
      class="recommend-seller"
      :key="PRODUCT.id + 'lala' + index"
      v-for="(PRODUCT, index) in this.brandProduct['category_items']"
    >
      <div class="comment-wrapper">
        <span class="comment">{{ PRODUCT['category_name'] }}</span>
        <div class="more-button">
          <router-link
            class="more-button-comment"
            :to="`/category/brand/${PRODUCT['category_id']}/total`"
            >더보기</router-link
          >
          <svg class="direction" role="presentation">
            <svg id="chevron-left" viewBox="0 0 8.3 14.1">
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
          :key="Data.id + 'key' + index"
          class="numbering-wrapper"
          v-for="(Data, index) in PRODUCT['product']"
        >
          <ProductCard :product="Data" />
        </div>
        <div class="line" />
      </section>
    </section>

    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">추천상품</span>
        <div class="more-button">
          <router-link
            class="more-button-comment"
            to="/category/brand/total/total"
            >더보기</router-link
          >
          <svg class="direction" role="presentation">
            <svg id="chevron-left" viewBox="0 0 8.3 14.1">
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
          :key="PRODUCT.id + 'keyuse' + index"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in this.brandProduct['recommended_items']"
        >
          <ProductCard :product="PRODUCT" />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import SlideProductCard from '../../components/ProductCard/SlideProductCard';
import axios from 'axios';
import URL from '../../../src/assets/mock/URL';

export default {
  name: 'Brand',
  props: {
    msg: String
  },

  data() {
    return {
      brandProduct: [],
      PRODUCT_SAMPLE: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },

  created: function() {
    axios
      .get(`${URL.PRODUCT_URL}/api/products?main_category_id=5`, {})
      .then(res => (this.brandProduct = res.data));

    console.log('HGEDKDKD', this.brandProduct['best_items']);
    console.log('category', this.brandProduct['category_items']);

    document.addEventListener('click', this.CheckITem);
  },
  methods: {
    CheckITem() {
      console.log('category', URL.PRODUCT_URL, URL.LOGIN_URL);
    }
  },
  components: {
    ProductCard,
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
    width: 30px;
    height: 30px;
    margin-left: 2px;
    margin-top: 2px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
    font-size: 1.2em;
    background-color: black;
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
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 4%;

  .comment {
    font-size: 26px;
    font-weight: bold;
  }
  .more-button {
    display: flex;
    float: right;

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
