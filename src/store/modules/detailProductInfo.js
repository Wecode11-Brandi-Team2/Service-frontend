export default {
  state: {
    productInfo: {
      color: [
        {
          color: 'Black',
          id: 7
        },
        {
          color: 'Navy',
          id: 8
        },
        {
          color: 'White',
          id: 9
        },
        {
          color: 'Beige',
          id: 10
        },
        {
          color: 'Oatmeal',
          id: 11
        }
      ],
      discount_price: null,
      discount_rate: null,
      id: 2,
      image: [
        {
          id: 1,
          image_url:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862781_image1_L.jpg'
        },
        {
          id: 2,
          image_url:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image2_L.jpg'
        },
        {
          id: 3,
          image_url:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862783_image3_L.jpg'
        },
        {
          id: 4,
          image_url:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862784_image4_L.jpg'
        },
        {
          id: 5,
          image_url:
            'https://image.brandi.me/cproduct/2020/05/07/16132323_1588862787_image5_L.jpg'
        }
      ],
      name: '네츄럴 시스루 단추 니트 (5color)_ 알콜',
      price: 16100,
      sales_amount: 50,
      seller_name: '알콜',
      seller_url: 'https://web-staging.brandi.co.kr/shop/allcall',
      size: [
        {
          id: 12,
          size: 'Free'
        },
        {
          id: 13,
          size: 'S'
        },
        {
          id: 14,
          size: 'M'
        },
        {
          id: 15,
          size: 'L'
        }
      ]
    },
    isColorSelected: false,
    userSelection: [],
    selectedOption: {},
    isOptionSelected: false,
    myQna: [1],
    qnaData2: [
      {
        a_content: '즐거운 쇼핑되세요',
        a_created_at: 'Wed, 25 Sep 2020 05:15:56 GMT',
        a_id: null,
        a_is_private: 1,
        q_content: '\ubb38\uc758 \ub0b4\uc6a9 - product 7',
        q_created_at: 'Wed, 30 Sep 2020 05:15:56 GMT',
        q_id: 19,
        q_is_answered: 1,
        q_is_private: 0,
        q_type: '\uc0c1\ud488 \ubb38\uc758',
        q_user: 'user200'
      },
      {
        a_content: '즐거운 쇼핑되세요',
        a_created_at: null,
        a_id: null,
        a_is_private: 0,
        q_content: '\ubb38\uc758 \ub0b4\uc6a9 2 - product 7',
        q_created_at: 'Wed, 30 Sep 2020 05:17:13 GMT',
        q_id: 20,
        q_is_answered: 1,
        q_is_private: 0,
        q_type: '\uc0c1\ud488 \ubb38\uc758',
        q_user: 'user200'
      },
      {
        a_content: null,
        a_created_at: null,
        a_id: null,
        a_is_private: null,
        q_content: '\ubb38\uc758 \ub0b4\uc6a9 3 - product 7',
        q_created_at: 'Wed, 30 Sep 2020 05:18:09 GMT',
        q_id: 21,
        q_is_answered: 0,
        q_is_private: 1,
        q_type: '\uc0c1\ud488 \ubb38\uc758',
        q_user: 'user200'
      },
      {
        a_content: null,
        a_created_at: null,
        a_id: null,
        a_is_private: null,
        q_content: '\ubb38\uc758 \ub0b4\uc6a9 4 - product 7',
        q_created_at: 'Wed, 30 Sep 2020 05:18:12 GMT',
        q_id: 22,
        q_is_answered: 0,
        q_is_private: 1,
        q_type: '\uc0c1\ud488 \ubb38\uc758',
        q_user: 'user200'
      }
    ]
  },
  mutations: {
    COLOR_SELECT(state, Selected) {
      state.isColorSelected = Selected;
    },
    USER_COLOR_SELECT(state, color) {
      state.selectedOption.selectedColor = color;
    },
    USER_SIZE_SELECT(state, size) {
      state.selectedOption.selectedSize = size;
      state.userSelection = state.userSelection.concat([state.selectedOption]);
      state.isColorSelected = false;
      state.isOptionSelected = !state.isOptionSelected;
      // 질문: state.userSelection 에 push, concat 다 해봤는데 다른 옵션을 추가했을 때 두번째 옵션부터 첫번째로 선택한 옵션을 기억하지 못합니다....
    },
    DELETE_OPTION(state) {
      if (confirm('선택하신 상품을 삭제하시겠습니까?') === true) {
        state.userSelection = [];
        state.isOptionSelected = !state.isOptionSelected;
      }
    }
  },
  actions: {}
};
