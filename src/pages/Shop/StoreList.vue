<template>
  <ul class="store-list">
    <li class="number">{{ storeList.id }}</li>
    <li>
      <img alt="seller_image" :src="storeList.image" />
    </li>
    <li class="seller-content">
      <div class="seller-title">{{ storeList.seller_name }}</div>
      <div class="store-tag">
        <span>#{{ storeList.tag_first }}</span>
        <span>#{{ storeList.tag_second }}</span>
        <span>#{{ storeList.tag_third }}</span>
      </div>
    </li>
    <li
      class="store-like"
      :class="{ 'store-like-active': isLikeThisSeller }"
      @click="likeThisSeller"
    >
      <span
        class="like-amount"
        :class="{ 'like-amount-active': isLikeThisSeller }"
        >{{ storeList.like_amount }}</span
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: ['storeList'],
  data() {
    return {
      isLikeThisSeller: false
    };
  },
  methods: {
    likeThisSeller() {
      this.isLikeThisSeller = !this.isLikeThisSeller;
    }
  }
};
</script>

<style scoped lang="scss">
.store-list {
  display: flex;
  width: 50%;
  border-bottom: 1px solid #e1e1e1;

  &:nth-child(odd) {
    padding-right: 25px;
  }

  &:nth-child(even) {
    padding-left: 25px;
  }

  .number {
    width: 30px;
    text-align: center;
    line-height: 82px;
    color: #999;
  }

  img {
    width: 50px;
    height: 50px;
    margin: 16px 5px;
    border-radius: 80px;
  }

  .seller-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 150px);
    padding: 20px 0 18px 0;

    .seller-title {
      display: block;
      width: 100%;
      padding-left: 10px;
      opacity: 0.9;
      letter-spacing: -0.51px;
      color: #000;
      font-size: 15px;
    }

    .store-tag {
      width: 100%;
      padding: 5px 0px 0px 10px;

      span {
        letter-spacing: -0.44px;
        opacity: 0.9;
        color: #9e9e9e;
        font-size: 13px;
      }
    }
  }

  .store-like {
    width: 60px;
    height: 82px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 20px 24px;
    background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/e-icon-sellect-heart-detailpageireview-n@3x.png');
    cursor: pointer;

    .like-amount {
      display: inline-block;
      width: 100%;
      padding-top: 50px;
      text-align: center;
      color: #9e9e9e;
      font-size: 13px;
    }
  }

  .store-like-active {
    width: 60px;
    height: 82px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 20px 24px;
    background-image: url('https://web-staging.brandi.co.kr/static/2020.7.3/images/e-icon-sellect-heart-detailpageireview-s@3x.png');
    cursor: pointer;

    .like-amount-active {
      display: inline-block;
      width: 100%;
      padding-top: 50px;
      text-align: center;
      color: #ffc924;
      font-size: 13px;
    }
  }
}
</style>
