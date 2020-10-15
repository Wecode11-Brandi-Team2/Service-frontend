<template>
  <router-link :to="route">
    <div class="cellphoneButton">
      <a>{{ word }}</a>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'cellphoneButton',
  props: ['word', 'route']
};
</script>
<style scoped lang="scss">
@import '../../../styles/common.scss';

a {
  text-decoration: none;
}
.cellphoneButton {
  @include setSize(200px, 60px);
  line-height: 59px;
  text-align: center;
  @include setFont(19px, white, 300);
  background-color: black;
  border: 1px solid white;
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
}
</style>
