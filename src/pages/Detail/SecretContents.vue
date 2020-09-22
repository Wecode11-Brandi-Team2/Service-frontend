<template>
  <div :style="{ opacity: opacity }">
    <i class="fas fa-lock"></i>
    <span>{{ QA_isSecret ? '비밀글입니다.' : '' }}</span>
  </div>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      required: false
    },
    QA_isSecret: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped lang="scss"></style>
