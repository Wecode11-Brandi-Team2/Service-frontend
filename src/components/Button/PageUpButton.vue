<template class="Button">
  <div
    v-bind:class="[!showButton ? 'pageUpButton' : 'hidden']"
    v-on:click="pageUp"
  >
    <div>
      <img src="https://www.brandi.co.kr/static/3.50.7/images/a_btn_top.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageUpButton',
  props: {},
  data: function() {
    return {
      showButton: true
    };
  },
  mounted() {
    window.addEventListener('scroll', this.removeButton);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.removeButton);
  },
  methods: {
    removeButton() {
      return (this.showButton = window.pageYOffset < 380);
    },
    pageUp() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}

.pageUpButton {
  cursor: pointer;
  width: 52px;
  height: 52px;
  div {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
