<template>
  <div :style="{ opacity: opacity }">
    <i v-if="a_is_private" class="fas fa-lock" />
    <span>{{ a_is_private ? '비밀글입니다.' : a_content }}</span>
  </div>
</template>

<script>
export default {
  props: ['opacity', 'a_is_private', 'a_content']
};
</script>

<style scoped lang="scss"></style>
