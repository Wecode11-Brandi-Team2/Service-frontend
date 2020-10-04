<template>
  <div class="Ranking">
    <div class="category-set">
      <span
        >{{ this.$route.params.specification }}>
        <router-link
          :to="`/ranking/${this.$route.params.specification}/total/total`"
          >랭킹</router-link
        >>
        <router-link
          :to="
            `/ranking/${this.$route.params.specification}/${this.$route.params.title}/total`
          "
          >{{ this.$route.params.title }}</router-link
        >>
        <router-link
          :to="
            `/ranking/${this.$route.params.specification}/${this.$route.params.title}/${this.$route.params.id}`
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
        <div>
          <SaleCheckButton v-bind:saleCheckActive="saleCheckActive" />
        </div>

        <div class="categories">
          <div class="category-summary">
            <span>Ranking</span>
          </div>
          <div>
            <router-link
              class="all-categories"
              :to="`/ranking/total/total/total`"
            >
              <span> 전체 </span>
            </router-link>
          </div>
          <div class="category-key-wrapper">
            <div class="category-key">
              <div
                class="category-title"
                :key="String(Object.keys(MODAL)[1]) + 'divtag'"
                v-for="MODAL in this.navData"
              >
                <div
                  :newkey="Object.keys(MODAL)[1]"
                  class="key-title"
                  @click="changeCategory"
                >
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
                    MODAL['active']
                      ? 'modal-category transition'
                      : 'hidden transition'
                  ]"
                >
                  <span class="detail-key">
                    <router-link :to="`/ranking`">전체</router-link>
                  </span>
                  <li
                    v-bind:class="[
                      $route.params.title == Item['id']
                        ? 'picked'
                        : 'not-picked'
                    ]"
                    class="detail-key"
                    v-for="Item of MODAL[Object.keys(MODAL)[1]]"
                    :key="String(Item['id']) + 'likey'"
                  >
                    <router-link
                      :to="`/ranking/${MODAL['id']}/${Item['id']}/total`"
                      >{{ Object.keys(Item)[1] }}</router-link
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
            <div class="picked-filter">
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
              >
                {{ value.name }}
              </span>
            </div>
          </section>
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
import SaleCheckButton from '../../components/Button/SaleCheckButton';
import axios from 'axios';
// import URL from '../../../src/assets/mock/URL';

export default {
  name: 'Ranking',
  components: {
    ProductCard,
    SaleCheckButton
  },
  data() {
    return {
      navCheckData: [],
      filteredData: {},
      productData: [],
      modalActive: false,
      navData: [
        {
          id: 1,
          홈: []
        },
        {
          id: 2,
          랭킹: []
        },
        {
          id: 3,
          하루배송: []
        },
        {
          id: 4,
          '쇼핑몰 · 마켓': [
            {
              id: 1,
              아우터: [
                {
                  id: 1,
                  name: '자켓'
                },
                {
                  id: 2,
                  name: '가디건'
                },
                {
                  id: 3,
                  name: '코트'
                },
                {
                  id: 4,
                  name: '점퍼'
                },
                {
                  id: 5,
                  name: '패딩'
                },
                {
                  id: 6,
                  name: '무스탕/퍼'
                },
                {
                  id: 7,
                  name: '기타'
                }
              ]
            },
            {
              id: 2,
              상의: [
                {
                  id: 8,
                  name: '티셔츠'
                },
                {
                  id: 9,
                  name: '셔츠/블라우스'
                },
                {
                  id: 10,
                  name: '니트'
                },
                {
                  id: 11,
                  name: '후드/맨투맨'
                },
                {
                  id: 12,
                  name: '베스트'
                }
              ]
            },
            {
              id: 3,
              바지: [
                {
                  id: 13,
                  name: '청바지'
                },
                {
                  id: 14,
                  name: '슬랙스'
                },
                {
                  id: 15,
                  name: '면바지'
                },
                {
                  id: 16,
                  name: '반바지'
                },
                {
                  id: 17,
                  name: '트레이닝/조거'
                },
                {
                  id: 18,
                  name: '레깅스'
                }
              ]
            },
            {
              id: 4,
              원피스: [
                {
                  id: 19,
                  name: '미니'
                },
                {
                  id: 20,
                  name: '미디'
                },
                {
                  id: 21,
                  name: '롱'
                },
                {
                  id: 22,
                  name: '투피스'
                },
                {
                  id: 23,
                  name: '점프수트'
                }
              ]
            },
            {
              id: 5,
              스커트: [
                {
                  id: 24,
                  name: '미니'
                },
                {
                  id: 25,
                  name: '미디'
                },
                {
                  id: 26,
                  name: '롱'
                }
              ]
            },
            {
              id: 6,
              신발: [
                {
                  id: 27,
                  name: '플랫/로퍼'
                },
                {
                  id: 28,
                  name: '샌들/슬리퍼'
                },
                {
                  id: 29,
                  name: '힐'
                },
                {
                  id: 30,
                  name: '스니커즈'
                },
                {
                  id: 31,
                  name: '부츠/워커'
                }
              ]
            },
            {
              id: 7,
              가방: [
                {
                  id: 32,
                  name: '크로스백'
                },
                {
                  id: 33,
                  name: '토트백'
                },
                {
                  id: 34,
                  name: '숄더백'
                },
                {
                  id: 35,
                  name: '에코백'
                },
                {
                  id: 36,
                  name: '클러치'
                },
                {
                  id: 37,
                  name: '백팩'
                }
              ]
            },
            {
              id: 8,
              주얼리: [
                {
                  id: 38,
                  name: '귀걸이'
                },
                {
                  id: 39,
                  name: '목걸이'
                },
                {
                  id: 40,
                  name: '팔찌/발찌'
                },
                {
                  id: 41,
                  name: '반지'
                }
              ]
            },
            {
              id: 9,
              잡화: [
                {
                  id: 42,
                  name: '휴대폰 acc'
                },
                {
                  id: 43,
                  name: '헤어 acc'
                },
                {
                  id: 44,
                  name: '양말/스타킹'
                },
                {
                  id: 45,
                  name: '지갑/파우치'
                },
                {
                  id: 46,
                  name: '모자'
                },
                {
                  id: 47,
                  name: '벨트'
                },
                {
                  id: 48,
                  name: '시계'
                },
                {
                  id: 49,
                  name: '스카프/머플러'
                },
                {
                  id: 50,
                  name: '아이웨어'
                },
                {
                  id: 51,
                  name: '기타'
                }
              ]
            },
            {
              id: 10,
              라이프웨어: [
                {
                  id: 52,
                  name: '언더웨어'
                },
                {
                  id: 53,
                  name: '홈웨어'
                },
                {
                  id: 54,
                  name: '스윔웨어'
                },
                {
                  id: 55,
                  name: '비치웨어'
                },
                {
                  id: 56,
                  name: '기타'
                }
              ]
            },
            {
              id: 11,
              빅사이즈: [
                {
                  id: 57,
                  name: '아우터'
                },
                {
                  id: 58,
                  name: '상의'
                },
                {
                  id: 59,
                  name: '바지'
                },
                {
                  id: 60,
                  name: '원피스'
                },
                {
                  id: 61,
                  name: '스커트'
                }
              ]
            }
          ]
        },
        {
          id: 5,
          브랜드: [
            {
              id: 12,
              아우터: [
                {
                  id: 62,
                  name: '코트'
                },
                {
                  id: 63,
                  name: '점퍼'
                },
                {
                  id: 64,
                  name: '자켓'
                },
                {
                  id: 65,
                  name: '가디건'
                },
                {
                  id: 66,
                  name: '기타'
                }
              ]
            },
            {
              id: 13,
              상의: [
                {
                  id: 67,
                  name: '티/반팔티'
                },
                {
                  id: 68,
                  name: '민소매/나시'
                },
                {
                  id: 69,
                  name: '셔츠/블라우스'
                },
                {
                  id: 70,
                  name: '니트'
                },
                {
                  id: 71,
                  name: '맨투맨'
                },
                {
                  id: 72,
                  name: '후드/집업'
                },
                {
                  id: 73,
                  name: '기타'
                }
              ]
            },
            {
              id: 14,
              바지: [
                {
                  id: 74,
                  name: '청바지'
                },
                {
                  id: 75,
                  name: '면바지'
                },
                {
                  id: 76,
                  name: '슬랙스'
                },
                {
                  id: 77,
                  name: '반바지'
                },
                {
                  id: 78,
                  name: '트레이닝/조거'
                },
                {
                  id: 79,
                  name: '기타'
                }
              ]
            },
            {
              id: 15,
              원피스: [
                {
                  id: 80,
                  name: '미니'
                },
                {
                  id: 81,
                  name: '미디'
                },
                {
                  id: 82,
                  name: '롱'
                },
                {
                  id: 83,
                  name: '점프수트'
                },
                {
                  id: 84,
                  name: '기타'
                }
              ]
            },
            {
              id: 16,
              스커트: [
                {
                  id: 85,
                  name: '미니'
                },
                {
                  id: 86,
                  name: '미디'
                },
                {
                  id: 87,
                  name: '롱'
                },
                {
                  id: 88,
                  name: '기타'
                }
              ]
            },
            {
              id: 17,
              신발: [
                {
                  id: 89,
                  name: '스니커즈'
                },
                {
                  id: 90,
                  name: '러닝화'
                },
                {
                  id: 91,
                  name: '플랫/로퍼'
                },
                {
                  id: 92,
                  name: '펌프스'
                },
                {
                  id: 93,
                  name: '부츠'
                },
                {
                  id: 94,
                  name: '샌들/슬리퍼'
                },
                {
                  id: 95,
                  name: '기타'
                }
              ]
            },
            {
              id: 18,
              가방: [
                {
                  id: 96,
                  name: '숄더백'
                },
                {
                  id: 97,
                  name: '토트백'
                },
                {
                  id: 98,
                  name: '에코백'
                },
                {
                  id: 99,
                  name: '백팩'
                },
                {
                  id: 100,
                  name: '지갑/파우치'
                },
                {
                  id: 101,
                  name: '클러치'
                },
                {
                  id: 102,
                  name: '기타'
                }
              ]
            },
            {
              id: 19,
              주얼리: [
                {
                  id: 103,
                  name: '귀걸이'
                },
                {
                  id: 104,
                  name: '목걸이'
                },
                {
                  id: 105,
                  name: '반지'
                },
                {
                  id: 106,
                  name: '팔찌/발찌'
                }
              ]
            },
            {
              id: 20,
              잡화: [
                {
                  id: 107,
                  name: '시계'
                },
                {
                  id: 108,
                  name: '스카프/머플러'
                },
                {
                  id: 109,
                  name: '모자'
                },
                {
                  id: 110,
                  name: '양말'
                },
                {
                  id: 111,
                  name: '폰 악세서리'
                },
                {
                  id: 112,
                  name: '선글라스/아이웨어'
                },
                {
                  id: 113,
                  name: '기타'
                }
              ]
            },
            {
              id: 21,
              라이프웨어: [
                {
                  id: 114,
                  name: '언더웨어'
                },
                {
                  id: 115,
                  name: '홈웨어'
                }
              ]
            },
            {
              id: 22,
              스포츠웨어: [
                {
                  id: 116,
                  name: '상의'
                },
                {
                  id: 117,
                  name: '하의'
                },
                {
                  id: 118,
                  name: '레깅스'
                },
                {
                  id: 119,
                  name: '스윔웨어'
                },
                {
                  id: 120,
                  name: '기타'
                }
              ]
            }
          ]
        },
        {
          id: 6,
          뷰티: [
            {
              id: 23,
              스킨케어: [
                {
                  id: 121,
                  name: '스킨/토너'
                },
                {
                  id: 122,
                  name: '에센스/앰플'
                },
                {
                  id: 123,
                  name: '크림'
                },
                {
                  id: 124,
                  name: '클렌징'
                },
                {
                  id: 125,
                  name: '기타'
                }
              ]
            },
            {
              id: 24,
              메이크업: [
                {
                  id: 126,
                  name: '베이스'
                },
                {
                  id: 127,
                  name: '립'
                },
                {
                  id: 128,
                  name: '아이'
                }
              ]
            },
            {
              id: 25,
              바디케어: [
                {
                  id: 129,
                  name: '로션/크림'
                },
                {
                  id: 130,
                  name: '워시/스크럽'
                }
              ]
            },
            {
              id: 26,
              헤어케어: [
                {
                  id: 131,
                  name: '샴푸/린스'
                },
                {
                  id: 132,
                  name: '트리트먼트'
                },
                {
                  id: 133,
                  name: '스타일링/에센스'
                }
              ]
            },
            {
              id: 27,
              향수: [
                {
                  id: 134,
                  name: '향수'
                },
                {
                  id: 135,
                  name: '디퓨저/방향제'
                }
              ]
            },
            {
              id: 28,
              미용소품: [
                {
                  id: 136,
                  name: '뷰티툴'
                },
                {
                  id: 137,
                  name: '네일'
                },
                {
                  id: 138,
                  name: '기타'
                }
              ]
            }
          ]
        },
        {
          id: 7,
          특가: []
        },
        {
          id: 8,
          기획전: []
        },
        {
          id: 9,
          스토어: []
        }
      ],
      filteringValue: [
        { id: 0, name: '판매량순' },
        { id: 1, name: '최신순' }
      ],
      filterValue: '판매량순',
      filterActive: false,
      saleCheckActive: false,
      promotion: 0,
      dropDownFilterValue: 0,
      allStatus: 0
    };
  },
  created() {
    // axios.get(madeURL).then(res => (this.productData = res.data.products));
    axios
      .get('http://10.58.2.245:5000/api/products')
      .then(res => (this.productData = res.data.products));
    // this.fetchData();
  },
  computed: {},

  mounted() {
    console.log(this.$route.params.specification);
    this.navData = this.navData.filter(el => el[Object.keys(el)[1]].length > 0);
    this.navData = this.navData.map(el => ({ ...el, active: false }));
    this.navData = this.navData.map(el => {
      if (el.id === Number(this.$route.params.specification)) {
        return { ...el, active: true };
      } else {
        return { ...el, active: false };
      }
    });
    console.log(this.navData);
  },

  methods: {
    // fetchData() {
    //   let madeURL = this.makeFetchData();
    //   console.log('FILTERINGURL', madeURL);
    //   axios.get(madeURL).then(res => (this.productData = res.data.products));
    // },

    // makeFetchData() {
    //   let URL = `http://10.58.2.245:5000/api/products?`;
    //   if (this.$route.params.title != 'total') {
    //     URL = URL + '&' + `first_category_id=${this.$route.params.title}`;
    //   }
    //   if (this.$route.params.id != 'total') {
    //     URL = URL + '&' + `second_category_id=${this.$route.params.id}`;
    //   }
    //   if (this.promotion != 0) {
    //     URL = URL + '&' + `is_promotion=${this.promotion}`;
    //   }
    //   if (this.dropDownFilterValue != 0) {
    //     URL = URL + '&' + `select=${this.dropDownFilterValue}`;
    //   }
    //   if (this.titles.title['id'] != 0 && this.allStatus === 1) {
    //     URL =
    //       URL +
    //       '&' +
    //       `main_category_id=${this.titles.title['id']}` +
    //       '&' +
    //       `all_items=${this.allStatus}`;
    //   }
    //   return (
    //     URL.slice(0, URL.indexOf('?') + 1) +
    //     URL.slice(URL.indexOf('?') + 2, URL.length)
    //   );
    // },

    changeCategory(event) {
      console.log('hello', name);
      let checkEvent = event.target.attributes.newkey;

      if (checkEvent === undefined) {
        return;
      }
      this.navData = this.navData.map(el => {
        if (
          Object.keys(el)[1] === String(checkEvent.value) &&
          el.active === false
        ) {
          console.log(Object.keys(el)[1], String(checkEvent.value), el.active);
          return { ...el, active: true };
        } else if (
          Object.keys(el)[1] != String(checkEvent.value) &&
          el.active === true
        )
          return { ...el, active: false };
        else if (
          Object.keys(el)[1] === String(checkEvent.value) &&
          el.active === true
        )
          return { ...el, active: false };
        return el;
      });
      return this.navData;
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
    z-index: 100;
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
