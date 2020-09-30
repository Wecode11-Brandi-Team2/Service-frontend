<template>
  <div>
    <section>
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
          <div @click="showNumberCheck">
            <NextButton word="휴대폰 인증" />
          </div>
        </div>
      </div>
    </section>
    <section :class="[numberCheckActive ? 'number-check' : 'hidden']">
      <button class="quit-button" @click="showNumberCheck">나가기</button>

      <div class="number-check-container">
        <span class="explanation"
          >본인 확인을 위한 휴대폰 정보를 기입해주세요.</span
        >
        <div></div>

        <div class="phone-input-container">
          <div class="phone-input-wrapper">
            <select v-model="selected">
              <option selected>선택</option>
              <option
                v-for="option in options"
                :key="option.id + 'Hello'"
                :value="option.value"
                >{{ option.text }}
              </option></select
            >

            <input
              name="phone"
              v-model="phoneNumber"
              minlength="11"
              maxlength="11"
              @keydown="numberCheck"
            />
          </div>
          <div class="submit-button" @click="goToAgreement">
            <NextButton word="다음 단계로 이동" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';
import { mapActions } from 'vuex';
import axios from 'axios';
const serviceStore = 'serviceStore';

export default {
  name: 'SignUp',
  data() {
    return {
      phoneNumber: '',
      numberCheckActive: false,
      selected: '선택',
      allowKey: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '7',
        '8',
        '9',
        'Backspace',
        'ArrowRight',
        'ArrowLeft'
      ],
      options: [
        { id: 0, text: 'SKT', value: 'option1' },
        { id: 0, text: 'KT', value: 'option2' },
        { id: 0, text: 'LGU+', value: 'option3' },
        { id: 0, text: '알뜰폰', value: 'option4' }
      ]
    };
  },

  components: {
    SignUpNav,
    NextButton
  },
  // watch: {
  //   phoneNumber() {
  //     return (
  //       (this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, '')),
  //     );
  //   }
  // },
  methods: {
    ...mapActions(serviceStore, ['updatePhone']),

    numberCheck(event) {
      console.log(event.key);
      if (!this.allowKey.includes(event.key)) {
        event.preventDefault();
        return false;
      }
      return true;
    },
    fetchData() {
      let URL = `http://10.58.2.76:5000/api/products?first_category_id=${this.$route.params.title}&second_category_id=${this.$route.params.id}&main_category_id=4&is_promotion=${this.promotion}`;
      axios.get(URL).then(res => (this.productData = res.data.products));
    },
    showNumberCheck() {
      this.numberCheckActive = !this.numberCheckActive;
    },
    goToAgreement() {
      console.log(this.selected);
      if (this.phoneNumber.length >= 11 && this.selected != '선택') {
        this.updatePhone({ phone: this.phoneNumber });
        alert('저장되었습니다');
        this.$router.push('/agreement');
      }
      if (this.phoneNumber.length < 11) {
        console.log(this.selected);

        alert('휴대폰번호 11자리를 기입해주세요');
      }
      if (this.selected === '선택') {
        console.log(this.selected);

        alert('통신사를 선택해주세요');
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.number-check-container {
  z-index: 1000;
  position: relative;
  top: 25%;
  width: 100%;
  height: 100%;
  margin: auto;
  .explanation {
    text-align: center;
    display: block;
    margin: 50px 0;
    font-weight: 750;
    font-size: 25px;
  }
  .phone-input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;

    .phone-input-wrapper {
      display: flex;

      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      select {
        height: 60px;
        margin-right: 10px;
        font-size: 18px;
      }
      input {
        font-size: 18px;

        height: 60px;
        width: 100%;
      }
    }
  }
}

.submit-button {
  margin-top: 30px;
}

.hidden {
  display: none;
}

.number-check {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
}

.quit-button {
  font-size: 18px;
  font-weight: 300;
  border-radius: 2px;
  float: right;
  margin: 2% 2% 0 0;
  width: 50px;
  height: 50px;
  top: 2%;
  right: 1%;
  transition: all 0.5s ease-in-out;
  color: white;
  background-color: black;
  border: 1px solid black;
  &:hover {
    color: black;
    background-color: white;
  }
}

a {
  text-decoration: none;
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
