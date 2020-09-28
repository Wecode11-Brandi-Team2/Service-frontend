<template>
  <div class="information">
    <section class="nav-wrapper">
      <SignUpNav title="회원가입" />
    </section>
    <div class="information-wrapper">
      <div class="email-input-container">
        <div class="email-input-wrapper">
          <input type="text" placeholder="이메일 입력" />
          <input type="text" placeholder="이메일 입력" />
          <span class="explanation"
            >이메일 정보는 비밀번호 찾기시 사용됩니다.</span
          >
        </div>
      </div>
      <div class="pw-input-container">
        <div class="pw-input-wrapper">
          <input type="password" placeholder="비밀번호 입력" />
          <input type="password" placeholder="비밀번호 입력" />
        </div>
        <div class="line" />
      </div>
      <div class="code-input-wrapper">
        <span class="title-code">추천인 코드</span>
        <input type="text" placeholder="추천인 코드 (선택사항)" />
        <span class="code-explanation"
          >추천인 코드를 입력하시면 1000포인트가 지급됩니다.
        </span>
        <div class="line-scond" />
      </div>
      <router-link to="/complete">
        <NextButton word="다음" />
      </router-link>
    </div>
  </div>
</template>

<script>
import SignUpNav from './components/SignUpNav';
import NextButton from './components/NextButton';
import axios from 'axios';

export default {
  name: 'Information',
  components: { SignUpNav, NextButton },
  method: {
    fetchData() {
      let URL = 'http://10.251.1.139:5000/api/user/googleSignup';
      axios
        .post(URL, {
          access_token: localStorage.getItem('access_token'),
          phone_number: this.phoneNumber,
          login_id: this.loginId
        })
        .then(res => (this.productData = res.data.products));
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

.information {
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
