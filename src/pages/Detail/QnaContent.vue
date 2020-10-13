<template>
  <div :style="{ opacity: opacity }">
    <span @click="activeContent">{{ q_content }}</span>
    <i v-if="u_id === my_id" @click="deleteQna" class="fas fa-times" />
  </div>
</template>

<script>
import axios from 'axios';
import URL from '../../../src/assets/mock/URL.js';

export default {
  props: ['opacity', 'q_is_private', 'q_content', 'q_id', 'u_id', 'my_id'],
  methods: {
    deleteQna() {
      let question_id = this.q_id;
      const url = `${URL.PRODUCT_URL}/api/qnas/qna?question_id=${question_id}`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      if (confirm('Q&A를 삭제하시겠습니까?') === true) {
        axios.delete(url, headers).then(() => {
          this.$emit('re-fetch');
        });
      }
    },
    activeContent() {
      this.$emit('active-content');
    }
  }
};
</script>

<style scoped lang="scss">
.fas {
  opacity: 0.2;
}
</style>
