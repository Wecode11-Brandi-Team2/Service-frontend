<template>
  <div class="Slide">
    <div
      class="product-image"
      v-for="image in slideImage"
      :key="image.id"
      :style="{ backgroundImage: 'url(' + image.image + ')' }"
    />
  </div>
</template>

<script>
export default {
  props: ['slideImage']
};
</script>

<style scoped lang="scss">
.Slide {
  display: flex;
  width: 100%;
  // overflow: hidden;

  .product-image {
    min-width: 100%;
    height: 620px;
    margin-bottom: 20px;
  }
}
</style>
