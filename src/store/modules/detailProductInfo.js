// import axios from 'axios';

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
      review_count: 'count',
      review_rating: 'rating',
      sales_amount: 50,
      seller_name: '알콜',
      seller_url: 'https://web-staging.brandi.co.kr/shop/allcall',
      size: [
        {
          id: 12,
          size: 'Free'
        }
      ]
    },
    isColorSelected: false,
    // ---
    // 실제 api 통신할 부분
    productDetail: {}
  },
  mutations: {
    COLOR_SELECT(state, Selected) {
      state.isColorSelected = Selected;
    }
    // 4. 받아온 api 를 data 에 집어 넣는 과정
    // SET_DETAIL_INFO(state, detail) {
    //   state.productDetail = detail;
    // }
  },
  actions: {
    // 3. 백엔드에서 api 를 받아와서 정보를 mutations 를 통해 올리기 전 과정
    // api 주소만 입력하면 됨
    // getDetailInfo({ commit }) {
    //   axios.get('').then(res => {
    //     commit('SET_DETAIL_INFO', res.data);
    //   });
    // }
  }
};
