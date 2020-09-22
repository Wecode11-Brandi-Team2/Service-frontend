<template>
  <section>
    <section class="Login">
      <div class="login-container">
        <div class="word-wrapper">
          <span class="arrive-word"> 오늘 사면 내일 도착! </span>
          <span class="free-word"> 무료배송으로 내일 받는 브랜디 LOGIN </span>
        </div>
        <div>
          <input class="user-input" type="text" placeholder="아이디 입력" />
          <input
            class="user-input"
            type="password"
            placeholder="비밀번호 입력"
          />
        </div>
        <div>
          <button class="login-button">로그인</button>
          <button class="login-button ">회원가입</button>
        </div>
        <div class="find-id-pw">
          <a href="">아이디 찾기</a>
          <span>|</span>
          <a href="">비밀번호 찾기</a>
        </div>
        <div class="sign-word">간편로그인<span>/</span>가입</div>
        <div class="import-google-button">
          <!-- <div class="google-login-button">
            <a>
              <img
                alt="googleLogin"
                src="https://web-staging.brandi.co.kr/static/3.50.7/images/google-logo.png"
              />
              <span>Google</span>
              <span> 계정으로 계속하기</span>
            </a>
          </div> -->
        </div>
        <div id="my-signin2" v-on:click="fetchData"></div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    fetchData() {
      fetch('http://10.251.1.125:5000/user/google_login', {
        method: 'POST',
        body: JSON.stringify({
          name: sessionStorage.getItem()
        })
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            alert('저장 완료');
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';
.Login {
  max-width: 1300px;
  padding: 50px 20px;
  width: 100%;
  margin: 0px auto;

  .login-container {
    max-width: 600px;
    margin: 10px auto;
    padding: 16px;

    .word-wrapper {
      @include setFlex(center, center, column);
      margin-bottom: 10px;

      .arrive-word {
        margin-top: 20px;
        font-size: 34px;
        font-weight: bold;
        color: #ff204b;
      }

      .free-word {
        @include setFont(34px, null, 700);
        transition: all 0.5s ease-in-out;

        &:hover {
          @include setFont(34px, #ff204b, null);
        }
      }
      span {
        margin: 10px 0;
      }
    }
  }
}

.sign-word {
  @include setFont(17px, null, 700);
  text-align: center;
  padding-top: 40px;
  padding-bottom: 25px;
  border-top: 0.5px solid #e1e1e1;
  letter-spacing: 5px;
}

.find-id-pw {
  @include setFlex(flex-end, center, null);
  padding: 18px 0;
  letter-spacing: 1px;
  color: #aaa;
  font-size: 13px;

  a {
    color: #666;
    font-size: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: black;
    }
  }
  span {
    margin: 0 10px;
  }
}
.user-input {
  @include setSize(100%, 50px);
  margin: 4px 0;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  font-size: 14px;
  transition: 0.5s linear;

  &:hover {
    border-color: black;
  }
}

.login-button {
  display: block;
  @include setSize(100%, 50px);
  margin: 10px 0px 2px 0px;
  line-height: 50px;
  border-radius: 4px;
  border: 1px solid #000000;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: #000000;
  }
}

input:focus {
  outline: none;
}

a {
  color: black;
  text-decoration: none;
}

/* .google-login-button {
  z-index: 10000;
  position: absolute;
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
} */
</style>
