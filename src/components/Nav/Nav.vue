<template>
  <div class="Nav">
    <img
      class="home-banner"
      src="https://image.brandi.me/home/banner/bannerImage_159279_1593394935.jpg"
      alt="bannerImg"
    />
    <div class="nav-box">
      <div class="brandi-logo" @click="goHome">
        <!-- :to="'/' + String(`${CATEGORY[Object.keys(CATEGORY)[3]]}`)" -->
        <router-link to="/" class="logo-link">
          <!-- <a class="logo-link"> -->
          <img
            class="logo"
            src="https://web-staging.brandi.co.kr/static/3.50.6/images/logo@3x.png"
            alt="brandiLogo"
          />
          <!-- </a> -->
        </router-link>
      </div>
      <div class="search-box">
        <form class="search-bar">
          <button class="search-btn"></button>
          <input class="search-input" type="text" />
        </form>
      </div>
      <div class="upper-menubox">
        <a class="menu" href="#">찜</a>
        ㅣ
        <a class="menu" href="/cart">장바구니</a>
        ㅣ
        <a class="menu" href="/mypage">마이페이지</a>
        ㅣ
        <span @click="changeRoute" class="menu" href="/login">{{
          loginStatus
        }}</span>
        ㅣ
        <a class="menu" href="http://wwww.brandiinc.com/brandi" target="_blank"
          >입점문의</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
const serviceStore = 'serviceStore';

export default {
  name: 'Nav',
  data() {
    return {
      token: '',
      loginStatus: '로그인'
    };
  },
  created() {
    this.token = localStorage.getItem('access_token');
    console.log('thisTOKEN', this.token);
  },
  computed: {
    ...mapGetters(serviceStore, ['getCategories', 'getTitle']),
    categories() {
      return this.getCategories;
    },
    titles() {
      return this.getTitle;
    }
  },
  watch() {
    this.changeRoute();
  },
  methods: {
    ...mapActions(serviceStore, ['updateCategories', 'updateTitle']),

    goHome() {
      this.updateTitle({ title: String('/') });
      console.log(this.titles.title);
    },
    changeRoute() {
      if (this.token != undefined) {
        localStorage.removeItem('access_token');
        this.loginStatus = '로그아웃';
        this.$router.push('/');
      } else {
        this.$router.push('/login');
        this.loginStatus = '로그인';
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Nav {
  min-width: 1300px;
  .home-banner {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .nav-box {
    display: flex;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px 40px;
    letter-spacing: -0.05em;
    font-family: 'Spoqa Han Sans', Sans-serif;
    .brandi-logo {
      display: flex;
      align-items: center;

      .logo-link {
        .logo {
          width: 150px;
          height: 25px;
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
        display: flex;
        border-radius: 20px;
        background-color: #eee;
        width: 505px;
        height: 40px;
        .search-btn {
          width: 30px;
          height: 30px;
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
      .menu {
        letter-spacing: -0.05em;
        color: #000000;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        line-height: 80px;
        text-align: center;
        transition: all 0.5s ease-in-out;
        &:hover {
          color: #ff204b;
        }
      }
    }
  }
}
</style>
