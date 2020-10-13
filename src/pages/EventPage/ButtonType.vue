<template>
  <main class="ButtonType">
    <section
      :class="[
        this.buttonData.event_detail[0]['video_url'] === null ||
        this.buttonData.event_detail[0]['video_url'] === undefined
          ? 'hidden'
          : 'media-wrapper'
      ]"
    >
      <div class="youtube">
        <iframe
          width="1080"
          height="605"
          :src="this.buttonData.event_detail[0]['video_url']"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section
      :class="[
        this.buttonData.event_detail.detail_image === null ||
        this.buttonData.event_detail.detail_image === undefined
          ? 'hidden'
          : 'banner-image-container'
      ]"
    >
      <img
        alt="banner-image"
        :src="this.buttonData.event_detail.detail_image"
      />
    </section>
    <section class="text-title-wrapper">
      <span class="text-title">{{
        this.buttonData.event_detail[0]['detail_description']
      }}</span>
      <span class="text">{{
        this.buttonData.event_detail[0]['simple_description']
      }}</span>
    </section>
    <section class="classify-button-wrapper">
      <ClassifyButton
        :classifyNum="classifyNum"
        :filterBrand="filterBrand"
        :classify="classify"
        v-for="classify of buttonData.event_button"
        :key="classify.button_id"
      />
    </section>
    <section class="product-section">
      <ProductCard
        :class="[!product.active ? 'show' : 'hidden']"
        :product="product"
        :key="index"
        v-for="(product, index) of this.productData"
      />
    </section>
    <section
      :class="[buttonActive ? 'hidden' : 'button-wrapper']"
      @click="plusButtonActive"
    >
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
      ClassifyActive: false,
      FilterdData: [],
      classifyNum: 1,
      buttonData: [],
      productData: [],
      offset: 0,
      buttonActive: false
    };
  },
  created() {
    window.addEventListener('click', this.checkfucntion);
    this.fetchButton();
  },

  methods: {
    checkfucntion() {
      console.log('ButtonData', JSON.parse(JSON.stringify(this.buttonData)));
      console.log('ProductData', this.productData);
      console.log('makeclassify', this.buttonData);
      console.log(
        `http://10.251.1.134:5000/api/events/detail?id=${this.$route.params.getid}&limit=30&offset=0`
      );
    },

    fetchButton() {
      axios
        .get(
          `http://10.251.1.134:5000/api/events/detail?id=${this.$route.params.getid}`,
          {}
        )
        .then(res => {
          res.data === null || res.data === undefined
            ? (this.buttonData = [])
            : (this.buttonData = res.data);

          res.data['event_button'] === 0
            ? (this.classifyNum = 0)
            : (this.classifyNum = this.buttonData.event_button[0]['button_id']);
          this.filterBrand(this.classifyNum);
        });
    },

    fetchProduct() {
      axios
        .get(
          `http://10.251.1.134:5000/api/events/products?id=${this.$route.params.getid}&button_id=${this.classifyNum}&limit=30&offset=${this.offset}`,
          {}
        )
        .then(res => (this.productData = res.data['event_product']));

      console.log(
        `http://10.251.1.134:5000/api/events/products?id=${this.$route.params.getid}&button_id=${this.classifyNum}&limit=30&offset=${this.offset}`
      );
    },
    getMoreData() {
      axios
        .get(
          `http://10.251.1.134:5000/api/events/products?id=${this.$route.params.getid}&button_id=${this.classifyNum}&limit=30&offset=${this.offset}`,
          {}
        )
        .then(
          res =>
            (this.productData = this.productData.concat(
              res.data['event_product']
            ))
        );
      console.log(
        `http://10.251.1.134:5000/api/events/products?id=1&button_id=${this.classifyNum}&limit=30&offset=${this.offset}`
      );
    },
    plusButtonActive() {
      this.offset = this.offset + 10;
      if (this.offset >= 30) {
        this.offset = 0;
        return (this.buttonActive = true);
      } else if (this.offset < 30) {
        this.buttonActive = false;
      }
      this.getMoreData();
    },

    filterBrand(classify) {
      classify === undefined || classify === null
        ? (this.classifyNum = 0)
        : (this.classifyNum = classify);

      this.offset = 0;
      console.log(classify);
      this.fetchProduct();
      this.buttonActive = false;
    }
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
  margin-top: 60px;

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
