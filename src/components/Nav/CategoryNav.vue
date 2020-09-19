<template>
  <div class="nav">
    <nav class="categoryNav">
      <ul>
        <li
          :newkey="CATEGORY"
          class="modalShowing"
          :key="CATEGORY"
          v-for="CATEGORY in CATEGORY_CONTENTS"
          v-on:mouseover="cateogoryActiveChange"
          v-on:mouseleave="cateogoryActiveChange"
        >
          <a>{{ CATEGORY }}</a>
        </li>
      </ul>
    </nav>
    <div
      v-bind:class="[cateogoryActive ? 'modalCategory' : 'hidden']"
      v-on:mouseover="cateogoryActiveChange"
    >
      <ul :key="MODAL" v-for="MODAL in MODAL_SAMPLE">
        <li :key="Items" v-for="Items of Object.keys(MODAL)">
          <span>{{ Items }}</span>
          <a :key="Item" v-for="Item of MODAL[Items]">
            {{ Item }}
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
    <div class="advertise">
      <img
        src="http://image.brandi.me/home/banner/bannerImage_2_1591345434.jpg"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoryNav',
  data() {
    return {
      cateogoryActive: false,
      CATEGORY_CONTENTS: [
        '홈',
        '랭킹',
        '하루배송',
        '쇼핑몰,마켓',
        '브랜드',
        '뷰티',
        '특가',
        '기획전',
        '스토어'
      ],
      MODAL_SAMPLE: {
        쇼핑몰마켓: {
          아우터: [
            '자켓',
            '가디건',
            '코트',
            '점퍼',
            '패딩',
            '무스탕/퍼',
            '기타'
          ],
          바지: [
            '청바지',
            '슬랙스',
            '면바지',
            '반바지',
            '트레이닝/조거',
            '레깅스'
          ],
          원피스: ['미니', '미디', '롱', '투피스', '점프수트'],
          스커트: ['미니', '미디', '롱'],
          신발: ['플랫/로퍼', '샌들/슬리퍼', '힐', '스니커즈', '부츠/워커'],
          가방: ['크로스백', '토트백', '숄더백', '에코백', '클러치', '백팩'],
          주얼리: ['귀걸이', '목걸이', '팔찌/발찌', '반지'],
          잡화: [
            '휴대폰 acc',
            '헤어 acc',
            '양말/스타킹',
            '지갑/파우치',
            '모자',
            '벨트',
            '시계',
            '스카프/머플러',
            '아이웨어',
            '기타'
          ],
          라이프웨어: ['언더웨어', '홈웨어', '스윔웨어', '비치웨어', '기타'],
          빅사이즈: ['아우터', '상의', '바지', '원피스', '스커트']
        }
      }
    };
  },
  methods: {
    cateogoryActiveChange(event) {
      if (event.target.attributes.newkey.value === '쇼핑몰,마켓') {
        this.cateogoryActive = !this.cateogoryActive;
      }
    }
  }
};
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
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
