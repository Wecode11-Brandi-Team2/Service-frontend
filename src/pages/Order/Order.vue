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
                  <th class="seller-name">
                    {{ selectedOption.seller_name }}
                  </th>
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
                      :src="selectedOption.image"
                    />
                  </td>
                  <td class="orderd-product-info">
                    <div class="item-name">
                      {{ selectedOption.name }}
                    </div>
                    <div>
                      {{ selectedOption.selectedColor.color }}/{{
                        selectedOption.selectedSize.size
                      }}
                    </div>
                    <div>{{ selectedOption.total_amount }}개</div>
                  </td>
                  <td class="price">
                    <span
                      >{{ selectedOption.total_price.toLocaleString() }}원</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="total-price">
              총 주문금액
              <span>{{ selectedOption.total_price.toLocaleString() }}원</span>
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
                    <input
                      v-model="paymentData.orderer_name"
                      class="name-input"
                      type="text"
                      placeholder="이름"
                    />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">휴대폰</th>
                  <td class="orderer-info">
                    <input
                      v-model="paymentData.orderer_phone_1"
                      class="phone-input"
                      type="tel"
                      maxlength="3"
                    />
                    -
                    <input
                      v-model="paymentData.orderer_phone_2"
                      class="phone-input"
                      type="tel"
                      maxlength="4"
                    />
                    -
                    <input
                      v-model="paymentData.orderer_phone_3"
                      class="phone-input"
                      type="tel"
                      maxlength="4"
                    />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">이메일</th>
                  <td class="orderer-info">
                    <input
                      v-model="paymentData.orderer_email_1"
                      class="email-input"
                      type="text"
                    />
                    @
                    <input
                      v-model="paymentData.orderer_email_2"
                      class="email-input"
                      type="text"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 class="orderer-info-title">
            배송지 정보
            <span
              @click="
                writeDestination();
                getShippingList();
              "
              class="change-shipping-destination-btn"
              >{{ shippingLists.length === 0 ? '입력하기' : '변경하기' }}</span
            >
          </h2>
          <div>
            <table class="orderer-info-table">
              <tbody>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">수령인</th>
                  <td class="orderer-info">
                    <input
                      class="name-input"
                      type="text"
                      placeholder="이름"
                      v-model="selectedAddress.reciever"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">휴대폰</th>
                  <td class="orderer-info">
                    <input
                      class="phone-input"
                      type="tel"
                      maxlength="3"
                      v-model="applyTel_1"
                      readonly
                    />
                    -
                    <input
                      class="phone-input"
                      type="tel"
                      maxlength="4"
                      v-model="applyTel_2"
                      readonly
                    />
                    -
                    <input
                      class="phone-input"
                      type="tel"
                      maxlength="4"
                      v-model="applyTel_3"
                      readonly
                    />
                  </td>
                </tr>
                <tr class="orderer-info-line">
                  <th class="orderer-info-subject">배송주소</th>
                  <td class="orderer-info">
                    <input
                      class="address-input"
                      v-model="selectedAddress.zone_code"
                      readonly
                      type="text"
                    />
                    <br />
                    <input
                      class="address-input"
                      v-model="selectedAddress.address"
                      readonly
                      type="text"
                    />
                    <input
                      class="address-input"
                      v-model="selectedAddress.detail_address"
                      readonly
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
                      <div>{{ selectedRequest }}</div>
                      <div
                        class="dropdown-icon"
                        :style="{
                          transform: isDropdownActive
                            ? 'scaleY(' + -1 + ')'
                            : 'scaleY(' + 1 + ')'
                        }"
                      />
                    </div>
                    <div class="dropdown-root">
                      <ul class="shipping-memo" v-if="isDropdownActive">
                        <li
                          v-for="request in shippingRequests"
                          :key="request.id"
                          @click="selectRequest(request)"
                        >
                          {{ request.request }}
                        </li>
                      </ul>
                    </div>
                    <input
                      v-if="isMemoActive"
                      v-model="shippingMemoWritten"
                      type="text"
                      class="write-memo"
                      placeholder="50자 이내로 작성해주세요"
                      maxlength="50"
                    />
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
                  <td class="each-price">
                    {{ selectedOption.total_price.toLocaleString() }} 원
                  </td>
                </tr>
                <tr>
                  <td class="total-text">총 배송비</td>
                  <td class="each-price">0 원</td>
                </tr>
                <tr>
                  <td class="total-text estimated-payment-amount-text">
                    결제 예상 금액
                  </td>
                  <td class="each-price estimated-payment-amount">
                    {{ selectedOption.total_price.toLocaleString() }}
                    원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="payment-container">
            <button @click="makePayment" class="payment" type="submit">
              결제하기
            </button>
          </div>
        </div>
      </div>
    </section>
    <transition name="modal">
      <div class="destination-modal" v-if="isModalAcitve">
        <div class="modal">
          <!-- 배송지변경 start -->
          <div v-if="!isAddDestination && !isModifyDestination">
            <div class="modal-header-wrapper">
              <h2 class="modal-header">
                <span>배송지 변경</span>
                <i @click="writeDestination" class="close-btn fas fa-times" />
              </h2>
            </div>
            <div class="content-wrapper">
              <!-- 등록된 배송지가 없는 경우 start -->
              <div class="no-content" v-if="this.shippingLists.length === 0">
                <i class="fas fa-exclamation-circle" />
                <span>저장된 배송지가 없습니다</span>
              </div>
              <!-- 등록된 배송지가 없는 경우 end -->
              <!-- 등록된 배송지가 있는 경우 start -->
              <ul>
                <li
                  class="destination-list"
                  :style="{ borderColor: list.is_default ? '#000' : '' }"
                  v-for="list in shippingLists"
                  :key="list.id"
                >
                  <div>
                    <p class="info-name-wrapper">
                      <strong class="info-name">{{ list.reciever }}</strong>
                      <span v-show="list.is_default">기본배송지</span>
                    </p>
                    <p class="address">{{ list.address }}</p>
                    <p class="address">{{ list.detail_address }}</p>
                    <p class="tel">{{ list.phone_number }}</p>
                    <p class="list-btn-wrapper">
                      <button
                        class="delete"
                        @click="deleteShippingAddress(list.id)"
                      >
                        삭제
                      </button>
                      <button
                        class="modify"
                        @click="modifyShippingAddress(list)"
                      >
                        수정
                      </button>
                      <button @click="selectAddress(list)" class="select">
                        선택
                      </button>
                    </p>
                  </div>
                </li>
              </ul>
              <!-- 등록된 배송지가 있는 경우 end -->
            </div>
            <div class="modal-footer-wrapper">
              <div
                @click="addDestination"
                :class="[
                  isFullLists
                    ? 'add-destination-btn-full'
                    : 'add-destination-btn'
                ]"
              >
                배송지추가({{ shippingLists.length }}/5)
              </div>
            </div>
          </div>
          <!-- 배송지변경 end -->
          <!-- 배송지추가 start -->
          <div v-if="isAddDestination && !isModifyDestination">
            <div class="modal-header-wrapper">
              <h2 class="modal-header">
                <span>배송지 추가</span>
                <i @click="writeDestination" class="close-btn fas fa-times" />
              </h2>
            </div>
            <div class="content-wrapper">
              <div class="destination-info-container">
                <table class="destination-info-table">
                  <colgroup>
                    <col width="60px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="col">수령인</th>
                      <td scope="col">
                        <input
                          class="input-common recipient"
                          type="text"
                          placeholder="이름"
                          v-model="recipientName"
                          maxlength="24"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="col">휴대폰</th>
                      <td scope="col">
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="010"
                          v-model="tel_1"
                          maxlength="3"
                        />
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="0000"
                          v-model="tel_2"
                          maxlength="4"
                        />
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="0000"
                          v-model="tel_3"
                          maxlength="4"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" rowspan="3">배송지</th>
                      <td scope="col">
                        <input
                          class="input-common zip-code"
                          type="text"
                          readonly="readonly"
                          :value="zoneCode"
                        />
                        <div @click="findZipcode" class="find-zipcode-btn">
                          우편번호 찾기
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <div v-if="isActiveZipcode" class="daum-postcode-area">
                          <img
                            class="close-postcode-btn"
                            @click="closePostcodeArea"
                            alt="close-btn"
                            src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"
                          />
                          <vue-daum-postcode
                            @complete="getDestinationData($event)"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <input
                          class="input-common detail-address"
                          type="text"
                          readonly="readonly"
                          :value="address"
                        />
                        <input
                          class="input-common detail-address"
                          type="text"
                          placeholder="상세주소를 입력하세요."
                          v-model="detailAddress"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              @click="selectDefaultDestination"
              class="save-default-destination-wrapper"
            >
              <i
                class="far fa-check-square"
                :style="{ opacity: isSelectDefault ? 1 : '' }"
              />
              <span>기본 배송지로 저장</span>
            </div>
            <div class="modal-footer-wrapper">
              <div align="center">
                <div @click="cancelAddDestination" class="prev-btn">취소</div>
                <div @click="addShippingAddress" class="add-btn">완료</div>
              </div>
            </div>
          </div>
          <!-- 배송지추가 end -->
          <!-- 배송지수정 start -->
          <div v-if="isModifyDestination">
            <div class="modal-header-wrapper">
              <h2 class="modal-header">
                <span>배송지 수정</span>
                <i @click="writeDestination" class="close-btn fas fa-times" />
              </h2>
            </div>
            <div class="content-wrapper">
              <div class="destination-info-container">
                <table class="destination-info-table">
                  <colgroup>
                    <col width="60px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="col">수령인</th>
                      <td scope="col">
                        <input
                          class="input-common recipient"
                          type="text"
                          placeholder="이름"
                          v-model="recipientName_Modify"
                          maxlength="24"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="col">휴대폰</th>
                      <td scope="col">
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="010"
                          v-model="tel_1_Modify"
                          maxlength="3"
                        />
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="0000"
                          v-model="tel_2_Modify"
                          maxlength="4"
                        />
                        <input
                          class="input-common telephone"
                          type="tel"
                          placeholder="0000"
                          v-model="tel_3_Modify"
                          maxlength="4"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="col" rowspan="3">배송지</th>
                      <td scope="col">
                        <input
                          class="input-common zip-code"
                          type="text"
                          readonly="readonly"
                          :value="zoneCode_Modify"
                        />
                        <div @click="findZipcode" class="find-zipcode-btn">
                          우편번호 찾기
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <div v-if="isActiveZipcode" class="daum-postcode-area">
                          <img
                            class="close-postcode-btn"
                            @click="closePostcodeArea"
                            alt="close-btn"
                            src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png"
                          />
                          <vue-daum-postcode
                            @complete="modifyDestinationData($event)"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td scope="col">
                        <input
                          class="input-common detail-address"
                          type="text"
                          readonly="readonly"
                          :value="address_Modify"
                        />
                        <input
                          class="input-common detail-address"
                          type="text"
                          placeholder="상세주소를 입력하세요."
                          v-model="detailAddress_Modify"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              @click="modifyDefaultDestination"
              class="save-default-destination-wrapper"
            >
              <i
                class="far fa-check-square"
                :style="{ opacity: isSelectDefault_Modify ? 1 : '' }"
              />
              <span>기본 배송지로 저장</span>
            </div>
            <div class="modal-footer-wrapper">
              <div align="center">
                <div @click="cancelModifyDestination" class="prev-btn">
                  취소
                </div>
                <div @click="applyTheFix" class="add-btn">완료</div>
              </div>
            </div>
          </div>
          <!-- 배송지수정 end -->
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import { VueDaumPostcode } from 'vue-daum-postcode';
import axios from 'axios';
import URL from '../../assets/mock/URL.js';

export default {
  components: {
    VueDaumPostcode
  },
  data() {
    return {
      destinationData: {},
      isDropdownActive: false,
      selectedOption: {},
      selectedRequest: '배송시 요청사항을 선택해주세요',
      shippingRequests: [
        {
          id: 1,
          request: '배송시 요청사항을 선택해주세요'
        },
        {
          id: 2,
          request: '문 앞에 놓아주세요'
        },
        {
          id: 3,
          request: '경비(관리)실에 맡겨주세요'
        },
        {
          id: 4,
          request: '택배함에 넣어주세요'
        },
        {
          id: 5,
          request: '직접 받겠습니다'
        },
        {
          id: 6,
          request: '직접입력'
        }
      ],
      isMemoActive: false,
      isModalAcitve: false,
      isAddDestination: false,
      isModifyDestination: false,
      isSelectDefault: false,
      isActiveZipcode: false,
      zoneCode: '',
      address: '',
      recipientName: '',
      tel_1: '',
      tel_2: '',
      tel_3: '',
      detailAddress: '',
      shippingLists: [],
      selectedAddress: {},
      addressId: 0,
      applyTel_1: '',
      applyTel_2: '',
      applyTel_3: '',
      isFullLists: false,
      recipientName_Modify: '',
      tel_1_Modify: '',
      tel_2_Modify: '',
      tel_3_Modify: '',
      zoneCode_Modify: '',
      address_Modify: '',
      detailAddress_Modify: '',
      isSelectDefault_Modify: false,
      selectedRequestId: 1,
      paymentData: {
        orderer_name: '',
        orderer_phone_1: '',
        orderer_phone_2: '',
        orderer_phone_3: '',
        orderer_email_1: '',
        orderer_email_2: ''
      },
      shippingMemo: '',
      shippingMemoWritten: ''
    };
  },
  created() {
    this.getUserSelect();
  },
  methods: {
    makePayment() {
      const pay = this.paymentData;

      if (!pay.orderer_name) {
        alert('이름을 입력해주세요.');
        return;
      }
      if (
        !pay.orderer_phone_1 ||
        !pay.orderer_phone_2 ||
        !pay.orderer_phone_3
      ) {
        alert('휴대폰 번호를 입력해주세요.');
        return;
      }
      if (!pay.orderer_email_1 || !pay.orderer_email_2) {
        alert('이메일주소를 입력해주세요.');
        return;
      }
      if (this.selectedRequestId === 1) {
        alert('배송시 요청사항을 선택해주세요.');
      }

      const itemOption = JSON.parse(localStorage.getItem('selected_option'));
      const ordererPhone =
        pay.orderer_phone_1 + pay.orderer_phone_2 + pay.orderer_phone_3;
      const ordererEmail = `${pay.orderer_email_1}@${pay.orderer_email_2}`;
      const recieverPhone = `${this.applyTel_1}${this.applyTel_2}${this.applyTel_3}`;
      const recieverAddress = `${this.selectedAddress.address} ${this.selectedAddress.detail_address}`;
      if (1 < this.selectedRequestId && this.selectedRequestId < 6) {
        this.shippingMemo = this.selectedRequest;
      }
      if (this.selectedRequestId === 6) {
        this.shippingMemo = this.shippingMemoWritten;
      }

      const url = `${URL.PRODUCT_URL}/api/order`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      const body = {
        total_payment: itemOption.total_price,
        shipping_memo: this.shippingMemo,
        orderer_name: pay.orderer_name,
        orderer_phone: ordererPhone,
        orderer_email: ordererEmail,
        receiver_name: this.selectedAddress.reciever,
        receiver_phone: recieverPhone,
        receiver_address: recieverAddress,
        product_id: itemOption.p_id,
        price: itemOption.total_price,
        option_color: itemOption.selectedColor.color,
        option_size: itemOption.selectedSize.size,
        units: itemOption.total_amount
      };
      alert('결제가 완료되었습니다');
      this.$router.push('/');
      axios.post(url, body, headers).then(res => console.log(res));
    },
    identifyShippingListFull() {
      if (this.shippingLists.length === 5) {
        this.isFullLists = 1;
      } else {
        this.isFullLists = 0;
      }
    },
    cancelAddDestination() {
      this.isAddDestination = !this.isAddDestination;
    },
    selectAddress(list) {
      this.selectedAddress = list;
      this.applyTel_1 = this.selectedAddress.phone_number.slice(0, 3);
      this.applyTel_2 = this.selectedAddress.phone_number.slice(4, 8);
      this.applyTel_3 = this.selectedAddress.phone_number.slice(9);
      this.isModalAcitve = !this.isModalAcitve;
    },
    applyTheFix() {
      if (confirm('배송지를 수정 하시겠습니까?')) {
        const url = `${URL.PRODUCT_URL}/api/user/shippingAddress`;
        const access_token = localStorage.getItem('access_token');
        const headers = {
          headers: {
            Authorization: access_token
          }
        };
        const body = {
          id: this.addressId,
          address: this.address_Modify,
          detail_address: this.detailAddress_Modify,
          phone_number:
            this.tel_1_Modify +
            '-' +
            this.tel_2_Modify +
            '-' +
            this.tel_3_Modify,
          reciever: this.recipientName_Modify,
          is_default: this.isSelectDefault_Modify ? 1 : 0,
          zone_code: this.zoneCode_Modify
        };
        axios.put(url, body, headers).then(() => {
          axios.get(url, headers).then(res => {
            this.shippingLists = res.data;
            this.identifyShippingListFull();
          });
        });
        this.isModifyDestination = !this.isModifyDestination;
      }
    },
    cancelModifyDestination() {
      this.isModifyDestination = !this.isModifyDestination;
    },
    modifyShippingAddress(list) {
      this.isModifyDestination = !this.isModifyDestination;
      this.addressId = list.id;
      // 배송지 수정시 입력했던 값을 기억하는 부분
      this.recipientName_Modify = list.reciever;
      this.tel_1_Modify = list.phone_number.slice(0, 3);
      this.tel_2_Modify = list.phone_number.slice(4, 8);
      this.tel_3_Modify = list.phone_number.slice(9);
      this.zoneCode_Modify = list.zone_code;
      this.address_Modify = list.address;
      this.detailAddress_Modify = list.detail_address;
      this.isSelectDefault_Modify = list.is_default === 1 ? true : false;
    },
    getShippingList() {
      const url = `${URL.PRODUCT_URL}/api/user/shippingAddress`;
      const access_token = localStorage.getItem('access_token');
      const headers = {
        headers: {
          Authorization: access_token
        }
      };
      axios.get(url, headers).then(res => {
        this.shippingLists = res.data;
        console.log('배송지리스트', this.shippingLists);
        this.identifyShippingListFull();
      });
    },
    deleteShippingAddress(listId) {
      // 이 부분만 주석처리하면 배송지가 1개 남았을 때 삭제가 가능하다.
      if (this.shippingLists.length === 1) {
        alert(
          '배송지를 삭제할 수 없습니다. 배송지는 최소 1개 이상 등록해주세요.'
        );
        return;
      }
      // ---
      if (confirm('배송지를 삭제 하시겠습니까?')) {
        const url = `${URL.PRODUCT_URL}/api/user/shippingAddress/${listId}`;
        const access_token = localStorage.getItem('access_token');
        axios
          .delete(url, {
            headers: {
              Authorization: access_token
            }
          })
          .then(() => {
            axios
              .get(`${URL.PRODUCT_URL}/api/user/shippingAddress`, {
                headers: {
                  Authorization: access_token
                }
              })
              .then(res => {
                this.shippingLists = res.data;
                this.identifyShippingListFull();
              });
          });
      }
    },
    addShippingAddress() {
      if (confirm('배송지를 추가 하시겠습니까?')) {
        const url = `${URL.PRODUCT_URL}/api/user/shippingAddress`;
        const access_token = localStorage.getItem('access_token');
        const headers = {
          headers: {
            Authorization: access_token
          }
        };
        const body = {
          address: this.address,
          detail_address: this.detailAddress,
          phone_number: this.tel_1 + '-' + this.tel_2 + '-' + this.tel_3,
          reciever: this.recipientName,
          is_default: this.isSelectDefault ? 1 : 0,
          zone_code: this.zoneCode
        };
        axios.post(url, body, headers).then(() => {
          axios.get(url, headers).then(res => {
            this.shippingLists = res.data;
            this.identifyShippingListFull();
          });
        });
        this.isAddDestination = !this.isAddDestination;
        this.address = '';
        this.detailAddress = '';
        this.tel_1 = '';
        this.tel_2 = '';
        this.tel_3 = '';
        this.recipientName = '';
        this.isSelectDefault = false;
        this.zoneCode = '';
      }
    },
    getDestinationData($event) {
      this.zoneCode = $event.zonecode;
      this.address = $event.address;
      this.isActiveZipcode = false;
    },
    modifyDestinationData($event) {
      this.zoneCode_Modify = $event.zonecode;
      this.address_Modify = $event.address;
      this.isActiveZipcode = false;
    },
    closePostcodeArea() {
      this.isActiveZipcode = false;
    },
    findZipcode() {
      this.isActiveZipcode = true;
    },
    selectDefaultDestination() {
      this.isSelectDefault = !this.isSelectDefault;
    },
    modifyDefaultDestination() {
      this.isSelectDefault_Modify = !this.isSelectDefault_Modify;
    },
    addDestination() {
      if (this.shippingLists.length === 5) return;
      this.isAddDestination = !this.isAddDestination;
    },
    writeDestination() {
      this.isModalAcitve = !this.isModalAcitve;
      this.isAddDestination = false;
    },
    selectRequest(request) {
      this.selectedRequest = request.request;
      this.selectedRequestId = request.id;
      this.isDropdownActive = !this.isDropdownActive;

      if (request.id === 6) {
        this.isMemoActive = true;
      }
      if (request.id !== 6) {
        this.isMemoActive = false;
      }
    },
    getUserSelect() {
      const selected_option = JSON.parse(
        localStorage.getItem('selected_option')
      );
      this.selectedOption = selected_option;
    },
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    }
  },
  watch: {
    isModalAcitve() {
      // 모달이 생성되면 화면으 루트인 html 태그에 overflow hidden 속성을 주는 역할
      if (this.isModalAcitve) {
        document.documentElement.style.overflow = 'hidden';
        return;
      }
      // isModalAcitve 를 지켜보고 있다가 엑스버튼을 눌렀을 때 false 로 만들어주면 알아서 overflow auto 로 바뀜
      document.documentElement.style.overflow = 'auto';
    }
  }
  //   {
  //     "address" : "서울 소래포구",
  //     "phone_number" : "010-1234-1234",
  //     "reciever" : "이용민"
  // },{
};
</script>

<style scoped lang="scss">
@import '../../styles/common.scss';

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.destination-modal {
  @include setFlex(center, center, null);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;

  .modal {
    min-height: 180px;
    width: 500px;
    background-color: #fff;
    opacity: 1;
    z-index: 101;

    .modal-header-wrapper {
      border-top: solid 8px #000;

      .modal-header {
        @include setFlex(space-between, null, null);
        padding: 24px 22px;
        border-bottom: solid 1px #e1e1e1;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.1;
      }
    }

    .content-wrapper {
      min-width: 500px;
      max-height: 570px;
      overflow-y: scroll;
      padding: 32px 32px 0 32px;

      .no-content {
        @include setFlex(center, center, column);
        @include setSize(100%, 267px);
        opacity: 0.3;

        .fas {
          margin-bottom: 13px;
          font-size: 45px;
        }
      }

      .destination-list {
        padding: 18px 32px;
        margin-top: 12px;
        border-radius: 4px;
        border: solid 1.5px #bdbdbd;

        &:first-child {
          margin-top: 0;
        }

        .info-name-wrapper {
          margin: 13px 0;

          .info-name {
            display: inline-block;
            max-width: calc(100% - 96px);
            font-size: 22px;
            font-weight: bold;
          }

          span {
            display: inline-block;
            margin: -1px 0 0 8px;
            padding: 6px 15px;
            border: solid 1px #9e9e9e;
            border-radius: 13px;
            vertical-align: top;
            font-size: 10px;
            color: #9e9e9e;
          }
        }

        .address,
        .tel {
          padding-top: 11px;
          font-size: 15px;
          word-break: break-all;
          color: #1e1e1e;
        }

        .list-btn-wrapper {
          margin: 24px 0 13px 0;

          .delete {
            display: inline-block;
            padding: 12px 23px;
            border-radius: 4px;
            border: solid 1px #bdbdbd;
            font-size: 14px;
            font-weight: 500;
            background-color: #fff;
            color: #9e9e9e;
            cursor: default;
          }

          .modify {
            display: inline-block;
            padding: 12px 23px;
            border-radius: 4px;
            border: solid 1px #bdbdbd;
            font-size: 14px;
            font-weight: 500;
            background-color: #fff;
            color: #000;
            cursor: pointer;
          }

          .select {
            display: inline-block;
            float: right;
            padding: 12px 23px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            background-color: #000;
            color: #fff;
            cursor: pointer;
          }
        }
      }

      .destination-info-container {
        font-size: 16px;

        .destination-info-table {
          width: 100%;
          table-layout: auto;

          tbody {
            tr {
              th {
                padding: 15px 2px;
                font-weight: bold;
              }

              td {
                padding: 5px 5px 0 24px;

                .input-common {
                  padding: 13px;
                  border: solid 0.5px #bdbdbd;
                  border-radius: 4px;
                  background-color: #fff;

                  &:last-child {
                    margin-top: 4px;
                  }

                  &:focus {
                    outline: none;
                  }
                }

                .recipient {
                  width: 100%;
                }

                .telephone {
                  width: calc(100% / 3.22);
                  margin-right: 5px;
                  text-align: center;
                }

                .zip-code {
                  width: calc(100% - 130px);
                }

                .find-zipcode-btn {
                  display: inline-block;
                  width: 124px;
                  padding: 16px 12px;
                  border: 1px solid #000;
                  border-radius: 4px;
                  color: #fff;
                  text-align: center;
                  font-size: 14px;
                  background-color: #000;

                  &:hover {
                    transition-duration: 0.8s;
                    color: #000;
                    background-color: #fff;
                  }
                }

                .daum-postcode-area {
                  position: relative;
                  border: 1px solid #000;
                  margin: 5px 0px;

                  .close-postcode-btn {
                    position: absolute;
                    right: -1px;
                    top: -1px;
                    cursor: pointer;
                    z-index: 1;
                  }
                }

                .detail-address {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }

    .save-default-destination-wrapper {
      padding: 20px 32px 0 32px;
      margin-top: 32px;
      border-top: solid 0.5px #e1e1e1;
      font-size: 14px;
      cursor: pointer;

      .far {
        margin-right: 8px;
        opacity: 0.2;
        font-size: 18px;
        cursor: pointer;
      }
    }

    .modal-footer-wrapper {
      margin-top: 32px;
      padding: 0 32px 32px 32px;

      .add-destination-btn {
        width: 100%;
        padding: 22px 0;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background-color: #000;
        cursor: pointer;
      }

      .add-destination-btn-full {
        width: 100%;
        padding: 22px 0;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background-color: #9e9e9e;
        cursor: pointer;
      }

      .prev-btn {
        display: inline-block;
        width: 49%;
        padding: 22px 0;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        background: #9e9e9e;
        cursor: pointer;
      }

      .add-btn {
        display: inline-block;
        width: 49%;
        padding: 22px 0;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        background: #000;
        cursor: pointer;
      }
    }
  }
}

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
        cursor: pointer;
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

          .write-memo {
            @include setFlex(space-between, center, null);
            width: 100%;
            padding: 13px 20px;
            margin-top: 14px;
            border: none;
            background-color: #f5f5f5;
            color: #8d8d8d;
            line-height: 16px;
            font-size: 14px;

            &:focus {
              outline: none;
            }
          }

          .dropdown-root {
            position: relative;

            .shipping-memo {
              position: absolute;
              width: 100%;
              border: 1px solid #f5f5f5;
              border-radius: 0 0 3px 3px;
              font-size: 14px;
              background-color: #fff;
              z-index: 5;

              li {
                padding: 13px 20px;
                cursor: pointer;

                &:hover {
                  background-color: #f8f8f8;
                }
              }
            }
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
