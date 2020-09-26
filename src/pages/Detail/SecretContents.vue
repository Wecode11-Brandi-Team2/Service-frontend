<template>
  <div :style="{ opacity: opacity }">
    <i v-if="q_is_private" class="fas fa-lock"></i>
    <span>{{ q_is_private ? '비밀글입니다.' : q_content }}</span>
  </div>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      required: false
    },
    q_is_private: {
      type: Number,
      required: true
    },
    q_content: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
