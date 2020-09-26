<template>
  <div>
    <div class="category-set">
      <span
        >{{ this.$route.params.specification }}>
        <router-link
          :to="`/category/${this.$route.params.specification}/total/total`"
          >카테고리</router-link
        >>
        <router-link
          :to="
            `/category/${this.$route.params.specification}/${this.$route.params.title}/total`
          "
          >{{ this.$route.params.title }}</router-link
        >>
        <router-link
          :to="
            `/category/${this.$route.params.specification}/${this.$route.params.title}/${this.$route.params.id}`
          "
          >{{ this.$route.params.id }}</router-link
        ></span
      >
    </div>
    <div class="Category">
      <div class="category-wrapper">
        <div class="category-option">
          <span>상품옵션</span>
        </div>
        <div class="options" @click="ChangeSaleCheckActive">
          <div
            v-bind:class="[
              saleCheckActive
                ? 'small-box transition'
                : 'changed-small-box transition'
            ]"
          ></div>
          <svg
            v-bind:class="[
              saleCheckActive ? 'checked transition' : 'not-checked transition'
            ]"
            viewBox="0 0 10px 10px"
            role="presentation"
          >
            <svg id="chevron-left" viewBox="0 0 10px 10px">
              <polygon
                class="st0"
                points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
              ></polygon>
            </svg>
          </svg>
          <span>세일</span>
        </div>

        <div class="categories">
          <div class="category-summary">
            <span>CATEGORIES</span>
          </div>
          <span class="all-categories"> 전체 </span>
          <div class="category-key-wrapper">
            <div class="category-key">
              <div
                class="category-title"
                :key="String(Object.keys(MODAL)[1]) + 'divtag'"
                v-for="MODAL in this.filteredData"
                @click="changeModalActive"
              >
                <div class="key-title" :newkey="MODAL[Object.keys(MODAL)[0]]">
                  {{ Object.keys(MODAL)[1] }}
                  <svg
                    v-bind:class="[
                      MODAL[Object.keys(MODAL)[2]]
                        ? 'reverse-direction transition'
                        : 'direction transition'
                    ]"
                    viewBox="0 0 10px 10px"
                    role="presentation"
                  >
                    <svg id="chevron-left" viewBox="0 0 10px 10px">
                      <polygon
                        class="st0"
                        points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
                      ></polygon>
                    </svg>
                  </svg>
                </div>
                <ul
                  v-bind:class="[
                    MODAL[Object.keys(MODAL)[2]]
                      ? 'modal-category transition'
                      : 'hidden transition'
                  ]"
                >
                  <span class="detail-key">
                    <router-link
                      :to="
                        `/category/${$route.params.specification}/${
                          Object.keys(MODAL)[1]
                        }/total`
                      "
                      >전체</router-link
                    >
                  </span>
                  <li
                    v-bind:class="[
                      $route.params.id == Item['id'] ? 'picked' : 'not-picked'
                    ]"
                    class="detail-key"
                    v-for="Item of MODAL[Object.keys(MODAL)[1]]"
                    :key="String(Item['id']) + 'likey'"
                  >
                    <router-link
                      :to="
                        `/category/${$route.params.specification}/${
                          Object.keys(MODAL)[1]
                        }/${Item['id']}`
                      "
                      >{{ Item['name'] }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-section-wrapper">
        <section class="product-section">
          <ProductCard
            :key="String(PRODUCT) + 'Product'"
            v-for="PRODUCT in PRODUCT_SAMPLE"
          />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
const serviceStore = 'serviceStore';

export default {
  name: 'Category',
  components: {
    ProductCard
  },
  data() {
    return {
      saleCheckActive: false,
      navCheckData: [],
      filteredData: {},
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
      ],
      modalActive: false
    };
  },

  computed: {
    ...mapGetters(serviceStore, ['getCategories']),
    categories() {
      return this.getCategories;
    }
  },

  mounted() {
    let baseData = Object.entries(this.categories.category).map(el => el[1]);

    this.filteringAsideData(baseData);
  },

  created: function() {
    this.updateTitle({
      title: this.$route.params.specification
    });
  },

  methods: {
    ...mapActions(serviceStore, ['updateTitle']),
    filteringAsideData(baseData) {
      for (let i = 0; i < baseData.length; i++) {
        let parsedData = JSON.parse(JSON.stringify(baseData[i]));
        let nameData = JSON.parse(JSON.stringify(Object.keys(baseData[i])[1]));

        if (parsedData['name'] === this.$route.params.specification) {
          let filteredData = parsedData[nameData];
          return (this.filteredData = filteredData.map(el =>
            Object.keys(el)[1] === this.$route.params.title
              ? { ...el, active: true }
              : { ...el, active: false }
          ));
        }
      }
    },

    changeModalActive(event) {
      let filteredData = JSON.parse(JSON.stringify(this.filteredData));

      this.filteredData = filteredData.map(el => {
        if (
          el.id === +event.target.attributes.newkey.value &&
          el.active === false
        ) {
          return { ...el, active: true };
        } else if (
          el.id != +event.target.attributes.newkey.value &&
          el.active === true
        )
          return { ...el, active: false };
        else if (
          el.id === +event.target.attributes.newkey.value &&
          el.active === true
        )
          return { ...el, active: false };
        return el;
      });
      return this.filteredData;
    },

    ChangeSaleCheckActive() {
      this.saleCheckActive = !this.saleCheckActive;
    }
  }
};
</script>

<style scoped lang="scss">
* {
  font-family: 'Spoqa Han Sans', Sans-serif;
}

.not-picked {
  background-color: white;
}

.picked {
  background-color: #f2f2f2;
  a {
    color: #ff204b;
  }
}

.small-box {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid black;
  background-color: #f2f2f2;
}

.changed-small-box {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid black;
}

.transition {
  transition: all 0.3s ease-in-out;
}

label {
  color: white;
}

.checked {
  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  margin-left: 5px;
  transform: rotate(90deg);
}

.not-checked {
  margin-top: 3px;

  margin-left: 5px;
  transform: matrix(0, 0, 0, 0, 0, 0) rotate(90deg);
}

.direction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  transform: rotate(90deg);
}

.reverse-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  transform: rotate(270deg);
}
.category-title {
  .key-title {
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    img {
      padding-right: 2%;
      height: 6px;
    }
    color: black;
    background-color: white;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ff204b;
      border-bottom: 1px solid #ff204b;
      transition: all 0.3s ease-in;
    }
  }
}

.product-section-wrapper {
  width: 80%;
}

.options {
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
  padding: 20px 0px 20px 10px;
  cursor: pointer;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.3;
    height: 14.1;
    margin-right: 20px;
  }
}

.all-categories {
  height: 60px;
  display: block;
  font-size: 16px;
  line-height: 60px;
}
.category-option {
  height: 60px;
  margin: 0px;
  padding: 0;

  span {
    color: #1e1e1e;
    font-size: 18px;
    font-weight: 600;
  }
}

.detail-key {
  height: 40px;
  margin: 3px 0;
  font-size: 14px;
  line-height: 39px;
  a {
    display: block;
    padding-left: 12px;
    color: #696969;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #ff204b;
    }
  }
}

.hidden {
  visibility: hidden;
  overflow: hidden;
  max-height: 0;
  max-width: 0;
}

.modal-category {
  visibility: visible;
}

.category-summary {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  line-height: 60px;
  span {
    height: 60px;
    margin: 0px;
    padding: 0;
    border-bottom: 1px solid #e7e7e7;
    color: #1e1e1e;
    font-size: 18px;
    font-weight: 600;
  }
}

.category-set {
  max-width: 1300px;
  padding: 30px 30px 60px 30px;
  margin: 0 auto;
  span {
    color: #b2b2b2;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: #b2b2b2;
    font-size: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #ff204b;
    }
  }
}
.category-wrapper {
  width: 20%;
  padding-right: 1%;
}
.Category {
  margin-top: 30px;
  max-width: 1300px;
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.product-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 3%;
  .main-product {
    width: 25%;
  }
}
</style>
