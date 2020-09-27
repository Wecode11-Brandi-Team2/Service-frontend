<template>
  <main>
    <section class="ordered-title-container">
      <h1 class="title">주문하기</h1>
    </section>
    <section class="ordered-process-container">
      <div class="ordered-process-wrapper">
        <div class="ordered-product-container">
          <div class="ordered-product-title">브랜디 배송 상품</div>
          <div>
            <table class="ordered-item-table">
              <thead class="ordered-item-table-head">
                <tr>
                  <th class="seller-name">알콜</th>
                  <th></th>
                  <th class="price-text">주문금액</th>
                </tr>
              </thead>
              <tbody>
                <tr class="ordered-item-info-line">
                  <td>
                    <img
                      class="ordered-item-img"
                      alt="ordered item image"
                      src="https://image.brandi.me/cproduct/2020/05/07/16132323_1588862780_image1_S.jpg"
                    />
                  </td>
                  <td class="orderd-product-info">
                    <div class="item-name">
                      네츄럴 시스루 단추 니트 (5color)_ 알콜
                    </div>
                    <div>Black/Free</div>
                    <div>1개</div>
                  </td>
                  <td class="price">
                    <span>16,100원</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="total-price">
              총 주문금액
              <span>16,100원</span>
            </div>
          </div>
        </div>
        <div>
          <h2 class="orderer-info-title">주문자 정보</h2>
          <div>
            <table class="orderer-info-table">
              <tbody>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">이름</th>
                  <td class="orderer-info">
                    <input class="name-input" type="text" placeholder="이름" />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">휴대폰</th>
                  <td class="orderer-info">
                    <input class="phone-input" type="tel" maxlength="3" />
                    -
                    <input class="phone-input" type="tel" maxlength="4" />
                    -
                    <input class="phone-input" type="tel" maxlength="4" />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">이메일</th>
                  <td class="orderer-info">
                    <input class="email-input" type="text" />
                    @
                    <input class="email-input" type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="orderer-info-title">
            배송지 정보
            <span class="change-shipping-destination-btn">변경하기</span>
          </h2>
          <div>
            <table class="orderer-info-table">
              <tbody>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">수령인</th>
                  <td class="orderer-info">
                    <input class="name-input" type="text" placeholder="이름" />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">휴대폰</th>
                  <td class="orderer-info">
                    <input class="phone-input" type="tel" maxlength="3" />
                    -
                    <input class="phone-input" type="tel" maxlength="4" />
                    -
                    <input class="phone-input" type="tel" maxlength="4" />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">배송주소</th>
                  <td class="orderer-info">
                    <input class="address-input" type="text" />
                    <br />
                    <input class="address-input" type="text" />
                    <input
                      class="address-input"
                      placeholder="readonly"
                      readonly="readonly"
                      type="text"
                    />
                    <div class="delivery-add-info-text">
                      * 제주도, 도서 산간 지역 등은 배송이 하루 이상 추가 소요될
                      수 있습니다
                    </div>
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">배송메모</th>
                  <td class="orderer-info">
                    <div
                      @click="toggleDropdown"
                      class="select-requests-dropdown"
                    >
                      <div>배송시 요청사항을 선택해주세요</div>
                      <div
                        class="dropdown-icon"
                        :style="{
                          transform: isDropdownActive
                            ? 'scaleY(' + -1 + ')'
                            : 'scaleY(' + 1 + ')'
                        }"
                      />
                    </div>
                    <div class="dropdown-root"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="orderer-info-title total-price">최종 결제 금액</h2>
          <div class="total-price-table-container">
            <table class="total-price-table">
              <tbody>
                <tr>
                  <td class="total-text">총 상품금액</td>
                  <td class="each-price">16,100 원</td>
                </tr>
                <tr>
                  <td class="total-text">총 배송비</td>
                  <td class="each-price">0 원</td>
                </tr>
                <tr>
                  <td class="total-text estimated-payment-amount-text">
                    결제 예상 금액
                  </td>
                  <td class="each-price estimated-payment-amount">16,100 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="payment-container">
            <button class="payment" type="submit">결제하기</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isDropdownActive: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.ordered-title-container {
  padding-top: 40px;
  margin-bottom: 90px;

  .title {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
  }
}

.ordered-process-container {
  @include setFlex(center, null, null);

  .ordered-process-wrapper {
    width: 100%;
    max-width: 1300px;
    padding: 0 20px;
    margin: 0px auto;

    .ordered-product-container {
      margin-bottom: 90px;

      .ordered-product-title {
        font-weight: bold;
        font-size: 26px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .ordered-item-table {
        width: 100%;
        border-bottom: 1px solid #000;
        border-top: 1px solid #000;
        font-size: 17px;

        th,
        td {
          padding: 19px 10px;
        }

        .ordered-item-table-head {
          border-bottom: 1px solid #e1e1e1;

          .seller-name {
            width: 130px;
            text-align: start;
            font-weight: bold;
          }

          .price-text {
            width: 190px;
          }
        }

        .ordered-item-info-line {
          font-size: 17px;
        }

        .ordered-item-img {
          @include setSize(95px, 95px);
        }

        .orderd-product-info {
          vertical-align: middle;
          line-height: 25px;

          div {
            color: #9e9e9e;
            font-weight: 400;
          }

          .item-name {
            margin-bottom: 4px;
            font-weight: 500;
            color: #000;
          }
        }

        .price {
          text-align: center;
          vertical-align: middle;
          font-weight: 700;
        }
      }

      .total-price {
        padding: 35px 0 35px 10px;
        text-align: right;
        font-size: 26px;
        font-weight: 700;

        span {
          color: #ff204b;
        }
      }
    }

    .orderer-info-title {
      position: relative;
      padding-bottom: 10px;
      font-size: 26px;

      .change-shipping-destination-btn {
        position: absolute;
        right: 0;
        color: #1e88e5;
      }
    }

    .orderer-info-table {
      width: 100%;
      border-top: 1px solid #000;
      margin-bottom: 90px;

      .orderer-info-line {
        border-bottom: 1px solid #bdbdbd;

        &:last-child {
          border-bottom: 1px solid #000;
        }

        .orderer-info-subject {
          width: 20%;
          padding: 25px 15px;
          text-align: left;
          vertical-align: middle;
          font-weight: 700;
        }

        .orderer-info {
          width: 80%;
          padding: 10px 15px;
          vertical-align: middle;

          .name-input {
            @include setSize(100%, 100%);
            padding: 13px;
            margin: 3px 0px;
            border: none;
            font-size: 14px;
            background: #f5f5f5;
            color: #8d8d8d;

            &:focus {
              outline: none;
            }
          }

          .phone-input {
            width: 80px;
            padding: 13px;
            margin: 3px 0;
            border: none;
            text-align: center;
            font-size: 14px;
            background: #f5f5f5;
            color: #8d8d8d;

            &:focus {
              outline: none;
            }
          }

          .email-input {
            width: 28%;
            padding: 13px;
            margin: 3px 0;
            border: none;
            font-size: 14px;
            background: #f5f5f5;
            color: #8d8d8d;

            &:focus {
              outline: none;
            }
          }

          .address-input {
            width: 49%;
            padding: 13px;
            margin: 3px 0;
            border: none;
            font-size: 14px;
            background: #f5f5f5;
            color: #8d8d8d;

            &:focus {
              outline: none;
            }
          }

          .delivery-add-info-text {
            padding-bottom: 3px;
            margin-top: 10px;
            line-height: 20px;
            font-size: 13px;
            color: #9e9e9e;
          }

          .select-requests-dropdown {
            @include setFlex(space-between, center, null);
            padding: 13px 20px;
            background-color: #f5f5f5;
            color: #8d8d8d;
            line-height: 16px;
            font-size: 14px;

            .dropdown-icon {
              display: inline-block;
              @include setSize(16px, 16px);
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid Meet' width='100' height='100'%3e%3cpath d='M100 5.5c0 1.3-.5 2.6-1.5 3.5L50 57.5 1.5 9c-2-2-2-5.1 0-7.1s5.1-2 7.1 0L50 43.4 91.5 1.9c2-2 5.1-2 7.1 0 .9 1 1.4 2.3 1.4 3.6z'/%3e%3c/svg%3e");
              background-size: 90%;
              background-repeat: no-repeat;
              background-position: top 4px center;
              opacity: 0.4;
            }
          }

          .dropdown-root {
            position: relative;
          }
        }
      }
    }

    .total-price {
      font-weight: 300;
    }

    .total-price-table-container {
      padding: 20px 0;
      margin-bottom: 50px;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;

      .total-price-table {
        width: 100%;

        td {
          font-size: 15.6px;
          line-height: 25px;
        }

        .total-text {
          width: 50%;
          padding: 10px 20px;
        }

        .each-price {
          width: 50%;
          padding: 10px 20px;
          text-align: right;
        }

        .estimated-payment-amount-text {
          @include setFont(26px, null, bold);
        }

        .estimated-payment-amount {
          @include setFont(26px, #ff204b, bold);
        }
      }
    }

    .payment-container {
      text-align: center;

      .payment {
        width: 100%;
        max-width: 290px;
        padding: 25px;
        text-align: center;
        line-height: 25px;
        background-color: #000;
        color: #fff;
        font-size: 19.5px;

        &:hover {
          transition-duration: 0.3s;
          background-color: #ffd0d5;
          color: #000;
        }
      }
    }
  }
}
</style>
