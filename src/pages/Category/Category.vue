<template>
  <div>
    <div class="category-set">
      <span
        >{{ specificationValue ? specificationValue : 'specificationValue' }}>
        <router-link
          :to="`/category/${this.$route.params.specification}/total/total`"
          >카테고리</router-link
        >>
        <router-link
          :to="
            `/category/${this.$route.params.specification}/${this.$route.params.title}/total`
          "
          >{{ titleValue ? titleValue : '전체' }}</router-link
        >
        <router-link
          :class="[titleValue ? '' : 'hidden']"
          :to="
            `/category/${this.$route.params.specification}/${this.$route.params.title}/${this.$route.params.id}`
          "
          >{{ idValue ? '>' + idValue : ' >전체' }}</router-link
        ></span
      >
    </div>
    <div class="Category">
      <div class="category-wrapper">
        <div class="category-option">
          <span>상품옵션</span>
        </div>
        <div @click="ChangeSaleCheckActive">
          <SaleCheckButton v-bind:saleCheckActive="saleCheckActive" />
        </div>

        <div class="categories">
          <div class="category-summary">
            <span>CATEGORIES</span>
          </div>
          <div @click="changeAllStatus">
            <router-link
              class="all-categories"
              :to="`/category/${$route.params.specification}/total/total`"
            >
              <span> 전체 </span>
            </router-link>
          </div>
          <div class="category-key-wrapper">
            <div class="category-key">
              <div
                class="category-title"
                :key="[Object.keys(MODAL)] + 'divtag'"
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
                    role="presentation"
                  >
                    <svg id="chevron-left" viewBox="0 0 8.3 14.1">
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
                      @click="reChangeAllStatus"
                      v-bind:class="[
                        $route.params.id == 'total' ? 'picked' : 'not-picked'
                      ]"
                      :to="
                        `/category/${$route.params.specification}/${MODAL['id']}/total`
                      "
                      >전체</router-link
                    >
                  </span>
                  <li
                    @click="reChangeAllStatus"
                    v-bind:class="[
                      $route.params.id == Item['id'] ? 'picked' : 'not-picked'
                    ]"
                    class="detail-key"
                    v-for="Item of MODAL[Object.keys(MODAL)[1]]"
                    :key="String(Item['name']) + 'likey'"
                  >
                    <router-link
                      :to="
                        `/category/${$route.params.specification}/${MODAL['id']}/${Item['id']}`
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
        <div class="dropdown-filter-container">
          <section class="dropdown-filter">
            <div class="picked-filter" @click="filterChange">
              <span>{{ filterValue }}</span>
              <svg
                v-bind:class="[
                  filterActive
                    ? 'reverse-direction transition'
                    : 'direction transition'
                ]"
                role="presentation"
              >
                <svg id="chevron-left" viewBox="0 0 8.3 14.1">
                  <polygon
                    class="st0"
                    points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
                  ></polygon>
                </svg>
              </svg>
            </div>
            <div :class="[filterActive ? 'filter-sample' : 'hidden']">
              <span
                v-for="value of filteringValue"
                :key="value.id + 'forkey'"
                :newkey="value.id"
                @click="filterValueChange"
              >
                {{ value.name }}
              </span>
            </div>
          </section>
        </div>
        <section class="product-section">
          <ProductCard
            :product="product"
            :key="product.id"
            v-for="product of productData"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard';
import SaleCheckButton from '../../components/Button/SaleCheckButton';
import { mapGetters } from 'vuex';
import axios from 'axios';
import URL from '../../../src/assets/mock/URL';

const serviceStore = 'serviceStore';

export default {
  name: 'Category',
  components: {
    ProductCard,
    SaleCheckButton
  },

  data() {
    return {
      filteredData: {},
      productData: [],

      filteringValue: [
        { id: 0, name: '판매량순' },
        { id: 1, name: '최신순' }
      ],
      filterValue: '판매량순',
      filterActive: false,
      saleCheckActive: false,
      promotion: 0,
      dropDownFilterValue: 0,
      allStatus: 0,
      titleValue: '',
      idValue: '',
      specificationValue: '',
      titleExtract: {}
    };
  },

  computed: {
    ...mapGetters(serviceStore, ['getCategories', 'getTitle']),
    categories() {
      return this.getCategories;
    },
    titles() {
      return this.getTitle;
    }
  },

  mounted() {
    let baseData = Object.entries(this.categories.category).map(el => el[1]);
    this.filteringAsideData(baseData);
    this.changeNavToKorean();
    window.scrollTo(0, 0);
  },

  created: function() {
    this.fetchData();
    // window.addEventListener('click', this.checkfunction);
  },
  updated() {
    this.changeNavToKorean();
  },
  methods: {
    // checkfunction() {
    //   console.log(
    //     this.$route.params.specification,
    //     this.$route.params.title,
    //     this.$route.params.id
    //   );
    // },
    changeNavToKorean() {
      let spec = this.$route.params.specification;
      let title = this.$route.params.title;
      let id = this.$route.params.id;

      if (spec === 'brand') {
        this.specificationValue = '브랜드';
      }
      if (spec === 'trend') {
        this.specificationValue = '쇼핑몰 · 마켓';
      }
      if (spec === 'beauty') {
        this.specificationValue = '뷰티';
      }

      for (const el of this.filteredData) {
        if (+el.id === +title) {
          this.titleValue = Object.keys(el)[1];
          this.titleExtract = el[this.titleValue];
        }
      }

      this.titleExtract.map(el => {
        if (Number(el['id']) === Number(id)) {
          this.idValue = el.name;
        }
      });
    },

    filteringAsideData(baseData) {
      for (let i = 0; i < baseData.length; i++) {
        let parsedData = baseData[i];
        let nameData = Object.keys(baseData[i])[1];

        if (parsedData['name'] === this.$route.params.specification) {
          let filteredData = parsedData[nameData];
          return (this.filteredData = filteredData.map(el =>
            el['id'] === Number(this.$route.params.title)
              ? { ...el, active: true }
              : { ...el, active: false }
          ));
        }
      }
    },

    fetchData() {
      let madeURL = this.makeFetchData();
      console.log('FILTERINGURL', madeURL);
      axios.get(madeURL).then(res => (this.productData = res.data.products));
    },

    makeFetchData() {
      let ChangeURL = `${URL.PRODUCT_URL}/api/products?`;
      if (
        this.$route.params.title != 'total' &&
        this.$route.params.title != undefined
      ) {
        ChangeURL =
          ChangeURL + '&' + `first_category_id=${this.$route.params.title}`;
      }
      if (this.$route.params.id != 'total') {
        ChangeURL =
          ChangeURL + '&' + `second_category_id=${this.$route.params.id}`;
      }
      if (this.promotion != 0) {
        ChangeURL = ChangeURL + '&' + `is_promotion=${this.promotion}`;
      }
      if (this.dropDownFilterValue != 0) {
        ChangeURL = ChangeURL + '&' + `select=${this.dropDownFilterValue}`;
      }
      if (
        this.titles.title['id'] != 0 &&
        this.allStatus === 1 &&
        this.titles.title['id'] != undefined
      ) {
        ChangeURL =
          ChangeURL +
          '&' +
          `main_category_id=${this.titles.title['id']}` +
          '&' +
          `all_items=${this.allStatus}`;
      }
      return (
        ChangeURL.slice(0, ChangeURL.indexOf('?') + 1) +
        ChangeURL.slice(ChangeURL.indexOf('?') + 2, ChangeURL.length)
      );
    },
    changeAllStatus() {
      this.allStatus = 1;
      this.fetchData();
    },
    reChangeAllStatus() {
      this.allStatus = 0;
      this.fetchData();
    },

    ChangeSaleCheckActive() {
      this.saleCheckActive = !this.saleCheckActive;
      this.promotion === 0 ? (this.promotion = 1) : (this.promotion = 0);
      console.log('PromoValue', this.promotion);
      this.fetchData();
    },

    filterValueChange(e) {
      this.filterValue = e.target.innerHTML;
      this.filterActive = !this.filterActive;
      this.dropDownFilterValue = e.target.attributes.newkey.value;
      console.log('selectValue', this.dropDownFilterValue);
      this.fetchData();
    },

    changeModalActive(event) {
      let filteredData = JSON.parse(JSON.stringify(this.filteredData));
      let checkEvent = event.target.attributes.newkey;
      if (checkEvent === undefined) {
        return;
      }
      this.filteredData = filteredData.map(el => {
        if (el.id === +checkEvent.value && el.active === false) {
          return { ...el, active: true };
        } else if (el.id != +checkEvent.value && el.active === true)
          return { ...el, active: false };
        else if (el.id === +checkEvent.value && el.active === true)
          return { ...el, active: false };
        return el;
      });
      return this.filteredData;
    },

    filterChange() {
      this.filterActive = !this.filterActive;
    }
  }
};
</script>

<style scoped lang="scss">
.all-categories {
  color: black;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &:hover {
    color: #ff204b;
  }
}
.dropdown-filter-container {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  .dropdown-filter {
    display: inline-block;
    position: relative;
    width: 130px;
    height: 45px;
    text-align: center;
    /* z-index: 100; */

    .picked-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25px;
      border: 1px solid #e7e7e7;
    }
    .filter-sample {
      position: absolute;
      width: 130px;
      height: 25px;
      span {
        display: block;
        width: 130px;
        height: 25px;
        border: 1px solid #e7e7e7;
        text-align: left;
        background-color: white;
        cursor: pointer;

        &:hover {
          color: #ff204b;
          border-bottom: 1px solid #ff204b;
          transition: all 0.3s ease-in;
        }
      }
    }
  }
}
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 3px;
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
  width: 8.3px;
  height: 14.1px;
  margin-right: 5px;
  transform: rotate(90deg);
}

.reverse-direction {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3px;
  height: 14.1px;
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

  span {
    display: block;
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
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 3%;
  .main-product {
    width: 25%;
  }
}
</style>
