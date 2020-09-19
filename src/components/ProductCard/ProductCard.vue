<template>
  <div id="mainProduct">
    <a href="/">
      <img
        alt="productImage"
        src="http://image.brandi.me/cproduct/2020/08/10/17865197_1597044606_image1_M.jpg"
      />
    </a>
    <ul>
      <li><span class="brand">브레스</span></li>
      <li>
        <a href="">
          <span>[국내제작]</span>
          <span class="productname">도로시 롱 원피스 </span>
        </a>
      </li>
      <li>
        <span class="discount"> 9%</span>
        <span class="price">7,000</span>
        <span class="discountPrice">6,370</span>
      </li>
      <li>
        <span class="count">7,871개 구매 중</span>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainProduct',
  props: {}
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: black;
  &:active,
  :visited {
    color: black;
  }
}
#mainProduct {
  &:hover {
    transition: transform 0.4s ease-in-out;
    transform: scale(1.05);
  }
  padding: 1%;
  width: 20%;
  display: flex;
  flex-direction: column;
  img {
    height: 254px;
  }
  li {
    .brand {
      font-size: 15px;
    }
    .productname {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
    .discount {
      font-size: 20px;
      font-weight: 600;
      color: #ff204b;
    }
    .price {
      font-size: 20px;
      font-weight: 600;
    }
    .discountPrice {
      color: #757575;
      font-size: 15px;
      text-decoration: line-through;
    }
    .count {
      font-size: 13px;
      color: #757575;
    }
    margin: 5px 0;
    span {
      margin: 0 5px;
    }
  }
}
</style>
