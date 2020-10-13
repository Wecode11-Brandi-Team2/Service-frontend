<template>
  <main class="ButtonType">
    <section class="media-wrapper">
      <div class="youtube">
        <!--src data will get from api ex) `${state.video_src}` -->
        <iframe
          width="1080"
          height="605"
          src="https://www.youtube.com/embed/eZXxxQlLk9U"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="banner-image-container">
      <img
        alt="banner-image"
        src="https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg"
      />
    </section>
    <section class="text-title-wrapper">
      <span class="text-title">최대 70% 할인 진행 중최대 7</span>
      <span class="text">최대 70% 할인 진행 중최대 7</span>
    </section>
    <section class="classify-button-wrapper">
      <ClassifyButton
        :classifyNum="classifyNum"
        :filterBrand="filterBrand"
        :classify="classify"
        v-for="classify of ClassifyData"
        :key="classify.id"
      />
    </section>
    <section class="product-section">
      <ProductCard
        :class="[!product.active ? 'show' : 'hidden']"
        :product="product"
        :key="index"
        v-for="(product, index) of ButtonTypeProductData"
      />
    </section>
    <section class="button-wrapper">
      <ContentsPlusButton :ClassifyActive="ClassifyActive" />
    </section>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard/ProductCard';
import ContentsPlusButton from '../Main/components/ContentsPlusButton';
import ClassifyButton from '../../components/Button/ClassifyButton';
import axios from 'axios';

export default {
  name: 'ButtonType',
  components: { ProductCard, ContentsPlusButton, ClassifyButton },
  props: ['getid'],

  data() {
    return {
      ClassifyData: [
        {
          id: 1,
          name: '브레스'
        },
        {
          id: 2,
          name: '미쏘'
        }
      ],
      ButtonTypeProductData: [
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 2,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        },
        {
          id: 1,
          image:
            'https://image.brandi.me/eventTest/2020/10/05/1601876594_banner.jpg',
          seller_name: '브랜디',
          name: '옷옷옷옷',
          discount_rate: 10,
          price: 10000,
          sales_amount: 1000000
        }
      ],
      ClassifyActive: false,
      FilterdData: [],
      classifyNum: 1,
      EventDetailData: [
        {
          products: [{}, {}, {}],
          buttons: [{}, {}],
          youtube: [{}],
          MainImage: 'bdfasdfadfs'
        }
      ]
    };
  },
  created() {
    // this.doFetch();
    this.filterBrand(this.classifyNum);
    this.ButtonTypeProductData.map(el => ({ ...el, active: true }));
    this.fetchingById();
  },
  methods: {
    fetchingById() {
      // 10.251.1.134:5000/api/events/detail?id=1
      axios
        // .get(`http://10.251.1.134:5000/api/events/detail?id=${this.getid}`, {})
        .get(`http://10.251.1.134:5000/api/events/detail?id=1`, {})
        .then(res => console.log(res.data.data));
    },

    filterBrand(classify) {
      this.classifyNum = classify;
      console.log(classify);

      console.log(
        (this.ButtonTypeProductData = this.ButtonTypeProductData.map(el => {
          if (Number(el.id) === Number(this.classifyNum)) {
            el, (el.active = true);
          } else {
            el, (el.active = false);
          }
          return el;
        }))
      );
    }
    // doFetch() {
    //   axios
    //     .get(`${URL.PRODUCT_URL}/api/products/change_data`, {})
    //     .then(res => (this.aaa = res));
    // }
  }
};
</script>
<style scoped lang="scss">
.media-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .youtube {
    width: 1080px;
    height: 605px;
  }
}

.text-title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text-title {
    margin-bottom: 8px;
    font-size: 32px;
    font-weight: 600;
    color: #000;
  }
  .text {
    color: #acb3bd;
    margin-bottom: 28px;
    padding: 15px 0;
    font-size: 24px;
    font-weight: 400;
  }
}

.hidden {
  display: none;
}
.ButtonType {
  margin: 60px 0px;
}
.banner-image-container {
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;
  display: flex;
  justify-content: center;
  img {
    max-width: 1080px;
  }
}

.classify-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-section {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 30px auto;
  padding: 0 3%;
}
</style>
