<template>
  <div class="google-information">
    <section class="nav-wrapper">
      <SignUpNav title="회원가입" />
    </section>
    <div class="information-wrapper">
      <div class="email-input-container">
        <div class="email-input-wrapper">
          <input type="text" placeholder="아이디 입력" v-model="loginId" />
          <!-- {{ loginId }} -->
          <span class="explanation"
            >브랜디에서 사용할 아이디 정보를 입력해주세요.</span
          >
        </div>
      </div>

      <div class="code-input-wrapper">
        <span class="title-code">추천인 코드</span>
        <input type="text" placeholder="추천인 코드 (선택사항)" />
        <span class="code-explanation"
          >추천인 코드를 입력하시면 1000포인트가 지급됩니다.
        </span>
        <div class="line-scond" />
      </div>

      <div @click="fetchData">
        <NextButton word="다음" />
      </div>
    </div>
  </div>
</template>

<script>
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';
import axios from 'axios';
import { mapGetters } from 'vuex';
const serviceStore = 'serviceStore';

export default {
  name: 'GoogleInformation',

  components: { SignUpNav, NextButton },

  data() {
    return { loginId: 'inputId' };
  },

  created: function() {},

  computed: {
    ...mapGetters(serviceStore, ['getAccess', 'getPhone']),
    accesses() {
      return this.getAccess;
    },
    phones() {
      return this.getPhone;
    }
  },
  mounted() {
    console.log(localStorage.getItem('access_token'));
  },
  methods: {
    fetchData() {
      console.log('login?');
      console.log(this.accesses.access, this.phones.phone, this.loginId);
      let URL = 'http://10.251.1.139:5000/api/user/googleSignup';
      axios
        .post(URL, {
          access_token: this.accesses.access,
          phone_number: this.phones.phone,
          login_id: this.loginId
        })
        .then(res => console.log(res))
        .then(res =>
          localStorage.setItem('access_token', res.data.access_token)
        );
      this.$router.push('/complete');
      console.log(localStorage);
    }
  }
};
</script>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.line {
  height: 1px;
  margin: 20px 0;
  width: 570;
  background-color: #dfdfdf;
}

.line-scond {
  height: 1px;
  margin: 10px 0;
  width: 570;
  background-color: #dfdfdf;
}

.google-information {
  margin-top: 50px;
}

.explanation {
  padding: 10px 0px;
  color: #4c4c4c;
  margin-bottom: 15px;
}
.code-explanation {
  padding: 10px 0px;
  color: #4c4c4c;
  margin-bottom: 5px;
}
.title-code {
  margin: 10px 0;
  padding-top: 5px;
  font-size: 18px;
  font-weight: 700;
}

.information-wrapper {
  padding-top: 50px;
  max-width: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .nav-wrapper {
    padding-top: 50px;
  }

  .email-input-container {
    width: 100%;
  }
  .email-input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pw-input-container {
    width: 100%;
    .pw-input-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .code-input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

input {
  background: #ffffff;
  border: 1px solid #e1e1e1;
  width: 100%;
  padding: 10px;
  margin: 0px;
  border-radius: 2px;
  height: 40px;
}
</style>
