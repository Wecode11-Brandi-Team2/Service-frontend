export default {
  namespaced: true,
  state: {
    isLogin: localStorage.getItem('access_token') ? true : false,
    products: {
      product: {}
    },
    cancelItemData: {},
    refundItemData: {}
  },

  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    getProducts(state) {
      return state.products;
    }
  },

  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    updateProducts(state, product) {
      const newProducts = {
        product
      };
      state.products = newProducts;
    },

    CANCEL_ITEM(state, info) {
      state.cancelItemData.date = info.created_at;
      state.cancelItemData.orderNumber = info.order_detail_id;
      state.cancelItemData.sellerName = info.korean_name;
      state.cancelItemData.itemImage = info.main_img;
      state.cancelItemData.itemName = info.name;
      state.cancelItemData.amount = info.units;
      state.cancelItemData.price = info.price.toLocaleString();
      state.cancelItemData.color = info.option_color;
      state.cancelItemData.status = info.order_status_id;
    },

    REFUND_ITEM(state, info) {
      state.refundItemData.date = info.created_at;
      state.refundItemData.orderNumber = info.order_detail_id;
      state.refundItemData.sellerName = info.korean_name;
      state.refundItemData.itemImage = info.main_img;
      state.refundItemData.itemName = info.name;
      state.refundItemData.amount = info.units;
      state.refundItemData.price = info.price.toLocaleString();
      state.refundItemData.color = info.option_color;
      state.refundItemData.status = info.order_status_id;
      state.refundItemData.totalRefund = info.total_payment.toLocaleString();
    }
  },

  actions: {
    login({ commit }, token) {
      localStorage.setItem('access_token', token);
      commit('login');
    },
    logout({ commit }) {
      localStorage.removeItem('access_token');
      commit('logout');
    },
    updateProducts({ commit }, { product }) {
      commit('updateProducts', product);
    }
  }
};
