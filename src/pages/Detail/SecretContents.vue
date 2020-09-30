<template>
  <div :style="{ opacity: opacity }">
    <i v-if="q_is_private" class="fas fa-lock" />
    <span>{{ q_is_private ? '비밀글입니다.' : q_content }}</span>
  </div>
</template>

<script>
export default {
  props: ['opacity', 'q_is_private', 'q_content']
};
</script>

<style scoped lang="scss"></style>
