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
        <div class="whole-click-space">
          <input class="check-box" type="checkbox" id="agree-total" />
          <label for="agree-total">모두 동의</label>
        </div>
        <div class="click-space-wrapper">
          <div class="click-space">
            <div>
              <input
                class="check-box"
                :class="[clickActive ? 'checked' : '']"
                type="checkbox"
                id="brandy-argree"
              />
              <label for="brandy-argree" @click="checkActive"
                >브랜디 약관 동의</label
              >
              <span>(필수)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div class="click-space">
            <div>
              <input class="check-box" type="checkbox" id="personal-info" />
              <label for="personal-info">
                개인정보수집 및 이용에 대한 안내
              </label>
              <span>(필수)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div class="click-space">
            <div>
              <input class="check-box" type="checkbox" id="event-agree" />
              <label for="event-agree">이벤트/마케팅 수신 동의</label>
              <span>(선택)</span>
            </div>
            <a href="">내용보기</a>
          </div>
          <div class="click-space margin-left">
            <div>
              <input class="check-box" type="checkbox" id="alarm-agree" />
              <label for="alarm-agree">야간 혜택 알림 수신 동의 </label>
              <span>(선택)</span>
            </div>
            <a href="">내용보기</a>
          </div>
        </div>
        <div class="line" />
        <div class="button-wrapper">
          <router-link to="/googleinformation">
            <NextButton word="다음 단계로 이동" />
          </router-link>
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
  data() {
    return {
      clickActive: false
    };
  },
  components: {
    SignUpNav,
    NextButton
  },
  methods: {
    checkActive() {
      this.clickActive = !this.clickActive;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

a {
  text-decoration: none;
}

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

/* input:checked + label {
  color: red;
} */

.checked {
  background-color: red;
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
