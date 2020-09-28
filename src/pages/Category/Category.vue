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
                        `/category/${$route.params.specification}/${MODAL['id']}/total`
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
            <div :class="[filterActive ? 'filter-sample' : 'hidden']">
              <span
                v-for="value of filteringValue"
                :key="value.name"
                :newkey="value.id"
                @click="filterValueChange"
              >
                {{ value.name }}
              </span>
            </div>
            <!-- <div :class="[filterActive ? 'filter-sample' : 'hidden']">
              <span @click="filterValueChange">판매량순</span>
              <span @click="filterValueChange">최신순</span>
            </div> -->
          </section>
          <!-- <select name="sltSample" size="1">
            <option value="1"
              ><span @click="changePromoOption">판매량순</span></option
            >
            <option value="2">최신순</option>
          </select> -->
        </div>
        <section class="product-section">
          <ProductCard
            :product="product"
            :key="product"
            v-for="product of productData"
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
import axios from 'axios';

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
      productData: [],
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
      // ],
      modalActive: false,
      promotion: 0,
      filteringValue: [
        { id: 0, name: '판매량순' },
        { id: 1, name: '최신순' }
      ],
      filterValue: '판매량순',
      filterActive: false,
      dropDownFilterValue: 0
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
    // URL2 is test case
    // let first =
    //   this.$route.params.title != 'total'
    //     ? `'first_category_id='${this.$route.params.title}`
    //     : null;
    // let second =
    //   this.$route.params.id != 0
    //     ? `&second_category_id=${this.$route.params.id}`
    //     : 0;
    // let main =
    //   this.$route.params.id != 0
    //     ? `&main_category_id=${this.$route.params.specification}`
    //     : 0;
    // let promo = `&is_promotion=${this.promotion}`;
    // let URL2 = `http://10.58.2.0:5000/api/products?${first}${second}${main}${promo}`;
    // URL2 is test case

    let URL = `http://10.58.2.0:5000/api/products?first_category_id=${this.$route.params.title}&second_category_id=${this.$route.params.id}&main_category_id=4&is_promotion=${this.promotion}`;
    axios.get(URL).then(res => (this.productData = res.data.products));
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
            el['id'] === Number(this.$route.params.title)
              ? { ...el, active: true }
              : { ...el, active: false }
          ));
        }
      }
    },
    fetchData() {
      let URL = `http://10.251.1.153:5000/api/products?first_category_id=${this.$route.params.title}&second_category_id=${this.$route.params.id}&main_category_id=4&is_promotion=${this.promotion}`;
      axios.get(URL).then(res => (this.productData = res.data.products));
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
    },
    changePromoOption(e) {
      console.log('????', e.target.childNodes);
      this.promotion === 0 ? (this.promotion = 1) : (this.promotion = 0);
      console.log('HElo', this.promotion);
      this.fetchData();
    },

    filterChange() {
      this.filterActive = !this.filterActive;
    },

    filterValueChange(e) {
      this.filterValue = e.target.innerHTML;
      this.filterActive = !this.filterActive;
      this.dropDownFilterValue = e.target.attributes.newkey.value;
      console.log(this.dropDownFilterValue);
      // if (this.filterValue === '판매량순') {
      //   this.dropDownFilterValue = 0;
      // } else if (this.filterValue === '최신순') {
      //   this.dropDownFilterValue = 1;
      // }
      this.fetchData();
    }
  }
};
</script>

<style scoped lang="scss">
.dropdown-filter-container {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  .dropdown-filter {
    width: 130px;
    height: 45px;
    display: inline-block;
    position: relative;
    text-align: center;
    .picked-filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e7e7e7;
      height: 25px;
    }
    .filter-sample {
      position: absolute;
      width: 130px;
      height: 25px;
      span {
        display: block;
        border: 1px solid #e7e7e7;
        width: 130px;
        height: 25px;
        text-align: left;
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
