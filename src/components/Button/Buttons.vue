<template>
  <div class="Buttons">
    <PageUpButton />
    <KakaoButton />
    <ChatbotButton />
  </div>
</template>

<script>
import ChatbotButton from './ChatbotButton';
import KakaoButton from './KakaoButton';
import PageUpButton from './PageUpButton';

export default {
  name: 'Buttons',
  props: {},
  components: {
    ChatbotButton,
    KakaoButton,
    PageUpButton
  }
};
</script>

<style scoped lang="scss">
.Buttons {
  position: fixed;
  right: 0;
  bottom: 0%;
  div {
    margin: 15px;
  }
}
</style>
