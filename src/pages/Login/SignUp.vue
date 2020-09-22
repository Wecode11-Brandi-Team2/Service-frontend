<template>
  <section class="">
    <div class="sign-up">
      <SignUpNav title="회원가입" />
      <div class="word-wrapper">
        <img
          class="phone-picture"
          alt="phone-picture"
          src="https://web-staging.brandi.co.kr/static/2020.7.3/images/h_icon_join_1_confirm_web(245)@3x.png"
        />
        <div class="conditions">
          <span class="autho-title">브랜디 본인 인증</span>
          <ul>
            <li>
              14세미만 회원은 가입이 불가합니다.
            </li>
            <li>
              법인폰 사용자는 휴대폰 인증이 불가합니다.
            </li>
          </ul>
        </div>
        <div class="line" />
        <NextButton word="휴대폰 인증" />
      </div>
    </div>
  </section>
</template>

<script>
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';

export default {
  name: 'SignUp',
  components: {
    SignUpNav,
    NextButton
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

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
      ul {
        li {
          margin: 10px 0;
          font-size: 16px;
          font-weight: 300;
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
