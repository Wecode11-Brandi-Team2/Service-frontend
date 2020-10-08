export default {
  namespaced: true,
  state: {
    products: {
      product: {}
    },
    cancelItemData: {}
  },

  mutations: {
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
    }
  },

  actions: {
    updateProducts({ commit }, { product }) {
      commit('updateProducts', product);
    }
  },

  getters: {
    getProducts(state) {
      return state.products;
    }
  }
};
