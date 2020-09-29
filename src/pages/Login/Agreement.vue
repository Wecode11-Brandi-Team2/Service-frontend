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
          <input
            v-model="allSelected"
            :value="checkedNames"
            @click="allAgree"
            class="check-box"
            type="checkbox"
            id="agree-total"
          />
          <label for="agree-total">모두 동의</label>
        </div>
        <div class="click-space-wrapper">
          <div
            :newkey="agreement.id"
            class="click-space"
            :key="agreement.title"
            v-for="agreement of agreementData"
          >
            <div>
              <input
                @click="selectAgree"
                class="check-box"
                type="checkbox"
                :id="`brandy-argree${agreement.id}`"
                :value="agreement.title"
                v-model="checkedNames"
              />
              <label :for="`brandy-argree${agreement.id}`">{{
                agreement.title
              }}</label>
              <span>({{ agreement.choice }})</span>
            </div>
            <a :href="agreement.detailLink">내용보기</a>
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
      agreementData: [
        { id: 1, title: '브랜디 약관 동의', detailLink: '', choice: '필수' },
        {
          id: 2,
          title: '개인정보수집 및 이용에 대한 안내',
          detailLink: '',
          choice: '필수'
        },
        {
          id: 3,
          title: '이벤트/마케팅 수신 동의',
          detailLink: '',
          choice: '선택'
        },
        {
          id: 4,
          title: '야간 혜택 알림 수신 동의',
          detailLink: '',
          choice: '선택'
        }
      ],
      selected: [],
      allSelected: false,
      id: [],
      checkedNames: []
    };
  },
  components: {
    SignUpNav,
    NextButton
  },

  methods: {
    allAgree() {
      if (this.allSelected) {
        this.checkedNames = [];
      } else {
        for (let agreement of this.agreementData) {
          this.checkedNames = this.checkedNames.concat(agreement.title);
        }
      }
    },
    selectAgree(e) {
      this.allSelected = false;

      if (e.target.defaultValue === '야간 혜택 알림 수신 동의') {
        this.checkedNames = this.checkedNames.concat('이벤트/마케팅 수신 동의');
      }
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

      &:nth-child(4) {
        margin-left: 30px;
      }

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
  color: red;
}

.check-box {
  @include setSize(20px, 20px);
}

.line {
  height: 1px;
  margin: 20px 0;
  background-color: #dfdfdf;
}
</style>
