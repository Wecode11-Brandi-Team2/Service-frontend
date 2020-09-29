<template>
  <tr>
    <td>{{ q_type }}</td>
    <td>
      <span :class="[q_is_answered ? 'state-icon' : 'state-icon-waiting']">{{
        q_is_answered ? '답변완료' : '답변대기'
      }}</span>
    </td>
    <td class="contents" @click="activeContents">
      <SecretContents :q_content="q_content" :q_is_private="q_is_private" />
    </td>
    <div class="detail-active" v-if="isActiveContents">
      <SecretContents
        :opacity="Opacity"
        :q_content="q_content"
        :q_is_private="q_is_private"
      />
      <div class="answer-wrapper">
        <div class="answer">
          답변
        </div>
        <SecretContents :opacity="Opacity" :QA_isSecret="QA_isSecret" />
        <div class="answered-by">
          <span class="writer">브랜디</span>
          <span class="date">{{ a_created_at }}</span>
        </div>
      </div>
    </div>
    <td>{{ q_user }}</td>
    <td>{{ a_created_at }}</td>
  </tr>
</template>

<script>
import SecretContents from './SecretContents';

export default {
  components: {
    SecretContents
  },
  props: {
    q_type: {
      type: String,
      required: true
    },
    q_is_answered: {
      type: Number,
      required: true
    },
    q_is_private: {
      type: Number,
      required: true
    },
    q_content: {
      type: String,
      required: true
    },
    q_user: {
      type: String,
      required: true
    },
    a_created_at: {
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

  .state-icon-waiting {
    display: inline-block;
    min-width: 80px;
    padding: 3px 4px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 14px;
    border: solid 1px #9a9a9e;
    color: #a4a4a8;
  }
}

.contents {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}

.detail-active {
  padding: 20px 36px 20px 365px;
  // margin: 0 -329px 0 -331px;
  margin: 0 -299px 0 -361px;
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
