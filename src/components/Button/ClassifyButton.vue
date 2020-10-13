<template>
  <div
    :class="[
      classify['button_id'] === classifyNum
        ? 'ClassifyButton-hover'
        : 'ClassifyButton-not-hover'
    ]"
    @click="filterBrand(classify['button_id'])"
  >
    <span>상품{{ classify['button_id'] }}</span>
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
