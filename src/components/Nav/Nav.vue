<template>
  <div class="Nav">
    <img
      class="home-banner"
      src="https://image.brandi.me/home/banner/bannerImage_159279_1593394935.jpg"
      alt="bannerImg"
    />
    <div class="nav-box">
      <div class="brandi-logo" @click="goHome">
        <router-link to="/" class="logo-link">
          <img
            class="logo"
            src="https://web-staging.brandi.co.kr/static/3.50.6/images/logo@3x.png"
            alt="brandiLogo"
          />
        </router-link>
      </div>
      <div class="search-box">
        <form class="search-bar">
          <button @click="testToken" class="search-btn"></button>
          <input class="search-input" type="text" @input="handleKeyword" />
        </form>
      </div>
      <div class="upper-menubox">
        <a class="menu">찜</a>
        ㅣ
        <a class="menu">장바구니</a>
        ㅣ
        <a class="menu" @click="goLogin">마이페이지</a>
        ㅣ
        <router-link to="/login" v-if="!have">
          <span @click="doLogIn" class="show-login-status">로그인</span>
        </router-link>
        <router-link to="/" v-else>
          <span
            @click="
              doLogOut();
              logout();
            "
          >
            로그아웃</span
          >
        </router-link>
        ㅣ
        <a class="menu">입점문의</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
const serviceStore = 'serviceStore';
const myPageStore = 'myPageStore';

export default {
  name: 'Nav',
  data() {
    return {
      queryString: '',
      have: false
    };
  },
  created() {
    let haveTok = localStorage.getItem('access_token');
    if (haveTok) {
      this.have = !this.have;
    }
  },

  computed: {
    ...mapGetters(serviceStore, ['getCategories', 'getTitle']),
    ...mapGetters(myPageStore, ['isLogin']),
    categories() {
      return this.getCategories;
    },
    titles() {
      return this.getTitle;
    },
    token() {
      return this.isLogin;
    }
  },

  methods: {
    ...mapActions(serviceStore, ['updateCategories', 'updateTitle']),
    ...mapActions(myPageStore, ['logout']),

    doLogIn() {
      console.log('로그인을 해보자');
    },
    doLogOut() {
      let yetToken = localStorage.getItem('access_token');
      if (yetToken) {
        this.have = !this.have;
      }
    },
    testToken(e) {
      e.preventDefault();
      this.$router.push(`/search?q=${this.queryString}`);
    },
    changeRoute() {
      if (localStorage.getItem('access_token')) {
        localStorage.removeItem('access_token');
        this.$router.push('/');
        window.location.reload();
      } else {
        this.$router.push('/login');
        window.location.reload();
      }
    },

    goHome() {
      this.updateTitle({ title: String('/') });
    },

    goLogin() {
      if (localStorage.getItem('access_token') == undefined) {
        alert('로그인을 해주세요.');
        this.$router.push('/login');
      } else {
        this.$router.push('/mypage');
      }
    },
    handleKeyword(e) {
      this.queryString = e.target.value;
      // console.log(this.queryString);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.show-login-status {
  color: #ff204b;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: black;
  }
}

.Nav {
  min-width: 1300px;

  .home-banner {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .nav-box {
    @include setFlex(center, null, null);
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px 40px;
    letter-spacing: -0.05em;
    font-family: 'Spoqa Han Sans', Sans-serif;

    .brandi-logo {
      @include setFlex(null, center, null);

      .logo-link {
        .logo {
          @include setSize(150px, 25px);
          cursor: pointer;
        }
      }
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: matrix(1.1, 0, 0, 1.1, 1.1, 0);
      }
    }

    .search-box {
      margin-top: 20px;
      padding: 0 8%;

      .search-bar {
        @include setSize(505px, 40px);
        display: flex;
        border-radius: 20px;
        background-color: #eee;

        .search-btn {
          @include setSize(30px, 30px);
          margin: 5px;
          margin-left: 15px;
          padding: 10px 0;
          background: url('https://web-staging.brandi.co.kr/static/3.50.6/images/a-action-bar-icon-search-nor.png')
            no-repeat center center;
          background-size: 22px;
          border: 0px;
          overflow: hidden;
          outline: none;
        }

        .search-input {
          margin: 0 auto;
          background: none;
          font-size: 14px;
          line-height: 20px;
          padding: 5px;
          border: 0px;
          width: calc(100% - 58px);
          outline: none;
        }
      }
    }

    .upper-menubox {
      line-height: 80px;
      text-align: center;

      .menu,
      a {
        @include setFont(14px, #000000, null);
        letter-spacing: -0.05em;
        text-decoration: none;
        line-height: 80px;
        text-align: center;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #ff204b;
        }
      }

      a,
      a:visit {
        text-decoration: none;
      }
    }
  }
}
</style>
