<template>
  <div class="Footer">
    <div class="frame">
      <div class="footerTop">
        <div class="infoCs">
          <a class="cs" href="tel:1566-6575">고객센터 1566-6575</a>
          <p class="description">
            영업시간 : AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무)
          </p>
          <p class="description">점심시간 : PM 12:30 ~ PM 13:30</p>
        </div>
        <div class="linkSnsBox">
          <a class="linkQuestion" href="https://web-staging.brandi.co.kr/faq"
            >자주 묻는 질문</a
          >
          <a class="linkKakao" href="https://pf.kakao.com/_xexkxcxkl"
            >카톡 플러스 친구</a
          >
          <a class="linkFacebook" href="https://www.facebook.com/brandiapp/"
            >페이스북</a
          >
          <a
            class="linkInstagram"
            href="https://www.instagram.com/brandi__official"
            >인스타그램</a
          >
        </div>
      </div>
      <div class="footerBottom">
        <div>
          <div class="infoCompany">
            <p class="description">
              회사명 : ㈜브랜디 | 대표이사 : 서정민 | 사업자등록번호 :
              220-88-93187 | 통신판매업신고 : 2016-서울강남-00359 | 호스팅사업자
              : (주)브랜디
            </p>
            <p class="description">
              주소 : (06223) 서울특별시 강남구 테헤란로 32길 26 청송빌딩
            </p>
            <p class="description">
              개인정보관리책임자 : 윤석호(privacy@brandi.co.kr)
            </p>
            <p class="description">
              브랜디는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가
              등록한 상품정보 및 거래에 브랜디는 책임을 지지 않습니다.
            </p>
          </div>
          <div class="linkCompany">
            <a
              class="terms"
              href="https://web-staging.brandi.co.kr/access-term"
              target="_blank"
              >이용약관</a
            >
            <a
              class="privacy"
              href="https://web-staging.brandi.co.kr/policy"
              target="_blank"
              >개인정보처리방침</a
            >
            <a
              class="terms"
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208893187"
              target="_blank"
              rel="noreferrer noopener"
              >사업자정보확인</a
            >
          </div>
        </div>
        <div class="linkFamily">
          <a class="linkSeller" href="http://admin.brandi.co.kr" target="_blank"
            >셀러어드민</a
          >
          <a
            class="linkStand"
            href="http://www.brandiinc.com/brandi"
            target="_blank"
            >입점문의</a
          >
          <a
            ><img
              class="escrowMark"
              src="https://web-staging.brandi.co.kr/static/3.50.7/images/escrow.png"
              alt="에스크로 인증마크"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped lang="scss">
.footer {
  /* position: fixed; */
  bottom: 0px;
  width: 100%;
  margin-top: 50px;
  background: #1e1e1e;
  overflow: hidden;
  color: #fff;
  padding: 20px 0;
  .frame {
    margin: 0 70px;
    padding: 0 30px;
    .footerTop {
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      .infoCs {
        .cs {
          line-height: 1.5;
          font-size: 2.5em;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }
        .description {
          opacity: 0.56;
          font-size: 14px;
          margin: 0;
          line-height: 1.3;
        }
      }
      .linkSnsBox {
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        width: 447px;
        .linkQuestion {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_01.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
        .linkKakao {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_02.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
        .linkFacebook {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_03.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
        .linkInstagram {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_04.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
      }
    }
    .footerBottom {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-top: 1px solid #333;
      .infoCompany {
        margin-top: 10px;
        .description {
          opacity: 0.56;
          font-size: 14px;
          margin: 0;
          line-height: 1.5;
        }
      }
      .linkCompany {
        margin: 10px 0;
        .terms {
          padding-right: 10px;
          font-size: 13px;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }
        .privacy {
          font-size: 14px;
          font-weight: bold;
          padding-right: 10px;
          text-decoration: none;
          color: #fff;
          cursor: pointer;
        }
        .terms {
          padding-right: 10px;
          font-size: 13px;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }
        a:nth-child(n + 2):before {
          content: '|';
          display: inline;
          margin-right: 10px;
          font-size: 13px;
          font-weight: normal;
        }
        a:nth-child(n + 2):before {
          content: '|';
          display: inline;
          margin-right: 10px;
          font-size: 13px;
          font-weight: normal;
        }
      }
      .linkFamily {
        display: flex;
        justify-content: center;
        justify-content: space-between;
        align-items: center;
        width: 260px;
        height: 50px;
        .linkSeller {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_05.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
        .linkStand {
          color: #d4d4d4;
          font-size: 14px;
          line-height: 3em;
          text-decoration: none;
          cursor: pointer;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 4px;
            background: url('https://web-staging.brandi.co.kr/static/3.50.7/images/icon_footer_06.png')
              no-repeat 50%;
            background-size: 100% 100%;
            vertical-align: -7px;
          }
        }
        .escrowMark {
          width: 50px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
