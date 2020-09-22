<template>
  <section>
    <div class="Agreement">
      <SignUpNav title="회원가입" />
      <div class="agreement-title">
        <span>
          가입약관동의
        </span>
      </div>
      <div class="agreement-container">
        <div class="line" />

        <div id="agree-button" class="whole-click-space">
          <input class="check-box" type="checkbox" />
          <label for="agree-button">모두 동의</label>
        </div>

        <div class="click-space-wrapper">
          <div id="agree-button" class="click-space">
            <div>
              <input class="check-box" type="checkbox" />
              <label for="agree-button">브랜디 약관 동의</label>
              <span>(필수)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div id="agree-button" class="click-space">
            <div>
              <input class="check-box" type="checkbox" />
              <label for="agree-button">
                개인정보수집 및 이용에 대한 안내
              </label>
              <span>(필수)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div id="agree-button" class="click-space">
            <div>
              <input class="check-box" type="checkbox" />
              <label for="agree-button">이벤트/마케팅 수신 동의</label>
              <span>(선택)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div id="agree-button" class="click-space margin-left">
            <div>
              <input class="check-box" type="checkbox" />
              <label for="agree-button">야간 혜택 알림 수신 동의 </label>
              <span>(선택)</span>
            </div>
            <a href="">내용보기</a>
          </div>
        </div>
        <div class="line" />
        <div class="button-wrapper">
          <NextButton word="다음 단계로 이동" />
        </div>
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

.Agreement {
  margin: 70px 0 50px 0;

  .agreement-title {
    @include setFlex(center, null, null);
    max-width: 600px;
    margin: 24px auto;
    font-size: 16px;

    span {
      display: inline-block;
      width: 100%;
    }
  }

  .agreement-container {
    max-width: 600px;
    margin: 0 auto;

    label {
      padding-left: 20px;
      @include setFont(15px, null, 400);
      cursor: pointer;
    }
  }

  .click-space-wrapper {
    width: 100%;
    padding: 24px 18px;
    border: 1px solid #dfdfdf;

    .click-space {
      @include setFlex(space-between, center, null);
      margin-bottom: 12px;

      input {
        @include setSize(20px, 20px);
      }
      div {
        @include setFlex(null, center, null);
      }

      span {
        margin-left: 5px;
        color: #ff204b;
      }

      a {
        text-decoration: none;
        font-size: 13px;
        color: #616161;
        cursor: pointer;
      }
    }
  }

  .whole-click-space {
    @include setFlex(null, center, null);
    margin: 20px 0;
  }
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin: 30px;
}

.check-box {
  @include setSize(20px, 20px);
}

.line {
  height: 1px;
  margin: 20px 0;
  background-color: #dfdfdf;
}

.margin-left {
  margin-left: 30px;
}
</style>
