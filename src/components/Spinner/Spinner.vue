<template>
  <div class="spinner">
    <img
      src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ico_loading.png"
    />
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: []
};
</script>

<style scoped lang="scss">
.spinner {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    opacity: 1;
    animation: opacity 2s linear infinite;
    @keyframes opacity {
      0% {
        opacity: 90%;
      }
      100% {
        opacity: 10%;
      }
    }
  }
}
.hidden {
  display: none;
}
</style>
