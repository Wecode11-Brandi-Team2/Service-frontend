<template>
  <div class="Q-A">
    <section class="QA-heading-container">
      <h2 class="QA-heading">
        Q&A ({{ myWroteIsActive ? myQnas.length : apiData.length }})
      </h2>
      <div class="QA-utils">
        <span class="my-wrote-active" @click="myWroteActive">
          <i
            class="far fa-check-square"
            :style="{ opacity: myWroteIsActive ? '1' : '' }"
          />
          <div class="my-wrote">내가 쓴 글 보기</div>
        </span>
        <div class="question" @click="toggleQuestArea">문의하기</div>
      </div>
    </section>
    <!-- 문의하기 start -->
    <div class="QA-write-box-container" v-if="activeQuestArea">
      <ul>
        <li class="question-line">
          <div class="question-type">질문유형</div>
          <div
            class="question-type-select-container"
            @click="dropdownQuestType"
          >
            <div
              class="question-type-select"
              :style="{
                borderBottom: activeDropdownQuestType ? 'none' : null,
                borderRadius: activeDropdownQuestType ? '6px 6px 0 0' : null
              }"
            >
              {{ selectedQuestType }}
            </div>
            <div class="dropdown-icon-container">
              <div
                class="dropdown-icon"
                :style="{
                  transform: activeDropdownQuestType
                    ? 'scaleY(' + '-1' + ')'
                    : ''
                }"
              />
            </div>
            <div class="quest-type-dropdown-root">
              <ul
                class="quest-type-dropdown-wrapper"
                v-if="activeDropdownQuestType"
              >
                <li
                  class="quest-type"
                  v-for="quest in questTypes"
                  :key="quest.q_id"
                  @click="selectQuestType(quest)"
                >
                  {{ quest.q_type }}
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="question-line">
          <div class="question-contents">내용</div>
          <textarea
            v-model="qnaContents"
            class="question-area"
            placeholder="내용을 입력해 주세요."
          ></textarea>
        </li>
        <li class="question-line">
          <div class="question-contents">공개여부</div>
          <span @click="setPrivate">
            <i
              class="far fa-check-square"
              :style="{ opacity: isPrivate ? 1 : '' }"
            />
            <span>비공개</span>
          </span>
        </li>
      </ul>
      <div class="btn-wrapper">
        <button type="button" class="btn-cancel" @click="quitQuestArea">
          취소하기
        </button>
        <button @click="submitQuest" type="submit" class="btn-submit">
          등록하기
        </button>
      </div>
    </div>
    <!-- 문의하기 end -->
    <table class="QA-list">
      <thead>
        <tr>
          <th>분류</th>
          <th>처리상태</th>
          <th class="contents-table-head">내용</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <QA_List
          v-show="!myWroteIsActive"
          @re-fetch-again="
            doFetch();
            myQnaFetch();
          "
          v-for="(QA, idx) in apiData"
          :key="idx"
          :a_content="QA.a_content"
          :a_created_at="QA.a_created_at"
          :a_is_private="QA.a_is_private"
          :q_content="QA.q_content"
          :q_created_at="QA.q_created_at"
          :q_is_answered="QA.q_is_answered"
          :q_is_private="QA.q_is_private"
          :type_name="QA.type_name"
          :q_user="QA.q_user"
          :q_id="QA.q_id"
          :u_id="QA.u_id"
          :my_id="my_id"
        />
        <tr v-if="myWroteIsActive && myQnas.length === 0">
          <td class="no-data" colspan="5">
            등록된 상품문의가 없습니다.
          </td>
        </tr>
        <MyQA_List
          @re-fetch-again="
            myQnaFetch();
            doFetch();
          "
          v-else-if="myWroteIsActive && myQnas.length !== 0"
          v-for="myQA in myQnas"
          :key="myQA.q_created_at"
          :type_name="myQA.type_name"
          :q_is_answered="myQA.q_is_answered"
          :a_content="myQA.a_content"
          :a_created_at="myQA.a_created_at"
          :a_is_private="myQA.a_is_private"
          :q_content="myQA.q_content"
          :q_created_at="myQA.q_created_at"
          :q_is_private="myQA.q_is_private"
          :q_user="myQA.q_user"
          :q_id="myQA.q_id"
        />
      </tbody>
    </table>
    <div class="pagination">
      <div class="page" @click="getMoreData">1</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import QA_List from './QA_List';
import MyQA_List from './MyQA_List';
import URL from '../../../src/assets/mock/URL.js';

export default {
  components: {
    QA_List,
    MyQA_List
  },
  // mounted() {
  //   const qnaLocation = document.querySelector('.Q-A').offsetTop;
  //   this.$emit('qna-location', qnaLocation);
  // },
  data() {
    return {
      myWroteIsActive: false,
      activeQuestArea: false,
      activeDropdownQuestType: false,
      isPrivate: false,
      selectedQuestType: '질문유형을 선택하세요.',
      qnaContents: '',
      apiData: [],
      myQnas: [],
      beforeSubmitQuest: {},
      questTypes: [
        {
          q_id: 1,
          q_type: '질문유형을 선택하세요.'
        },
        {
          q_id: 2,
          q_type: '상품 문의'
        },
        {
          q_id: 3,
          q_type: '교환/반품'
        },
        {
          q_id: 4,
          q_type: '불량/오배송'
        },
        {
          q_id: 5,
          q_type: '기타'
        },
        {
          q_id: 6,
          q_type: '배송 문의'
        },
        {
          q_id: 7,
          q_type: '하루배송'
        },
        {
          q_id: 8,
          q_type: '취소/변경'
        }
      ],
      offset: 0,
      my_id: 0
    };
  },
  created() {
    this.doFetch();
    this.myQnaFetch();
  },
  methods: {
    doFetch() {
      let url = `${URL.PRODUCT_URL}/api/qnas?product_id=${this.$route.params.id}&offset=${this.offset}&limit=5`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      axios.get(url, headers).then(res => {
        this.apiData = res.data.qna;
        this.my_id = res.data.login_user_id.user_id;
        this.$emit('qna-length', this.apiData.length);
      });
    },
    myQnaFetch() {
      let url = `${URL.PRODUCT_URL}/api/qnas/user`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      axios.get(url, headers).then(res => {
        this.myQnas = res.data;
        this.$emit('myqna-length', this.myQnas.length);
      });
    },
    getMoreData() {
      this.offset = this.offset + 5;
    },
    myWroteActive() {
      this.myWroteIsActive = !this.myWroteIsActive;
      this.$emit('my-wrote-active', this.myWroteIsActive);
    },
    toggleQuestArea() {
      if (!localStorage.getItem('access_token')) {
        if (
          confirm(
            '로그인이 필요한 서비스입니다. 로그인 페이지로 이동하시겠습니까?'
          )
        ) {
          this.$router.push('/login');
        }
      }
      if (localStorage.getItem('access_token')) {
        this.activeQuestArea = !this.activeQuestArea;
      }
    },
    quitQuestArea() {
      this.activeQuestArea = !this.activeQuestArea;
    },
    dropdownQuestType() {
      this.activeDropdownQuestType = !this.activeDropdownQuestType;
    },
    setPrivate() {
      this.isPrivate = !this.isPrivate;
    },
    selectQuestType(quest) {
      this.selectedQuestType = quest.q_type;
      this.beforeSubmitQuest = quest;
    },
    submitQuest() {
      this.beforeSubmitQuest.q_content = this.qnaContents;
      this.beforeSubmitQuest.q_is_private = this.isPrivate;
      if (
        this.beforeSubmitQuest.q_id === 1 ||
        this.beforeSubmitQuest.q_type === undefined
      ) {
        alert('질문유형을 선택하세요.');
        return;
      }
      if (!this.beforeSubmitQuest.q_content) {
        alert('내용을 입력하세요.');
        return;
      }

      const url = `${URL.PRODUCT_URL}/api/qnas/qna`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      const body = {
        type_id: this.beforeSubmitQuest.q_id,
        product_id: this.$route.params.id,
        content: this.beforeSubmitQuest.q_content,
        is_private: this.beforeSubmitQuest.q_is_private
      };
      axios.post(url, body, headers).then(() => {
        this.doFetch();
        this.myQnaFetch();
      });
      alert('등록되었습니다.');
      this.qnaContents = '';
      this.selectedQuestType = '질문유형을 선택하세요.';
      this.activeQuestArea = !this.activeQuestArea;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.Q-A {
  margin-top: 140px;
  color: #1e1e1e;

  .QA-heading-container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;

    .QA-heading {
      display: inline-block;
      padding-top: 16px;
      @include setFont(26px, #000, 600);
    }

    .QA-utils {
      display: inline;
      padding-top: 16px;
      font-size: 22px;

      .my-wrote-active {
        cursor: pointer;

        .my-wrote {
          display: inline;
        }
      }

      .question {
        position: relative;
        display: inline;
        margin-left: 7px;
        padding-left: 17px;
        text-decoration: underline;

        &::before {
          content: '|';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
          color: #e1e1e1;
        }
      }
    }
  }

  .QA-write-box-container {
    margin-bottom: 44px;
    padding: 16px 16px 42px;
    border-top: 1px solid #212121;
    background-color: #f7f7f7;
    font-size: 18px;

    .question-line {
      position: relative;
      padding: 20px 0 20px 124px;
      border-bottom: 1px solid #e6e6e6;

      .question-type {
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 37px;
      }

      .question-type-select-container {
        position: relative;
        height: 50px;

        .question-type-select {
          padding: 0 52px 0 16px;
          border: solid 1px #e6e6e6;
          border-radius: 6px;
          line-height: 50px;
          background-color: #fff;
        }

        .dropdown-icon-container {
          @include setFlex(center, center, null);
          position: absolute;
          top: 0;
          right: 0;
          @include setSize(52px, 52px);

          .dropdown-icon {
            @include setSize(16px, 16px);
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: top 5px center;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
          }
        }

        .quest-type-dropdown-root {
          position: relative;

          .quest-type-dropdown-wrapper {
            position: absolute;
            top: 0;
            width: 100%;
            border: solid 1px #e6e6e6;
            border-top: 0;
            border-radius: 0 0 6px 6px;
            background-color: #fff;
            z-index: 5;

            .quest-type {
              padding: 17px 16px;
              border-top: solid 1px #e6e6e6;

              &:hover {
                transition-duration: 500ms;
                color: #fff;
                background-color: #037ffe;
              }
            }
          }
        }
      }

      .question-contents {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        height: 100%;
      }

      .question-area {
        @include setSize(100%, 146px);
        padding: 16px;
        border: 1px solid #e6e6e6;
        border-radius: 6px;
        resize: vertical;
        font-size: 18px;
      }
    }

    .btn-wrapper {
      padding-top: 42px;
      text-align: center;

      .btn-cancel {
        min-width: 160px;
        margin: 0 4px;
        padding: 18px 8px;
        border: 1px solid #1e1e1e;
        border-radius: 6px;
        font-size: 19px;
        font-weight: 500;
        background-color: #ffffff;
        color: #1e1e1e;

        &:hover {
          filter: invert(1);
          transition-duration: 0.5s;
        }
      }

      .btn-submit {
        min-width: 160px;
        margin: 0 4px;
        padding: 18px 8px;
        border: 1px solid #1e1e1e;
        border-radius: 6px;
        font-size: 19px;
        font-weight: 500;
        background-color: #1e1e1e;
        color: #fff;

        &:hover {
          transition-duration: 0.5s;
          background-color: #ffffff;
          color: #1e1e1e;
        }
      }
    }
  }

  .QA-list {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #212121;

    tr {
      border-bottom: 1px solid #e1e1e1;
    }

    thead {
      display: table-header-group;

      .contents-table-head {
        width: 45%;
      }

      th {
        display: table-cell;
        padding: 20px 36px;
        @include setFont(18px, #000, 600);
        text-align: center;
        vertical-align: top;
      }
    }

    tbody {
      display: table-row-group;

      .no-data {
        padding: 80px 12px;
        font-size: 22px;
        font-weight: 300;
        text-align: center;
        color: #c5c5c5;
      }
    }
  }

  .pagination {
    padding-top: 72px;
    text-align: center;

    .page {
      display: inline-block;
      min-width: 46px;
      height: 46px;
      margin: 0 5px;
      padding: 0 4px;
      border: 1px solid #e6e6e6;
      background-color: #ffffff;
      color: #9a9a9e;
      font-size: 17px;
      line-height: 46px;
      vertical-align: middle;
    }
  }
}

.far {
  opacity: 0.2;
}
</style>
