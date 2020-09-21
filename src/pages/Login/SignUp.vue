<template>
  <section>
    <Nav />
    <CategoryNav />
    <div class="SignUp">
      <SignUpNav title="회원가입" />

      <div class="wordWrapper">
        <img
          class="phonePicture"
          alt="phonePicture"
          src="https://web-staging.brandi.co.kr/static/2020.7.3/images/h_icon_join_1_confirm_web(245)@3x.png"
        />
        <div class="conditions">
          <span class="authoTitle">브랜디 본인 인증</span>
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
    <Footer />
    <Buttons />
  </section>
</template>

<script>
import Nav from '../../components/Nav/Nav';
import CategoryNav from '../../components/Nav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Buttons from '../../components/Button/Buttons';
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';

export default {
  name: 'SignUp',
  components: {
    Nav,
    CategoryNav,
    Footer,
    Buttons,
    SignUpNav,
    NextButton
  },
  methods: {
    goToAgreement() {
      return;
    }
  }
};
</script>

<style scoped lang="scss">
.line {
  height: 1px;
  margin: 20px 0;
  width: 570;
  background-color: #dfdfdf;
}

.cellphoneButton {
  cursor: pointer;
  width: 200px;
  height: 60px;
  font-size: 19px;
  line-height: 59px;
  font-weight: 300;
  text-align: center;
  background-color: black;
  color: white;
  border-radius: 2px;
  border: 1px solid white;

  transition: all 0.5s ease-in-out;
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
}
.SignUp {
  margin: 50px 0;
}
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
.wordWrapper {
  display: flex;
  padding: 0 3%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  .authoTitle {
    text-align: center;
    font-size: 21px;
    font-weight: 500;
    margin: 20px 0;
  }
}
.phonePicture {
  width: 201px;
  margin: 35px 0 25px 0;
}
</style>
