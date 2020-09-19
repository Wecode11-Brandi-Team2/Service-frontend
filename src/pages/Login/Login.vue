<template>
  <section class="Login">
    <div class="loginContainer">
      <div class="wordWrapper">
        <span class="arriveWord"> 오늘 사면 내일 도착! </span>
        <span class="freeWord"> 무료배송으로 내일 받는 브랜디 LOGIN </span>
      </div>
      <div>
        <input class="idInput" type="text" placeholder="아이디 입력" />
        <input class="pwInput" type="password" placeholder="비밀번호 입력" />
      </div>
      <div>
        <button class="loginButton">로그인</button>
        <button class="signUpButton">회원가입</button>
      </div>
      <div class="findIdPw">
        <a href="">아이디 찾기</a> |
        <a href="">비밀번호 찾기</a>
      </div>
      <div class="signWord">간편로그인/가입</div>

      <div class="googleLoginButton">
        <a href="">
          <img
            alt="googleLogin"
            src="https://web-staging.brandi.co.kr/static/3.50.7/images/google-logo.png"
          />
          <span>Google</span>
          <span> 계정으로 계속하기</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
};
</script>

<style scoped lang="scss">
input:focus {
  outline: none;
}

.Login {
  max-width: 1300px;
  padding: 0 20px;
  width: 100%;
  margin: 0px auto;
  .loginContainer {
    width: 100%;
    max-width: 600px;
    margin: 10px auto;
    padding: 16px;
    .wordWrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      span {
        margin: 10px 0;
      }
    }
  }
}

a {
  color: black;
  text-decoration: none;
}

.signWord {
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 30px;
  border-top: 0.5px solid gray;
}

.findIdPw {
  text-align: right;
  padding: 10px 0;
  a {
    color: #666;
    font-size: 14px;
  }
}
.idInput {
  height: 50px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin: 4px 0;
  width: 100%;
  padding: 10px;
}
.pwInput {
  height: 50px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin: 4px 0;
  width: 100%;
  padding: 10px;
}

.loginButton {
  height: 50px;
  padding: 0;
  line-height: 50px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0px 2px 0px;
  color: #000000;
  display: block;
  text-align: center;
  border: 1px solid #000000;
  width: 100%;
  background: #ffffff;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #ffffff;
    background: #000000;
  }
}
.signUpButton {
  height: 50px;
  padding: 0;
  line-height: 50px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0px 2px 0px;
  color: #000000;
  display: block;
  text-align: center;
  border: 1px solid #000000;
  width: 100%;
  background: #ffffff;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #ffffff;
    background: #000000;
  }
}

.googleLoginButton {
  cursor: pointer;
  text-align: center;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 0;
  border-radius: 5px;
  line-height: 50px;
  transition: all 0.5s ease-in-out;
  img {
    width: 28px;
    vertical-align: -8px;
    margin-right: 10px;
  }
  a {
    transition: all 0.5s ease-in-out;

    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
  }

  &:hover {
    background-color: black;

    a {
      color: #ffffff;
    }
  }
}
.arriveWord {
  color: #ff204b;
  font-size: 34px;
  font-weight: bold;
  margin: 0;
  margin-top: 20px;
}
.freeWord {
  font-size: 32px;
  font-weight: 100;
}
</style>
