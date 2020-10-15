<template>
  <div v-on:mouseleave="cateogoryActiveReChange">
    <nav class="category-nav">
      <ul>
        <li
          v-on:mouseover="
            categoryActiveChange(String(Object.keys(CATEGORY)[1]))
          "
          :class="[CATEGORY['active'] ? 'modalActive' : 'modalShowing']"
          :key="String(CATEGORY['name'])"
          v-for="CATEGORY in categories.category"
        >
          <div
            :class="[
              $route.path.split('/')[1] === 'category'
                ? [
                    CATEGORY[Object.keys(CATEGORY)[3]] ===
                    $route.path.split('/')[2]
                      ? 'give-hover'
                      : 'no-hover'
                  ]
                : [
                    CATEGORY[Object.keys(CATEGORY)[3]] ===
                    $route.path.split('/')[1]
                      ? 'give-hover'
                      : 'no-hover'
                  ]
            ]"
          >
            <router-link
              :newkey="String(Object.keys(CATEGORY)[1])"
              :to="'/' + String(`${CATEGORY[Object.keys(CATEGORY)[3]]}`)"
              >{{ Object.keys(CATEGORY)[1] }}</router-link
            >
          </div>
        </li>
      </ul>
    </nav>
    <div
      v-bind:class="[cateogoryActive ? 'modal-category' : 'hidden']"
      v-on:mouseover="categoryActiveChange"
      v-on:mouseleave="cateogoryActiveReChange"
    >
      <ul>
        <li
          :key="String(Object.keys(MODAL)[1]) + 'li'"
          v-for="MODAL in this.showingData"
        >
          <router-link
            class="category-value"
            :to="`/category/${titleShowingData['name']}/${MODAL['id']}/total`"
          >
            <span @click="cateogoryActiveReChange">{{
              Object.keys(MODAL)[1]
            }}</span>
          </router-link>
          <router-link
            :to="
              `/category/${titleShowingData['name']}/${MODAL['id']}/${Item['id']}`
            "
            class="inner-key"
            :key="String(Item['id']) + 'atagKey'"
            v-for="Item of MODAL[Object.keys(MODAL)[1]]"
          >
            <span @click="cateogoryActiveReChange">{{ Item['name'] }}</span>
          </router-link>
        </li>
      </ul>

      <div
        v-bind:class="[cateogoryActive ? 'division-line' : 'hidden']"
        :key="String(line) + 'alpha'"
        v-for="line in lines"
        v-bind:style="{ left: (line - 0.5) * (100 / lines.length) + '%' }"
      ></div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import axios from 'axios';
import URL from '../../assets/mock/URL';
const serviceStore = 'serviceStore';

export default {
  name: 'CategoryNav',
  data() {
    return {
      titleShowingData: [],
      selected: '',
      mainCategoryData: [],
      cateogoryActive: false,
      navCheckData: '',
      showingData: '',
      getCategory: '',
      lines: [1, 2, 3, 4, 5, 6, 7],
      navData: []
    };
  },

  created: function() {
    this.fetchData();
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

  methods: {
    ...mapActions(serviceStore, ['updateCategories', 'updateTitle']),

    fetchData() {
      let GETURL = `${URL.PRODUCT_URL}/api/products/category`;
      axios.get(`${GETURL}`, {}).then(res => {
        this.navData = res.data;
        this.updateCategories({
          category: this.navData
            .map(el => ({ ...el, active: false }))
            .map(el => {
              if (Object.keys(el)[1] === '홈') {
                return { ...el, name: '' };
              } else if (Object.keys(el)[1] === '랭킹') {
                return { ...el, name: 'ranking' };
              } else if (Object.keys(el)[1] === '하루배송') {
                return { ...el, name: 'oneday' };
              } else if (Object.keys(el)[1] === '쇼핑몰 · 마켓') {
                return { ...el, name: 'trend' };
              } else if (Object.keys(el)[1] === '브랜드') {
                return { ...el, name: 'brand' };
              } else if (Object.keys(el)[1] === '뷰티') {
                return { ...el, name: 'beauty' };
              } else if (Object.keys(el)[1] === '특가') {
                return { ...el, name: 'timedeal' };
              } else if (Object.keys(el)[1] === '기획전') {
                return { ...el, name: 'event' };
              } else if (Object.keys(el)[1] === '스토어') {
                return { ...el, name: 'shop' };
              }
            })
        });
      });
    },
    categoryActiveChange(categoryData) {
      for (let i = 0; i < this.categories.category.length; i++) {
        if (this.categories.category[i][categoryData]) {
          this.titleShowingData = this.categories.category[i];
          this.showingData = this.categories.category[i][categoryData];
          this.updateTitle({ title: this.titleShowingData });
          this.cateogoryActive = true;
        }
      }
    },
    cateogoryActiveReChange() {
      this.cateogoryActive = false;
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../styles/common.scss';

.give-hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #ff204b;
  a {
    color: #ff204b;
  }

  &:hover {
    border-bottom: 3px solid #ff204b;
    a {
      color: #ff204b;
    }
    cursor: pointer;
  }
}

.no-hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid white;

  &:hover {
    border-bottom: 3px solid #ff204b;
    a {
      color: #ff204b;
    }
    cursor: pointer;
  }
}

.modalActive {
  text-align: center;
  width: calc(100% / 10);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-bottom: 3px solid #ff204b;
  a {
    color: #ff204b;
  }
  cursor: pointer;
}

.category-nav {
  min-width: 1300px;
  height: 60px;
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  z-index: 1000;

  ul {
    display: flex;
    max-width: 1300px;
    height: 100%;
    margin: 0px auto;

    .modalShowing {
      text-align: center;
      width: calc(100% / 10);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;

      a {
        padding: 19px;
      }
    }
  }
}

.modal-category {
  z-index: 100;
  visibility: visible;
  position: absolute;
  right: 0;
  left: 0;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.96);

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 7%;

    li {
      width: 16.6666%;
      margin-bottom: 5px;
      padding: 0 3.6%;
      line-height: 40px;
      transition: all 0.3s ease-in-out;

      .category-value {
        display: block;
        text-align: center;
        font-weight: 700;
        color: black;
        &:hover {
          color: #ff204b;
        }
      }

      .inner-key {
        display: block;
        height: 30px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        color: black;
        transition: all 0.5s ease-in-out;
        &:hover {
          color: #ff204b;
        }
      }
    }
  }
}
.division-line {
  visibility: visible;
  position: absolute;
  top: 0;
  width: 1px;
  height: 100%;
  background: #e1e1e1;
  z-index: 100;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}

.hidden {
  visibility: hidden;
  max-height: 0;
}
</style>
