<template>
  <div class="options">
    <div
      v-bind:class="[
        saleCheckActive
          ? 'small-box transition'
          : 'changed-small-box transition'
      ]"
    ></div>
    <svg
      v-bind:class="[
        saleCheckActive ? 'checked transition' : 'not-checked transition'
      ]"
      viewBox="0 0 10px 10px"
      role="presentation"
    >
      <svg id="chevron-left" viewBox="0 0 10px 10px">
        <polygon
          class="st0"
          points="1.3,14.1 0,12.8 5.8,7 0,1.3 1.3,0 8.3,7  "
        ></polygon>
      </svg>
    </svg>
    <span>세일</span>
  </div>
</template>
<script>
export default {
  name: 'SaleCheckButton',
  props: ['saleCheckActive'],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
* {
  font-family: 'Spoqa Han Sans', Sans-serif;
}

.not-picked {
  background-color: white;
}

.picked {
  background-color: #f2f2f2;
  a {
    color: #ff204b;
  }
}

.small-box {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid black;
  background-color: #f2f2f2;
}

.changed-small-box {
  position: absolute;
  width: 19px;
  height: 19px;
  border: 1px solid black;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.checked {
  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3;
  height: 14.1;
  margin-right: 5px;
  margin-left: 5px;
  transform: rotate(90deg);
}

.not-checked {
  margin-top: 3px;

  margin-left: 5px;
  transform: matrix(0, 0, 0, 0, 0, 0) rotate(90deg);
}

.options {
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  border-top: 1px solid #e7e7e7;
  padding: 20px 0px 20px 10px;
  cursor: pointer;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.3;
    height: 14.1;
    margin-right: 20px;
  }
}
</style>
