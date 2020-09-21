<template>
  <scetion>
    <div class="signUpTitle">
      <span>{{ title }}</span>
    </div>
    <div class="SignUpCategory">
      <div class="imageWrapper">
        <div class="categoryImages">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-01-s@3x.png"
          />
          <span>본인인증</span>
        </div>
        <div class="categoryImages">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-02-40-s@3x.png"
          />
          <span>정보수집동의</span>
        </div>
        <div class="categoryImages">
          <img
            src="https://web-staging.brandi.co.kr/static/2020.7.3/images/ic-join-step-03-40-s@3x.png"
          />
          <span>정보입력</span>
        </div>
        <div class="categoryImages">
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
.signUpTitle {
  font-size: 2.2em;
  font-weight: normal;
  text-align: center;
  margin-bottom: 15px;
}
.SignUpCategory {
  margin-top: 30px;
  height: 113px;
}
.imageWrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  color: #a1a1a1;
  .categoryImages {
    &:nth-child(1) {
      border-right: 1px solid black;
      border-left: 1px solid black;
      color: black;
      img {
        opacity: 1;
      }
    }

    width: 23%;
    max-width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;
    img {
      opacity: 0.4;
      width: 60px;
    }
  }
}
</style>
