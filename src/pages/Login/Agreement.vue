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
            @click="getAllSelect"
            v-model="allSelected"
            class="check-box"
            type="checkbox"
            id="agree-total"
          />
          <label for="agree-total">모두 동의</label>
        </div>
        <div class="click-space-wrapper">
          <div
            class="click-space"
            :key="agreement.title"
            v-for="agreement of agreementData"
          >
            <div>
              <input
                @click="checkExcept(agreement)"
                class="check-box"
                type="checkbox"
                :id="`brandy-argree${agreement.id}`"
                v-model="agreement.checked"
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
            <NextButton word="다음 단계로 이동" route="/googleinformation" />
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
      agreementData: [],
      selected: [],
      id: [],
      checkedNames: []
    };
  },
  components: {
    SignUpNav,
    NextButton
  },

  computed: {
    allSelected: {
      get() {
        for (let i = 0; i < this.agreementData.length; i++) {
          if (!this.agreementData[i].checked) return false;
        }
        return true;
      },
      set(value) {
        console.log('VALUE', value);
        this.agreementData.map(el => ({ ...el, checked: value }));
      }
    }
  },

  created() {
    let agreementData = [
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
    ].map(el => ({ ...el, checked: false }));
    this.agreementData = agreementData;
  },

  methods: {
    getAllSelect() {
      if (!this.allSelected) {
        this.agreementData = this.agreementData.map(el => ({
          ...el,
          checked: true
        }));
      } else {
        this.agreementData = this.agreementData.map(el => ({
          ...el,
          checked: false
        }));
      }
    },

    checkExcept(agreement) {
      console.log(agreement.title, agreement.checked);
      if (
        agreement.title === '이벤트/마케팅 수신 동의' &&
        agreement.checked === true
      ) {
        this.agreementData.map(el => {
          el.title === '야간 혜택 알림 수신 동의' && el.checked === true
            ? (el.checked = false)
            : el;
        });
      }

      if (
        agreement.title === '이벤트/마케팅 수신 동의' &&
        agreement.checked != true
      ) {
        this.agreementData.map(el => {
          el.title === '야간 혜택 알림 수신 동의' && el.checked != true
            ? (el.checked = true)
            : el;
        });
      }
      if (
        agreement.title === '야간 혜택 알림 수신 동의' &&
        agreement.checked != true
      ) {
        this.agreementData.map(el => {
          el.title === '이벤트/마케팅 수신 동의' && el.checked != true
            ? (el.checked = true)
            : el;
        });
      }
      if (agreement === '이벤트/마케팅 수신 동의') {
        this.checkedNames = this.checkedNames.concat(
          '야간 혜택 알림 수신 동의',
          '이벤트/마케팅 수신 동의'
        );
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
