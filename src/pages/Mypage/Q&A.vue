<template>
  <div>
    <MenuTab />
    <div class="qna">
      <div class="qna-headerbox">
        <h2 class="qna-header">상품 Q&A</h2>
        <div class="qna-filter-box">
          <div class="button-wrapper">
            <div
              class="check-button"
              id="1"
              :class="{ 'active-button': true }"
            ></div>
            <div class="qna-filter">전체</div>
          </div>
          <div class="button-wrapper">
            <div class="check-button"></div>
            <div class="qna-filter">답변</div>
          </div>
          <div class="button-wrapper">
            <div class="check-button"></div>
            <div class="qna-filter">미답변</div>
          </div>
        </div>
      </div>
      <div class="qna-listbar">
        <div class="status">답변상태</div>
        <div class="description">내용</div>
        <div class="writer">작성자</div>
        <div class="date">작성일</div>
      </div>
      <ul class="qna-title" @click="dropdownContents">
        <li class="aa">미답변</li>
        <li class="bb">블라블라</li>
        <li class="cc"></li>
        <li class="dd">날짜</li>
      </ul>
      <ul class="qna-title2" v-if="activeContents">
        <li class="aa">미답변</li>
        <li class="bb">블라블라</li>
        <li class="cc"></li>
        <li class="dd">날짜</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuTab from './MenuTab.vue';

export default {
  components: { MenuTab },
  data() {
    return {
      activeContents: false,
      checkedButton: '1'
    };
  },
  methods: {
    dropdownContents() {
      this.activeContents = !this.activeContents;
      console.log(this.activeContents);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.qna {
  margin: 0 70px;
  padding: 0 20px;

  .qna-headerBox {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    margin-bottom: 10px;
    margin-top: 50px;

    .qna-header {
      @include setFont(2em, null, 300);
    }
    .qna-filter-box {
      display: flex;
      justify-content: space-between;
      width: 270px;

      .button-wrapper {
        display: flex;

        .check-button {
          @include setSize(23px, 23px);
          margin-right: 7px;
          background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/login_icon_radiobtn_n.png');
          background-size: 100%;
          cursor: pointer;
        }
        .active-button {
          margin-right: 7px;
          background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/login_icon_radiobtn_s.png');
          background-size: 100%;
          cursor: pointer;
        }
        .qna-filter {
          @include setFont(23px, null, normal);
          font-weight: normal;
        }
      }
    }
  }
  .qna-listbar {
    display: flex;
    border-bottom: 1px solid #dddddd;
    height: 42px;
    .status {
      text-align: center;
      padding: 10px 5px;
      width: 179px;
      height: 22px;
      font-weight: 700;
    }
    .description {
      text-align: center;
      font-weight: 700;
      padding: 10px 5px;
      width: 683px;
      height: 22px;
    }
    .writer {
      text-align: center;
      font-weight: 700;
      padding: 10px 5px;
      width: 179px;
      height: 22px;
    }
    .date {
      text-align: center;
      font-weight: 700;
      padding: 10px 5px;
      width: 179px;
      height: 22px;
    }
  }
  .qna-title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    height: 42px;
    cursor: pointer;
    .aa {
      text-align: center;
      padding: 10px 5px;
      width: 179px;
    }
    .bb {
      text-align: center;
      padding: 10px 5px;
      width: 683px;
    }
    .cc {
      text-align: center;
      padding: 10px 5px;
      width: 179px;
    }
    .dd {
      text-align: center;
      padding: 10px 5px;
      width: 179px;
    }
  }
  .qna-title2 {
    background-color: red;
  }
}
</style>
