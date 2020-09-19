<template>
  <div class="Nav">
    <img
      class="homeBanner"
      src="https://image.brandi.me/home/banner/bannerImage_159279_1593394935.jpg"
      alt="bannerImg"
    />
    <div class="navBox">
      <div class="brandiLogo">
        <a class="logoLink" href="/">
          <img
            class="logo"
            src="https://web-staging.brandi.co.kr/static/3.50.6/images/logo@3x.png"
            alt="brandiLogo"
          />
        </a>
      </div>
      <div class="searchBox">
        <form class="searchBar">
          <button class="searchBtn"></button>
          <input class="searchInput" type="text" />
        </form>
      </div>
      <div class="upperMenuBox">
        <a class="menu" href="#">찜</a>
        ㅣ
        <a class="menu" href="/cart">장바구니</a>
        ㅣ
        <a class="menu" href="/mypage">마이페이지</a>
        ㅣ
        <a class="menu" href="/login">로그인</a>
        ㅣ
        <a class="menu" href="http://wwww.brandiinc.com/brandi" target="_blank"
          >입점문의</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
.Nav {
  .homeBanner {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .navBox {
    display: flex;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px 40px;
    letter-spacing: -0.05em;
    font-family: 'Spoqa Han Sans', Sans-serif;
    .brandiLogo {
      display: flex;
      align-items: center;
      .logoLink {
        .logo {
          width: 150px;
          height: 25px;
          cursor: pointer;
        }
      }
    }
    .searchBox {
      margin-top: 20px;
      padding: 0 8%;
      .searchBar {
        display: flex;
        border-radius: 20px;
        background-color: #eee;
        width: 505px;
        height: 40px;
        .searchBtn {
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
        .searchInput {
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
    .upperMenuBox {
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
      }
    }
  }
}
</style>
