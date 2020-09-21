<template>
  <section>
    <Nav />
    <CategoryNav />
    <div class="Agreement">
      <SignUpNav title="회원가입" />
      <div class="agreementContainer">
        <span>가입약관동의</span>
        <div id="wholeAgreeButton">
          <input type="checkbox" />
          <label for="wholeAgreeButton">모두 동의</label>
        </div>
        <div>
          <div id="wholeAgreeButton">
            <input type="checkbox" />
            <label for="wholeAgreeButton">브랜디 약관 동의</label>
            <span>(필수)</span>
          </div>
          <div id="wholeAgreeButton">
            <input type="checkbox" />
            <label for="wholeAgreeButton"
              >개인정보수집 및 이용에 대한 안내</label
            >
            <span>(필수)</span>
          </div>
          <div id="wholeAgreeButton">
            <input type="checkbox" />
            <label for="wholeAgreeButton">이벤트/마케팅 수신 동의</label>
            <span>(선택)</span>
          </div>
          <div id="wholeAgreeButton">
            <input type="checkbox" />
            <label for="wholeAgreeButton">야간 혜택 알림 수신 동의 </label>
            <span>(선택)</span>
          </div>
        </div>
        <div></div>
        <NextButton word="다음 단계로 이동" />
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

.agreementContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 34px;
    font-size: 1em;
  }
}
</style>
