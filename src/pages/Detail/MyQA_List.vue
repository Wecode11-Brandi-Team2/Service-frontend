<template>
  <tr>
    <td>{{ type_name }}</td>
    <td>
      <span :class="[q_is_answered ? 'state-icon' : 'state-icon-waiting']">{{
        q_is_answered ? '답변완료' : '답변대기'
      }}</span>
    </td>
    <td class="contents">
      <QnaContent
        @re-fetch="reFetch"
        @active-content="activeContents"
        :q_content="q_content"
        :q_is_private="q_is_private"
        :q_id="q_id"
      />
    </td>
    <div class="detail-active" v-if="isActiveContents">
      <SecretContents
        :opacity="Opacity"
        :q_content="q_content"
        :q_is_private="q_is_private"
      />
      <div v-if="a_content" class="answer-wrapper">
        <div class="answer">
          답변
        </div>
        <SecretAnswer
          :opacity="Opacity"
          :a_content="a_content"
          :a_is_private="a_is_private"
        />
        <div class="answered-by">
          <span class="writer">브랜디</span>
          <span class="date">{{
            a_created_at ? dateCreatedA : dateCreated
          }}</span>
        </div>
      </div>
    </div>
    <td>{{ writer }}</td>
    <td>{{ dateCreated }}</td>
  </tr>
</template>

<script>
import QnaContent from './QnaContent';
import SecretContents from './SecretContents';
import SecretAnswer from './SecretAnswer';

export default {
  components: {
    QnaContent,
    SecretContents,
    SecretAnswer
  },
  props: [
    'a_content',
    'a_created_at',
    'a_is_private',
    'q_content',
    'q_created_at',
    'q_is_answered',
    'q_is_private',
    'type_name',
    'login_id',
    'q_id'
  ],
  data() {
    return {
      Opacity: 0.5,
      isActiveContents: false
    };
  },
  computed: {
    writer() {
      const writer = this.login_id
        .split('')
        .slice(0, 3)
        .concat('***')
        .join('');
      return writer;
    },
    dateCreated() {
      const createdAt = this.q_created_at;
      const convert = new Date(createdAt);
      const year = convert.getFullYear();
      const month = convert.getMonth() + 1;
      let date = convert.getDate();
      if (date < 10) {
        date = '0' + date;
      }
      return `${year}.${month}.${date}`;
    },
    dateCreatedA() {
      const createdAt = this.a_created_at;
      const convert = new Date(createdAt);
      const year = convert.getFullYear();
      const month = convert.getMonth() + 1;
      const date = convert.getDate();

      return `${year}.${month}.${date}`;
    }
  },
  methods: {
    reFetch() {
      this.$emit('re-fetch-again');
    },
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
  padding: 20px 20px 20px 370px;
  margin: 0px -325px 0 -335px;
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
