<template>
  <section class="Complete">
    <div class="sign-up">
      <SignUpNav title="회원가입" />
      <div class="word-wrapper">
        <img
          class="phone-picture"
          alt="phone-picture"
          src="https://web-staging.brandi.co.kr/static/2020.7.3/images/h_icon_join_1_confirm_web(245)@3x.png"
        />
        <div class="conditions">
          <span class="autho-title">브랜디 회원 가입을 축하드립니다!</span>
          <ul>
            <li class="autho-first">
              바로 사용 가능한 1만원 혜택이 지급되었습니다!
            </li>
            <li>
              지급받으신 혜택은 쿠폰함에서 확인 가능합니다
            </li>
          </ul>
        </div>
        <div class="line" />
        <div class="button-wrapper">
          <NextButton word="쿠폰 확인하기" route="/" />
          <NextButton word="바로 쇼핑하기" route="/" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';

export default {
  name: 'Complete',
  components: {
    SignUpNav,
    NextButton
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.autho-first {
  text-align: center;
  font-size: 21px;
  font-weight: 500;
  margin: 20px 0;
}

.button-wrapper {
  display: flex;
}
.sign-up {
  margin: 50px 0;

  .word-wrapper {
    @include setFlex(center, center, column);
    padding: 0 3%;

    img {
      width: 201px;
      margin: 35px 0 25px 0;
    }

    .conditions {
      display: flex;
      flex-direction: column;
      text-align: center;
      ul {
        li:nth-child(2) {
          margin: 10px 0;
          font-size: 16px;
          font-weight: 300;
        }
        li:nth-child(1) {
          text-align: center;
          font-size: 21px;
          font-weight: 500;
          margin: 20px 0;
        }
      }
      .autho-title {
        text-align: center;
        font-size: 21px;
        font-weight: 500;
        margin: 20px 0;
      }
    }
  }
}

.line {
  height: 1px;
  margin: 20px 0;
  width: 570;
  background-color: #dfdfdf;
}
</style>
