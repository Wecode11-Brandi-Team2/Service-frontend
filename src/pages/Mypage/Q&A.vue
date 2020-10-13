<template>
  <div>
    <MenuTab />
    <div class="qna">
      <div class="qna-headerbox">
        <h2 class="qna-header">상품 Q&A</h2>
        <!-- <div class="qna-filter-box">
          <div class="button-wrapper">
            <div
              class="check-button"
              id="1"
              @click="checkedToggle(1)"
              :class="{ 'active-button': checkedButton === 1 }"
            ></div>
            <div class="qna-filter">
              전체
            </div>
          </div>
          <div class="button-wrapper">
            <div
              class="check-button"
              @click="checkedToggle(2)"
              :class="{ 'active-button': checkedButton === 2 }"
            ></div>
            <div class="qna-filter">
              답변
            </div>
          </div>
          <div class="button-wrapper">
            <div
              class="check-button"
              @click="checkedToggle(3)"
              :class="{ 'active-button': checkedButton === 3 }"
            ></div>
            <div class="qna-filter">
              미답변
            </div>
          </div>
        </div> -->
      </div>
      <div class="qna-listbar">
        <div class="status">답변상태</div>
        <div class="description">내용</div>
        <div class="writer">작성자</div>
        <div class="date">작성일</div>
      </div>
      <div v-for="(data, idx) in myQnaData" :key="idx">
        <ul class="qna-title">
          <li class="aa">미답변</li>
          <li @click="dropdownContents()" class="bb">
            {{ data.q_content }}
          </li>
          <li class="aa"></li>
          <li class="aa">{{ calDate(data.q_created_at) }}</li>
        </ul>
        <ul class="qna-answer" v-show="activeContents">
          <li class="aa"></li>
          <li class="bb">{{ data.q_content }}</li>
          <li class="aa"></li>
          <li class="aa"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MenuTab from './MenuTab.vue';
import URL from '../../assets/mock/URL.js';

export default {
  name: 'qna',
  components: { MenuTab },
  data() {
    return {
      activeContents: false,
      checkedButton: 1,
      qnaHeader: {
        status: '미답변',
        qnaTitle: '안녕하세요',
        writer: '',
        date: 20200924
      },
      myQnaData: {},
      isActiveDropdown: false
    };
  },
  created() {
    this.getQnaData();
  },
  methods: {
    calDate(yetDate) {
      const convert = new Date(yetDate);
      const year = convert.getFullYear();
      const month = convert.getMonth() + 1;
      let day = convert.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      return `${year}.${month}.${day}`;
    },
    getQnaData() {
      let url = `${URL.PRODUCT_URL}/api/qnas/user`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      axios.get(url, headers).then(res => {
        this.myQnaData = res.data;
      });
    },
    dropdownContents() {
      // 할수 있을 텐데...
      this.activeContents = !this.activeContents;
    },
    checkedToggle(id) {
      this.checkedButton = id;
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
  }
  .qna-answer {
    display: flex;
    align-items: center;
    height: 42px;
    background: #f7f8fa;
    border-bottom: 1px solid #dddddd;
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
  }
}
</style>
