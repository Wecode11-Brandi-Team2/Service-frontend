<template>
  <div
    v-on:mouseover="cateogoryActiveChange"
    v-on:mouseleave="cateogoryActiveReChange"
  >
    <nav class="categoryNav">
      <ul>
        <li
          :newkey="CATEGORY"
          class="modalShowing"
          :key="CATEGORY"
          ref="focus"
          v-for="CATEGORY of navData.map(el => Object.keys(el)[1])"
        >
          <a>{{ CATEGORY }}</a>
        </li>
      </ul>
    </nav>
    <div
      v-bind:class="[cateogoryActive ? 'modalCategory' : 'hidden']"
      v-on:mouseover="cateogoryActiveChange"
      v-on:mouseleave="cateogoryActiveReChange"
    >
      <ul>
        <li :key="Object.keys(MODAL)[0]" v-for="MODAL in this.showingData">
          <span>{{ Object.keys(MODAL)[1] }}</span>
          <a
            class="categoryValue"
            href=""
            :key="Item"
            v-for="Item of MODAL[Object.keys(MODAL)[1]]"
          >
            {{ Item['name'] }}
          </a>
        </li>
      </ul>
      <div
        class="divisionLine"
        :key="line"
        v-for="line in lines"
        v-bind:style="{ left: (line - 0.5) * (100 / lines.length) + '%' }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryNav',
  data() {
    return {
      cateogoryActive: false,
      lines: [1, 2, 3, 4, 5, 6, 7],
      navCheckData: '',
      showingData: '',
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
      ]
    };
  },
  created: function() {},
  methods: {
    cateogoryActiveChange(event) {
      if (event.target.attributes.newkey.value === undefined) {
        return;
      }
      this.navCheckData = event.target.attributes.newkey.value;
      for (let i = 0; i < this.navData.length; i++) {
        if (this.navData[i][this.navCheckData]) {
          this.showingData = this.navData[i][this.navCheckData];
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

.modalCategory {
  transition: all 0.5s ease-in-out;
  visibility: visible;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.96);
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10000;
  overflow: hidden;
  .categoryValue {
    color: black;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ff204b;
    }
  }
  ul {
    width: 100%;
    overflow: hidden;
    padding: 0 7%;
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 0 3.6%;
      margin: 0;
      display: inline-block;
      width: 16.6666%;
      line-height: 40px;
      margin-bottom: 5px;
      box-sizing: border-box;
      vertical-align: top;
      span {
        text-align: center;
        display: block;
        font-weight: 700;
      }
      a {
        display: block;
        height: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }

  .divisionLine {
    width: 1px;
    content: '';
    height: 100%;
    position: absolute;
    background: #e1e1e1;
    top: 0;
  }
}

.categoryNav {
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  height: 60px;

  ul {
    display: flex;
    max-width: 1300px;
    height: 100%;
    margin: 0px auto;
    overflow: hidden;
    li {
      vertical-align: top;
      text-align: center;
      width: calc(100% / 10);
      padding: 19px;
      display: inline-block;
      margin: 0 10px;
      border-bottom: 3px solid white;

      a {
        color: black;
      }

      &:hover {
        border-bottom: 3px solid #ff204b;
        a {
          color: #ff204b;
        }
        cursor: pointer;
      }
    }
  }
}
</style>
