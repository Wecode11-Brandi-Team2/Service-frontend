<template>
  <div
    :class="[
      classify.id === classifyNum
        ? 'ClassifyButton-hover'
        : 'ClassifyButton-not-hover'
    ]"
    @click="filterBrand(classify.id)"
  >
    <span>{{ classify.name }}</span>
  </div>
</template>
<script>
export default {
  name: 'ClassifyButton',
  props: ['classify', 'classifyNum', 'filterBrand']
};
</script>

<style scoped lang="scss">
.ClassifyButton-hover {
  background-color: #ff204b;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin: 0 8px;
  padding: 11px 20px;
  border-radius: 25px;
  font-size: 20px;
  min-width: 100px;
  cursor: pointer;

  span {
    color: #fff;
    text-align: center;
    line-height: 100%;
  }
}

.ClassifyButton-not-hover {
  background-color: #f2f4f7;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin: 0 8px;
  padding: 11px 20px;
  border-radius: 25px;
  font-size: 20px;
  min-width: 100px;
  cursor: pointer;

  span {
    color: #acb3bd;
    text-align: center;
    line-height: 100%;
  }
}
</style>
