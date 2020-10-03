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
          :key="PRODUCT"
          class="numbering-wrapper"
          v-for="(PRODUCT, index) in brandProduct['best_items'].slice(0, 5)"
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
          v-for="(PRODUCT, index) in brandProduct['best_items'].slice(0, 5)"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 아우터 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">아우터</span>
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
          v-for="(PRODUCT, index) in this.brandProduct['category_items'][0][
            'products'
          ]"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 상의 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">상의</span>
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
          v-for="(PRODUCT, index) in this.brandProduct['category_items'][1][
            'products'
          ]"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 원피스 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">원피스</span>
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
          v-for="(PRODUCT, index) in this.brandProduct['category_items'][2][
            'products'
          ]"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
      </section>
    </section>
    <!-- 스커트 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">스커트</span>
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
          v-for="(PRODUCT, index) in this.brandProduct['category_items'][3][
            'products'
          ]"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 신발 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">신발</span>
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
          v-for="(PRODUCT, index) in this.brandProduct['category_items'][4][
            'products'
          ]"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 가방 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">가방</span>
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
          v-for="(PRODUCT, index) in PRODUCT_SAMPLE.slice(0, 5)"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
        </div>
        <div class="line" />
      </section>
    </section>
    <!-- 잡화 -->
    <section class="recommend-seller">
      <div class="comment-wrapper">
        <span class="comment">잡화</span>
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
          v-for="(PRODUCT, index) in PRODUCT_SAMPLE.slice(0, 5)"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
          <ProductCard :product="PRODUCT" />
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
          v-for="(PRODUCT, index) in this.brandProduct['recommended_items']"
        >
          <!-- <span class="ranking-number">{{ index + 1 }}</span> -->
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

  //   {best_items: Array(10), brand_items: Array(5), category_items: Array(5), recommended_items: Array(25)}
  // best_items: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // brand_items: (5) [{…}, {…}, {…}, {…}, {…}]
  // category_items: (5) [{…}, {…}, {…}, {…}, {…}]
  // recommended_items: (25) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // __proto__: Object
  created: function() {
    axios
      .get('http://10.58.2.76:5000/api/products?main_category_id=5', {})
      // .then(res => console.log('HELELEO', res.data['best_items']));
      .then(res => (this.brandProduct = res.data));

    console.log('HGEDKDKD', this.brandProduct['best_items']);
    console.log('category', this.brandProduct['category_items']);
    // .then(res => console.log(res.data));

    document.addEventListener('click', this.CheckITem);
  },
  methods: {
    CheckITem() {
      console.log('category', this.brandProduct['category_items']);
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
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 3%;
}
</style>
