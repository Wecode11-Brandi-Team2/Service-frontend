<template>
  <div class="contents-plus-button">
    <button
      v-bind:style="{
        width: `${width}`,
        height: `${height}`,
        fontSize: `${fontSize}`
      }"
    >
      {{ getTitle }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'ContentsPlusButton',
  props: ['title', 'getid', 'width', 'height', 'fontSize'],
  computed: {
    getTitle() {
      return this.title ? this.title : '더보기';
    }
  }
};
</script>
<style scoped lang="scss">
.contents-plus-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  button {
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
    transition: all 0.5s ease-in-out;
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
