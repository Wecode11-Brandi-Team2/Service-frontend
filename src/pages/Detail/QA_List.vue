<template>
  <tr>
    <td>{{ QA_type }}</td>
    <td>
      <span class="state-icon">{{ QA_state ? '답변완료' : '답변대기' }}</span>
    </td>
    <td class="contents" @click="activeContents">
      <SecretContents :QA_isSecret="QA_isSecret" />
    </td>
    <div class="detail-active" v-if="isActiveContents">
      <SecretContents :opacity="Opacity" :QA_isSecret="QA_isSecret" />
      <div class="answer-wrapper">
        <div class="answer">
          답변
        </div>
        <SecretContents :opacity="Opacity" :QA_isSecret="QA_isSecret" />
        <div class="answered-by">
          <span class="writer">브랜디</span>
          <span class="date">{{ date }}</span>
        </div>
      </div>
    </div>
    <td>{{ writer }}</td>
    <td>{{ date }}</td>
  </tr>
</template>

<script>
import SecretContents from './SecretContents';

export default {
  components: {
    SecretContents
  },
  props: {
    QA_type: {
      type: String,
      required: true
    },
    QA_state: {
      type: Boolean,
      required: true
    },
    QA_isSecret: {
      type: Boolean,
      required: true
    },
    writer: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Opacity: 0.5,
      isActiveContents: false
    };
  },
  methods: {
    activeContents() {
      this.isActiveContents = !this.isActiveContents;
    }
  }
};
</script>

<style scoped lang="scss">
td {
  display: table-cell;
  padding: 20px 36px;
  font-size: 18px;
  text-align: center;
  vertical-align: top;

  .state-icon {
    display: inline-block;
    min-width: 80px;
    padding: 3px 4px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 14px;
    border: 1px solid #1e88e5;
    color: #1e88e5;
  }
}

.contents {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}

.detail-active {
  padding: 20px 36px 20px 365px;
  margin: 0 -329px 0 -331px;
  background-color: #f7f7f7;
  font-size: 18px;

  .answer-wrapper {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #e1e1e1;

    .answer {
      margin-bottom: 20px;
      color: #1e88e5;
      font-weight: 500;
    }

    .answered-by {
      margin-top: 20px;

      .writer,
      .date {
        margin-right: 10px;
      }
    }
  }
}
</style>
