<template>
  <div class="contentsPlusButton">
    <button>
      더보기
    </button>
  </div>
</template>
<script>
export default {
  name: 'ContentsPlusButton',
  props: {}
};
</script>
<style scoped lang="scss">
.contentsPlusButton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  button {
    width: 250px;
    margin: 0 auto;
    padding: 10px 0;
    border: 1px solid #000;
    font-size: 14px;
    background-color: white;
    text-align: center;
  }
}
</style>
