<template>
  <div class="cellphoneButton">
    <a :click="goToAgreement">{{ word }}</a>
  </div>
</template>
<script>
export default {
  name: 'cellphoneButton',
  props: ['word']
};
</script>
<style scoped lang="scss">
.cellphoneButton {
  cursor: pointer;
  width: 200px;
  height: 60px;
  font-size: 19px;
  line-height: 59px;
  font-weight: 300;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 2px;
  border: 1px solid white;

  transition: all 0.5s ease-in-out;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
}
</style>
