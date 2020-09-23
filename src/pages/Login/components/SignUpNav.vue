<template>
  <scetion>
    <div class="sign-up-title">
      <span>{{ title }}</span>
    </div>
    <div class="sign-up-category">
      <div class="image-wrapper">
        <div class="category-image">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-01-s@3x.png"
          />
          <span>본인인증</span>
        </div>
        <div class="category-image">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-02-40-s@3x.png"
          />
          <span>정보수집동의</span>
        </div>
        <div class="category-image">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-03-40-s@3x.png"
          />
          <span>정보입력</span>
        </div>
        <div class="category-image">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-04-s@3x.png"
          />
          <span>가입완료</span>
        </div>
      </div>
    </div>
  </scetion>
</template>

<script>
export default {
  name: 'SignUpNav',
  props: ['title']
};
</script>

<style scoped lang="scss">
@import '../../../styles/common.scss';

.sign-up-title {
  @include setFont(18px, null, 700);
  text-align: center;
  margin-bottom: 15px;
}

.sign-up-category {
  margin-top: 30px;
  height: 113px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  @include setSize(100%, 100%);
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: #a1a1a1;

  .category-image {
    &:nth-child(3) {
      border-right: 1px solid black;
      border-left: 1px solid black;
      color: black;

      img {
        opacity: 1;
      }
    }

    @include setFlex(center, center, column);
    width: 23%;
    max-width: 180px;
    margin: 0 10px;

    img {
      opacity: 0.4;
      width: 60px;
    }
  }
}
</style>
