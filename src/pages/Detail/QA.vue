<template>
  <div class="Q-A">
    <section class="QA-heading-container">
      <h2 class="QA-heading">Q&A({{ QA }})</h2>
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
              질문유형을 선택하세요.
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
                  :key="quest.id"
                >
                  {{ quest.quest }}
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="question-line">
          <div class="question-contents">내용</div>
          <textarea
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
        <button type="button" class="btn-cancel" @click="toggleQuestArea">
          취소하기
        </button>
        <button type="submit" class="btn-submit">등록하기</button>
      </div>
    </div>
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
          v-for="QA in QA_list"
          :key="QA.id"
          :QA_type="QA.type"
          :QA_state="QA.state"
          :QA_isSecret="QA.isSecret"
          :writer="QA.writer"
          :date="QA.date"
        />
        <tr v-show="myWroteIsActive">
          <td class="no-data" colspan="5">
            등록된 상품문의가 없습니다.
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <div class="page">1</div>
      <div class="page">2</div>
    </div>
  </div>
</template>

<script>
import QA_List from './QA_List';

export default {
  components: {
    QA_List
  },
  props: {
    QA: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      myWroteIsActive: false,
      activeQuestArea: false,
      activeDropdownQuestType: false,
      isPrivate: false,
      questTypes: [
        {
          id: 1,
          quest: '질문유형을 선택하세요.'
        },
        {
          id: 2,
          quest: '상품 문의'
        },
        {
          id: 3,
          quest: '교환/반품'
        },
        {
          id: 4,
          quest: '불량/오배송'
        },
        {
          id: 5,
          quest: '기타'
        },
        {
          id: 6,
          quest: '배송 문의'
        },
        {
          id: 7,
          quest: '하루배송'
        },
        {
          id: 8,
          quest: '취소/변경'
        }
      ],
      QA_list: [
        {
          id: 51,
          type: '교환/반품',
          state: true,
          isSecret: true,
          writer: 'yyk***',
          date: '2020.06.30'
        },
        {
          id: 50,
          type: '취소/변경',
          state: true,
          isSecret: true,
          writer: 'ls7***',
          date: '2020.06.29'
        },
        {
          id: 49,
          type: '상품 문의',
          state: true,
          isSecret: true,
          writer: 'ehd***',
          date: '2020.06.27'
        },
        {
          id: 48,
          type: '교환/반품',
          state: true,
          isSecret: true,
          writer: 'zhf***',
          date: '2020.06.26'
        },
        {
          id: 47,
          type: '상품 문의',
          state: true,
          isSecret: true,
          writer: 'qkr***',
          date: '2020.06.24'
        },
        {
          id: 46,
          type: '상품 문의',
          state: true,
          isSecret: true,
          writer: 'b00***',
          date: '2020.06.23'
        },
        {
          id: 45,
          type: '상품 문의',
          state: true,
          isSecret: true,
          writer: 'wld***',
          date: '2020.06.18'
        },
        {
          id: 44,
          type: '하루배송',
          state: true,
          isSecret: true,
          writer: 'min***',
          date: '2020.06.13'
        },
        {
          id: 43,
          type: '배송 문의',
          state: true,
          isSecret: true,
          writer: 'sto***',
          date: '2020.06.12'
        },
        {
          id: 42,
          type: '교환/반품',
          state: true,
          isSecret: true,
          writer: 'xlc***',
          date: '2020.06.11'
        },
        {
          id: 41,
          type: '취소/변경',
          state: true,
          isSecret: true,
          writer: 'pub***',
          date: '2020.06.10'
        }
      ]
    };
  },
  methods: {
    myWroteActive() {
      this.myWroteIsActive = !this.myWroteIsActive;
    },
    toggleQuestArea() {
      this.activeQuestArea = !this.activeQuestArea;
    },
    dropdownQuestType() {
      this.activeDropdownQuestType = !this.activeDropdownQuestType;
    },
    setPrivate() {
      this.isPrivate = !this.isPrivate;
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
