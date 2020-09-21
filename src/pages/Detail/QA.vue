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
        <div class="question">문의하기</div>
      </div>
    </section>
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
          v-for="QA in QA_list"
          :key="QA.id"
          :QA_type="QA.type"
          :QA_state="QA.state"
          :QA_isSecret="QA.isSecret"
          :writer="QA.writer"
          :date="QA.date"
        />
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
    border-bottom: 1px solid #212121;

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

        .far {
          opacity: 0.3;
        }

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

  .QA-list {
    width: 100%;
    border-collapse: collapse;

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
</style>
